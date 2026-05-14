interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-[#14394D] rounded-[15px] p-8 flex flex-col gap-4 h-full">
      <h3 className="text-[#FF7716] text-[24px] font-bold uppercase leading-tight font-[Sora]">
        {title}
      </h3>
      <p className="text-[#FFFEFB] text-[16px] font-normal leading-[22px] font-[Sora]">
        {description}
      </p>
    </div>
  );
}
