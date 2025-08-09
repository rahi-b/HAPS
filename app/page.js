import { HeroSection } from "@/components/Hero"
import { About } from "@/components/About"
import { OurProcess } from "@/components/Process"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Testimonial } from "@/components/Testimonial"
import { Service } from "@/components/Service"
import { Team } from "@/components/Team"
import { Faq } from "@/components/Faq"
import { BookingForm } from "@/components/Booking component"
import { GetStarted } from "@/components/GetStarted"

export default function Home(){
  return (
    <div className="bg-[#fffcf4] font-sans overflow-hidden">
      <HeroSection />
      <About />
      <OurProcess />
      <Service />
      <WhyChooseUs />
      <Testimonial />
      <GetStarted />
      <Team />
      <Faq />
      <BookingForm />
    </div>
  )
}
