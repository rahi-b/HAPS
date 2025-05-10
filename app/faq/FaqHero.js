import Link from "next/link";
import Image from "next/image";
import FaqHeroImage from '../../public/Images/FaqHeroImage.jpg'
import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export const FaqHero =()=>{
    return (
        <div className="relative">
          <div className="bg-[#4b276c] text-white py-60  text-center relative z-10">
            <FadeInOnScroll direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Faq</h1>
            </FadeInOnScroll>
            <FadeInOnScroll direction="up" delay={0.2}>
            <div className="flex justify-center items-center gap-2 text-sm">
              <Link href="/"><span>Home</span></Link>
              <span>→</span>
              <span>Faq</span>
            </div>
            </FadeInOnScroll>
          </div>
    
          {/* Overlapping image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-46 z-20 rounded-xl overflow-hidden w-[90%] max-w-7xl shadow-lg">
          <FadeInOnScroll direction="up" delay={0.3}>
            <Image
              src={FaqHeroImage}
              alt="Group therapy session"
              width={1200}
              height={500}
              className="w-full h-[450px] object-cover"
              priority
            />
            </FadeInOnScroll>
          </div>
    
          {/* Bottom light background */}
          <div className="bg-[#fffcf4] pt-96 pb-10" />   
        </div>
      );
}