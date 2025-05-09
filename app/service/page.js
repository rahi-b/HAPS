import { ServiceHero } from "./ServiceHero"
import { Service } from "@/components/Service"
import { OurProcess } from "@/components/Process"
import { BookingForm } from "@/components/Booking component"


export default function ServicePage(){
  return (
    <div className="bg-[#fffcf4] font-sans">
        <ServiceHero />
        <Service />
        <OurProcess />
        <BookingForm />
    </div>
  )
}
