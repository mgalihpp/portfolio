type IconProps = {
  size?: number;
  className?: string;
};

const OpenCodeIcon = ({ size = 24, className = '' }: IconProps) => (
  <span className={`inline-flex ${className}`} style={{ width: size, height: size }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block dark:hidden"
      aria-label="OpenCode logo for light mode"
    >
      <path d="M180 240H60V120H180V240Z" fill="#CFCECD" />
      <path d="M180 60H60V240H180V60ZM240 300H0V0H240V300Z" fill="#211E1E" />
    </svg>
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden dark:block"
      aria-label="OpenCode logo for dark mode"
    >
      <path d="M180 240H60V120H180V240Z" fill="#4B4646" />
      <path d="M180 60H60V240H180V60ZM240 300H0V0H240V300Z" fill="#F1ECEC" />
    </svg>
  </span>
);

export default OpenCodeIcon;
