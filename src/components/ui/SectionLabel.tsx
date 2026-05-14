interface SectionLabelProps {
  children: React.ReactNode;
  color?: "orange" | "dark";
  className?: string;
}

export default function SectionLabel({ children, color = "orange", className = "" }: SectionLabelProps) {
  const colorClass = color === "orange" ? "text-[#FF7716]" : "text-[#14394D]";
  return (
    <p
      className={`text-[16px] font-normal uppercase tracking-[2.99px] font-[Sora] ${colorClass} ${className}`}
    >
      {children}
    </p>
  );
}
