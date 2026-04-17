'use client'

import { useState } from 'react'

interface ServiceCardProps {
  title: string
  desc: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, desc, icon }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#161612',
        border: `0.5px solid ${hovered ? '#3A1F10' : '#1E1E1B'}`,
        borderRadius: 12,
        padding: '24px',
        transition: 'border-color 0.2s',
      }}
    >
      <div style={{
        width: 40,
        height: 40,
        background: '#1A0E08',
        border: '0.5px solid #3A1F10',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 500, color: '#F5F5F3', marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: '#555551', lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  )
}
