interface ProtocolStepProps {
  number: string;
  title: string;
  isLast?: boolean;
}

export default function ProtocolStep({ number, title, isLast = false }: ProtocolStepProps) {
  return (
    <div className="flex flex-col items-center flex-1 relative">
      <div className="w-16 h-16 rounded-full bg-[#14394D] flex items-center justify-center text-white text-[22px] font-semibold font-[Sora] z-10 relative">
        {number}
      </div>
      {!isLast && (
        <div className="absolute top-8 left-1/2 w-full h-[2px] border-t-2 border-dashed border-[#FF7716]" />
      )}
      <p className="mt-4 text-center text-[#14394D] text-[16px] font-semibold uppercase tracking-wide font-[Sora] max-w-[140px]">
        {title}
      </p>
    </div>
  );
}
