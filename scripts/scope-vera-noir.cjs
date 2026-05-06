/**
 * Scope boutique CSS under #vera-noir-root; preserve @keyframes; scope @media contents.
 */
const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const htmlPath = path.join(rootDir, 'html-originals', 'vera-noir-boutique.html')
const outPath = path.join(rootDir, 'app', 'demos', 'boutique-ropa', 'scoped-style.css')

const PREFIX = '#vera-noir-root'

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
  let out = ''
  const s = css
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

const html = fs.readFileSync(htmlPath, 'utf8')
const m = html.match(/<style>([\s\S]*?)<\/style>/)
if (!m) throw new Error('No style in vera-noir-boutique.html')

let css = m[1].trim()
css = css.replace(/\/\*[\s\S]*?\*\//g, '')
// Strip reset, :root, html, body — replaced by header below
css = css.replace(/\*,\s*\*::before,\s*\*::after\s*\{[^}]+\}\s*/, '')
css = css.replace(/:root\s*\{([^}]+)\}\s*/, '')
css = css.replace(/html\s*\{[^}]+\}\s*/, '')
css = css.replace(/body\s*\{([^}]+)\}\s*/, (_, body) => `__BODY__${body}__ENDBODY__`)

const bodyMatch = css.match(/__BODY__([\s\S]*?)__ENDBODY__/)
const bodyInner = bodyMatch ? bodyMatch[1] : ''
css = css.replace(/__BODY__[\s\S]*?__ENDBODY__\s*/, '')

const header = `${PREFIX}, ${PREFIX} *, ${PREFIX} *::before, ${PREFIX} *::after {box-sizing:border-box;margin:0;padding:0}
${PREFIX} {
  --white:#FAFAF8;--off:#F4F2EE;--warm:#EDE8E0;
  --black:#0A0908;--dark:#111009;--card:#181614;
  --sand:#C8B89A;--sand2:#DDD0BC;--sand3:#EEE5D6;
  --ink:#2A2520;--muted:#7A7068;--border:rgba(200,184,154,0.18);
  scroll-behavior:smooth;
  ${bodyInner.trim().replace(/;?\s*$/, ';')}
  min-height:100vh;width:100%;position:relative;isolation:isolate;
}
`

const out = '/* VERA NOIR — scoped for Next demo */\n' + header + '\n' + scopeBlock(css.trim()) + '\n'
fs.writeFileSync(outPath, out)
console.log('Wrote', outPath, 'bytes', fs.statSync(outPath).size)
