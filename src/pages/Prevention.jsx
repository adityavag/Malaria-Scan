import React from "react";
import { Droplet, Pill, ShieldCheck } from "lucide-react";
import Card from "../components/Card";
const Prevention = () => {
    return(
<div className="bg-[#f3f4f6] md:px-32 p-16">
        <div className="text-3xl font-semibold text-center">Prevention Methods</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-4 md:space-x-4">
        <Card
            icon = <ShieldCheck className="text-[#21c55d]"/>
            title = "Bed Nets"
            content = "Use insecticide-treated bed nets to protect against mosquito bites while sleeping."
        />
        <Card
            icon = <Droplet className="text-[#2463eb]"/>
            title = "Insect Repellent"
            content = "Apply insect repellent to exposed skin when outdoors, especially during peak mosquito hours."
        />
        <Card
            icon = <Pill className="text-[#B77AF4]"/>
            title = "Preventive Medicine"
            content = "Take preventive medications as prescribed when traveling to malaria-endemic areas."
        />
        </div>
        </div>
    )
}

export default Prevention;