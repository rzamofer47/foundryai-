/**
 * Scope Julian Cross Photography CSS under #julian-cross-root.
 */
const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const cssPath = path.join(rootDir, 'html-originals', 'julian-cross-photography-styles.css')
const outPath = path.join(rootDir, 'app', 'demos', 'fotografia', 'scoped-style.css')

const PREFIX = '#julian-cross-root'

function findMatchingBrace(str, openIdx) {
  let depth = 0
  for (let j = openIdx; j < str.length; j++) {
    if (str[j] === '{') depth++
    else if (str[j] === '}') {
      depth--
      if (depth === 0) return j
    }
  }
  return str.length - 1
}

function prefixSelectorList(sel) {
  return sel
    .split(',')
    .map((p) => {
      const s = p.trim()
      if (!s) return s
      return `${PREFIX} ${s}`
    })
    .join(', ')
}

function scopeBlock(css) {
  let i = 0
  const s = css
  let out = ''
  while (i < s.length) {
    while (i < s.length && /\s/.test(s[i])) i++
    if (i >= s.length) break

    if (s[i] === '}') {
      out += '}'
      i++
      continue
    }

    if (s.startsWith('@keyframes', i)) {
      const ob = s.indexOf('{', i)
      const cb = findMatchingBrace(s, ob)
      out += s.slice(i, cb + 1)
      i = cb + 1
      continue
    }

    if (s.startsWith('@media', i)) {
      const ob = s.indexOf('{', i)
      const cb = findMatchingBrace(s, ob)
      const inner = s.slice(ob + 1, cb)
      out += s.slice(i, ob + 1) + scopeBlock(inner) + '}'
      i = cb + 1
      continue
    }

    const ob = s.indexOf('{', i)
    if (ob === -1) break
    const sel = s.slice(i, ob).trim()
    const cb = findMatchingBrace(s, ob)
    const body = s.slice(ob + 1, cb)

    if (!sel) {
      i = cb + 1
      continue
    }

    if (sel === 'from' || sel === 'to' || /^\d/.test(sel)) {
      out += sel + '{' + body + '}'
    } else {
      out += prefixSelectorList(sel) + '{' + body + '}'
    }
    i = cb + 1
  }
  return out
}

let css = fs.readFileSync(cssPath, 'utf8').trim()
css = css.replace(/\/\*[\s\S]*?\*\//g, '')

let rootVars = ''
css = css.replace(/:root\s*\{([^}]+)\}\s*/, (_, v) => {
  rootVars = v.trim().replace(/;?\s*$/, '')
  return ''
})

css = css.replace(/\*,\s*\*::before,\s*\*::after\s*\{[^}]+\}\s*/, '')
css = css.replace(/html\s*\{[^}]+\}\s*/, '')

let bodyInner = ''
css = css.replace(/body\s*\{([^}]+)\}\s*/, (_, b) => {
  bodyInner = b.trim().replace(/;?\s*$/, '')
  return ''
})

const header = `${PREFIX}, ${PREFIX} *, ${PREFIX} *::before, ${PREFIX} *::after {box-sizing:border-box;margin:0;padding:0}
${PREFIX} {
  ${rootVars};
  scroll-behavior:smooth;
  ${bodyInner};
  min-height:100vh;width:100%;position:relative;isolation:isolate;
}
`

const out = '/* Julian Cross Photography — scoped for Next demo */\n' + header + '\n' + scopeBlock(css.trim()) + '\n'
fs.writeFileSync(outPath, out)
console.log('Wrote', outPath, fs.statSync(outPath).size, 'bytes')
