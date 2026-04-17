import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'emails.json')

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    let emails: string[] = []

    try {
      const raw = await fs.readFile(DATA_FILE, 'utf-8')
      emails = JSON.parse(raw)
    } catch {
      emails = []
    }

    if (!emails.includes(email)) {
      emails.push(email)
      await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2))
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
