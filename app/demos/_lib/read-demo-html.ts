import fs from 'node:fs/promises'
import path from 'node:path'

/** Loads `html-originals/{slug}.html` from the project root. Returns null if missing. */
export async function readDemoHtml(slug: string): Promise<string | null> {
  const filePath = path.join(process.cwd(), 'html-originals', `${slug}.html`)
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch {
    return null
  }
}
