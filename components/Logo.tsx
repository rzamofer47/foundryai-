export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="48" height="48" rx="12" fill="#161612" />
      <polygon points="28,10 44,20 44,36 28,46 12,36 12,20" fill="none" stroke="#2A2A28" strokeWidth="1" />
      <polygon points="28,16 39,22.5 39,33.5 28,40 17,33.5 17,22.5" fill="#1A1A17" />
      <polygon points="28,22 34,25.5 34,32.5 28,36 22,32.5 22,25.5" fill="#E8622A" opacity="0.92" />
      <line x1="28" y1="10" x2="28" y2="22" stroke="#E8622A" strokeWidth="1.5" opacity="0.45" />
      <line x1="44" y1="20" x2="34" y2="25.5" stroke="#E8622A" strokeWidth="1.5" opacity="0.45" />
      <line x1="44" y1="36" x2="34" y2="32.5" stroke="#E8622A" strokeWidth="1.5" opacity="0.45" />
      <line x1="28" y1="46" x2="28" y2="36" stroke="#E8622A" strokeWidth="1.5" opacity="0.45" />
      <line x1="12" y1="36" x2="22" y2="32.5" stroke="#E8622A" strokeWidth="1.5" opacity="0.45" />
      <line x1="12" y1="20" x2="22" y2="25.5" stroke="#E8622A" strokeWidth="1.5" opacity="0.45" />
    </svg>
  )
}
