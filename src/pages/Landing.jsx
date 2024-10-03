import React from "react";
import Lottie from "lottie-react";
import Art from "../assets/lottie/Art.json"
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Landing = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white md:px-32 p-16 grid grid-cols-1 md:grid-cols-2 items-center w-full">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div className="text-5xl font-bold">{t("detect_malaria")}</div>
                    <div className="text-3xl font-semibold text-[#2463eb]">{t("prevent_outbreaks")}</div>
                    <div className="text-[#4b5563]">{t("description")}</div>
                    <div>
                    </div>
                    <Link to="/detect">
                        <button className="bg-[#2463eb] p-2 w-1/2 rounded-md mx-auto md:mx-0 text-white font-semibold text-xl"
                            onClick={() => {
                                console.log(localStorage.getItem('i18nextLng'));
                            }}>
                            {t("click")}
                        </button>
                    </Link>
                </div>
                <Lottie animationData={Art} loop={true} />
            </div>
        </div>
    )
}

export default Landing;