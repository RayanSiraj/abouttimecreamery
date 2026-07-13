export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Ice cream scoop and stuffed potato sharing one food truck badge"
    >
      <circle cx="32" cy="32" r="30" fill="var(--truck-night)" />
      <path
        d="M10 35h44v14a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V35Z"
        fill="var(--creamery-blue)"
      />
      <path
        d="m18 35 8 19h-5l-8-19h5Z"
        fill="var(--vanilla-custard)"
        opacity=".8"
      />
      <circle cx="21" cy="26" r="11" fill="var(--strawberry-scoop)" />
      <path
        d="M37 31c0-7 5-12 12-12 4 0 7 2 8 5-1 6-4 10-10 12-5 1-8-1-10-5Z"
        fill="var(--potato-gold)"
      />
      <path
        d="M44 20c1 3 4 5 8 6M45 29c4-1 8-1 11 1"
        fill="none"
        stroke="var(--chive-green)"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <circle cx="20" cy="48" r="4" fill="var(--truck-night)" />
      <circle cx="45" cy="48" r="4" fill="var(--truck-night)" />
    </svg>
  );
}
