import React from "react";
import { Droplet, Pill, ShieldCheck } from "lucide-react";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

const Prevention = () => {
    const { t } = useTranslation();
    return(
<div className="bg-[#f3f4f6] md:px-32 p-16">
        <div className="text-3xl font-semibold text-center">{t("prevention_title")}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-4 md:space-x-4">
        <Card
            icon = <ShieldCheck className="text-[#21c55d]"/>
            title = {t("bed_nets_title")}
            content = {t("bed_nets_content")}
        />
        <Card
            icon = <Droplet className="text-[#2463eb]"/>
            title = {t("insect_repellent_title")}
            content = {t("insect_repellent_content")}
        />
        <Card
            icon = <Pill className="text-[#B77AF4]"/>
            title = {t("preventive_medicine_title")}
            content = {t("preventive_medicine_content")}
        />
        </div>
        </div>
    )
}

export default Prevention;