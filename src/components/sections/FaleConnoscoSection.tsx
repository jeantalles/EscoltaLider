import Image from "next/image";
import IconeWhatsapp from "@/components/icons/IconeWhatsapp";
import IconeMail from "@/components/icons/IconeMail";

export default function FaleConnoscoSection() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5531972489605";
  const phone = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(31) 97248-9605";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "escoltalider@escoltalider.com.br";

  return (
    <section id="contato" className="bg-[#FFFEFB] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#14394D] text-[40px] md:text-[48px] font-semibold leading-tight font-[Sora]">
                Fale conosco e transporte sua carga com segurança.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#BFD6DE] flex items-center justify-center flex-shrink-0">
                  <IconeWhatsapp width={24} height={24} className="[&_path]:fill-[#14394D]" />
                </div>
                <div>
                  <p className="text-[#14394D]/50 text-[13px] font-normal uppercase tracking-wider font-[Sora]">WhatsApp</p>
                  <p className="text-[#14394D] text-[18px] font-semibold font-[Sora] group-hover:text-[#FF7716] transition-colors">
                    {phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#BFD6DE] flex items-center justify-center flex-shrink-0">
                  <IconeMail width={24} height={24} className="[&_path]:fill-[#14394D]" />
                </div>
                <div>
                  <p className="text-[#14394D]/50 text-[13px] font-normal uppercase tracking-wider font-[Sora]">E-mail</p>
                  <p className="text-[#14394D] text-[16px] font-semibold font-[Sora] group-hover:text-[#FF7716] transition-colors">
                    {email}
                  </p>
                </div>
              </a>
            </div>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold text-[16px] font-[Sora] px-8 py-4 rounded-full hover:opacity-90 transition-opacity w-fit"
            >
              <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
                <path d="M17.7408 1.10436C19.1591 1.08102 20.5748 1.23454 21.955 1.56139C26.2812 2.60272 30.0142 5.32457 32.3287 9.12497C34.6183 12.898 35.3217 17.4239 34.2846 21.7137C33.2288 26.0353 30.5002 29.7608 26.6985 32.0713C23.0021 34.3389 18.5603 35.0567 14.3378 34.069C13.4094 33.8935 12.3379 33.4944 11.4644 33.1287C11.0643 32.9612 10.446 32.6172 10.0601 32.5016C9.50017 32.6021 8.73729 32.8249 8.17028 32.974L4.97596 33.813C4.47366 33.9445 1.50301 34.6779 1.24365 34.8309C1.38365 34.1714 1.62307 33.3656 1.80337 32.7065L2.95586 28.5012C3.1621 27.749 3.42545 26.878 3.59103 26.1302C3.36415 25.6411 3.08176 25.1775 2.84487 24.6487C1.9929 22.7638 1.5046 20.7349 1.40565 18.6687C1.02137 9.05299 8.15814 1.48189 17.7408 1.10436Z" fill="white"/>
                <path d="M12.2599 10.0819C12.9096 10.0825 13.5014 9.97188 13.8171 10.66C14.2135 11.5241 14.5485 12.41 14.9192 13.2854C15.062 13.6227 15.2124 13.9518 15.3036 14.3074C15.1455 14.9864 14.51 15.5756 14.1097 16.1405C13.7037 16.7134 14.0187 16.9748 14.3483 17.4867C15.6546 19.5152 17.7864 21.3373 20.1178 21.9882C20.6335 22.1322 21.7689 19.9006 22.3188 19.8344C23.671 20.1518 25.0973 21.0078 26.3335 21.6502C26.9015 21.9453 26.2372 23.8519 25.9052 24.2894C25.461 24.7715 25.0412 25.0659 24.4603 25.3662C22.8064 26.2213 21.2686 25.7481 19.6411 25.1884C16.0315 23.9471 13.4225 21.4192 11.2515 18.3561C9.58411 16.0034 8.72298 13.2249 10.8286 10.8176C11.2742 10.3092 11.5609 10.1309 12.2599 10.0819Z" fill="white"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/car-bg.jpg"
              alt="Veículo de escolta Escolta Lider"
              width={620}
              height={520}
              className="rounded-[20px] object-cover w-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
