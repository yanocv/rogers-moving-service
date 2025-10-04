import React from "react";

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    width={props.width || 24}
    height={props.height || 24}
    {...props}
  >
    <radialGradient id="insta-gradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#fdf497" />
      <stop offset="45%" stopColor="#fdf497" />
      <stop offset="60%" stopColor="#fd5949" />
      <stop offset="90%" stopColor="#d6249f" />
      <stop offset="100%" stopColor="#285AEB" />
    </radialGradient>
    <circle cx="16" cy="16" r="16" fill="url(#insta-gradient)" />
    <rect x="9" y="9" width="14" height="14" rx="7" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="16" cy="16" r="4" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="21" cy="11" r="1.5" fill="#fff" />
  </svg>
);

export default InstagramIcon;
