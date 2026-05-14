import IconeAspas from "@/components/icons/IconeAspas";

interface TestimonialCardProps {
  name: string;
  company?: string;
  text: string;
}

export default function TestimonialCard({ name, company, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[15px] p-8 shadow-sm flex flex-col gap-4 border border-[#BFD6DE]/40">
      <IconeAspas width={32} height={28} />
      <p className="text-[#14394D] text-[16px] font-normal leading-relaxed font-[Sora] flex-1">
        &ldquo;{text}&rdquo;
      </p>
      <div>
        <p className="text-[#14394D] text-[16px] font-semibold font-[Sora]">{name}</p>
        {company && <p className="text-[#14394D]/60 text-[14px] font-normal font-[Sora]">{company}</p>}
      </div>
    </div>
  );
}
