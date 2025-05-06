import { HeroSection } from "@/components/Hero"
import { About } from "@/components/About"
import { OurProcess } from "@/components/Process"
import { WhyChooseUs } from "@/components/WhyChooseUs"

export default function Home(){
  return (
    <div className="bg-[#fffcf4] font-sans">
      <HeroSection />
      <About />
      <OurProcess />
      <WhyChooseUs />
    </div>
  )
}
