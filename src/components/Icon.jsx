// Lightweight inline SVG icon set. All icons inherit `currentColor`.
const paths = {
  // service + value icons
  stamp: <><path d="M9 3h6v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3V3Z"/><path d="M6 14h12v3H6z"/><path d="M4 20h16"/><path d="M12 10v4"/></>,
  truck: <><path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
  route: <><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H14a3 3 0 0 0 0-6H10a3 3 0 0 1 0-6h5.5"/></>,
  plane: <><path d="M10.5 12.5 3 14l-.5-2 6-3.5V4.5A1.5 1.5 0 0 1 10 3a1.5 1.5 0 0 1 1.5 1.5V8.5l6 3.5-.5 2-7.5-1.5-1 5 2 1.2v1.3l-3-.8-3 .8v-1.3l2-1.2Z"/></>,
  warehouse: <><path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-7h10v7"/><path d="M7 17h10"/></>,
  // values
  heart: <><path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3 1.5 4 3 1-1.5 2-3 4-3 3.5 0 5 3.5 3.5 6.5C19 15.65 12 20 12 20Z"/></>,
  gauge: <><path d="M12 13a9 9 0 1 0-9 0"/><path d="M12 13 8 9" /><path d="M3 13h18" transform="translate(0 0)"/></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2"/></>,
  leaf: <><path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z"/><path d="M9 15c2-3 5-5 8-6"/></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  // why-choose
  pin: <><path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z"/><circle cx="12" cy="11" r="2.2"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></>,
  map: <><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></>,
  box: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 21v-9"/></>,
  chat: <><path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>,
  // ui
  check: <path d="m5 12 4 4 10-10"/>,
  arrow: <path d="M5 12h13m-6-6 6 6-6 6"/>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  phone: <><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  location: <><path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z"/><circle cx="12" cy="11" r="2.2"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  quote: <><path d="M9 7H5v6h4v-2H7a2 2 0 0 1 2-2Z" transform="translate(-1 1)"/><path d="M10 7c-2 0-3 1.5-3 4v4h4v-4H9c0-1 .5-2 2-2Zm7 0c-2 0-3 1.5-3 4v4h4v-4h-2c0-1 .5-2 2-2Z"/></>,
  gauge2: <><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 4a8 8 0 0 1 8 8M4 12a8 8 0 0 1 8-8"/></>,
  // social
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" fill="none"/></>,
  facebook: <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1Z"/>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17 7v.01"/></>,
  x: <path d="M4 4l7 8-7 8h2.5l5.5-6.3L17.5 20H20l-7.2-8.2L19.5 4H17l-5 5.7L7 4H4Z"/>,
}

export default function Icon({ name, size = 22, className = '', strokeWidth = 1.9, ...rest }) {
  const solid = ['facebook', 'x'].includes(name)
  return (
    <svg
      className={`ico ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={solid ? 'currentColor' : 'none'}
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name] || null}
    </svg>
  )
}
