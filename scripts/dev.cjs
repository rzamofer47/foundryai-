/**
 * Starts `next dev` on the first free port in [3070, 3200),
 * bound to 127.0.0.1 (avoids some Windows IPv6 / :: conflicts).
 */
const net = require('net')
const { spawn } = require('child_process')
const path = require('path')

const root = path.join(__dirname, '..')
const PORT_MIN = 3070
const PORT_MAX = 3199

function canBind(port) {
  return new Promise((resolve) => {
    const s = net.createServer()
    const done = (ok) => {
      try {
        s.close()
      } catch (_) {
        /* ignore */
      }
      resolve(ok)
    }
    s.once('error', () => done(false))
    s.listen(port, '127.0.0.1', () => done(true))
  })
}

async function pickPort() {
  for (let p = PORT_MIN; p <= PORT_MAX; p++) {
    if (await canBind(p)) return p
  }
  throw new Error(`No free port on 127.0.0.1 between ${PORT_MIN} and ${PORT_MAX}. Close other dev servers or reboot.`)
}

pickPort()
  .then((port) => {
    console.log('')
    console.log('  Foundry AI — next dev')
    console.log(`  Open: http://127.0.0.1:${port}`)
    console.log(`  (or:  http://localhost:${port})`)
    console.log('')

    const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')
    const child = spawn(process.execPath, [nextBin, 'dev', '-p', String(port), '-H', '127.0.0.1'], {
      stdio: 'inherit',
      cwd: root,
      env: { ...process.env },
      windowsHide: true,
    })

    child.on('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    child.on('exit', (code) => process.exit(code ?? 0))
  })
  .catch((err) => {
    console.error(err.message || err)
    process.exit(1)
  })
