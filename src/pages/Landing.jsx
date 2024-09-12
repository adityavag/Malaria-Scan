import React from "react";
import Lottie from "lottie-react";
import Art from "../assets/lottie/Art.json"
const Landing = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center w-full">
            <div className="flex flex-col space-y-4 text-center md:text-left">
                <div className="text-5xl font-bold">Detect Malaria with AI</div>
                <div className="text-3xl font-semibold text-[#2463eb]">Prevent Malaria Outbreaks</div>
                <div className="text-[#4b5563]">Our cutting-edge AI technology analyzes blood smear images to quickly and accurately detect malaria parasites. By providing early detection, we help prevent outbreaks and save lives in at-risk communities.</div>
            </div>
            <Lottie animationData={Art} loop={true}/>
        </div>
    )
}

export default Landing;