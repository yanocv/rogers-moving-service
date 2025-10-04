import React from "react";

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    width={props.width || 24}
    height={props.height || 24}
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#1877F3" />
    <path
      d="M21.5 16h-3v8h-3v-8h-2v-2.5h2v-1.6c0-2.1 1.2-3.4 3.3-3.4h2.2v2.5h-1.4c-.7 0-.8.3-.8.8v1.7h2.3L21.5 16z"
      fill="#fff"
    />
  </svg>
);

export default FacebookIcon;
