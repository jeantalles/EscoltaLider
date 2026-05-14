interface OrangeButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

export default function OrangeButton({ children, href, onClick, className = "", target }: OrangeButtonProps) {
  const base =
    "inline-flex items-center justify-center bg-[#FF7716] text-white font-semibold text-[16px] font-[Sora] px-8 py-4 rounded-full transition-opacity hover:opacity-90 cursor-pointer";
  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
