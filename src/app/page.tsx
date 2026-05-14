import HeroSection from "@/components/sections/HeroSection";
import QuemSomosSection from "@/components/sections/QuemSomosSection";
import OQueFazemosSection from "@/components/sections/OQueFazemosSection";
import NossoProtocoloSection from "@/components/sections/NossoProtocoloSection";
import MapaSection from "@/components/sections/MapaSection";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import InstagramSection from "@/components/sections/InstagramSection";
import FaleConnoscoSection from "@/components/sections/FaleConnoscoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuemSomosSection />
      <OQueFazemosSection />
      <NossoProtocoloSection />
      <MapaSection />
      <DepoimentosSection />
      <InstagramSection />
      <FaleConnoscoSection />
    </>
  );
}
