import { ContactHero } from "./ContactHero"
import { BookingForm } from "@/components/Booking component"
import { Faq } from "@/components/Faq"


export default function ContactPage(){
    return(
        <div className="bg-[#fffcf4] font-sans">
            <ContactHero />
            <BookingForm />
            <Faq />
        </div>
    )
}