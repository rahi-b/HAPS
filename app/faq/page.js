import { FaqHero } from "./FaqHero"
import { Faq } from "@/components/Faq"
import { Team } from "@/components/Team"
import { BookingForm } from "@/components/Booking component"

export default function FaqPage(){
    return(
        <div className="bg-[#fffcf4] font-sans">
            <FaqHero />
            <Faq />
            <Team />
            <BookingForm />
        </div>
    )
}