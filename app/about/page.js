import { AboutHero } from "./AboutHero"
import { About } from "@/components/About"
import { Team } from "@/components/Team"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Faq } from "@/components/Faq"
import { BookingForm } from "@/components/Booking component"

export default function AboutPage(){
    return(
        <div className="bg-[#fffcf4] font-sans">
            <AboutHero />
            <About />
            <WhyChooseUs />
            <Team />
            <Faq />
            <BookingForm />
        </div>
    )
}