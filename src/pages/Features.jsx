import React from "react";
import Card from "../components/Card";
import { CheckCircle, Clock, User } from "lucide-react";
import { useTranslation } from "react-i18next";
const Features = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white md:px-32 p-16">
        <div className="text-3xl font-semibold text-center">{t("features_title")}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-4 md:space-x-4">
        <Card
            icon = <Clock className="text-[#2463eb]"/>
            title = {t("fast_results_title")}
            content = {t("fast_results_content")}
        />
        <Card
            icon = <CheckCircle className="text-[#2463eb]"/>
            title = {t("high_accuracy_title")}
            content = {t("high_accuracy_content")}
        />
        <Card
            icon = <User className="text-[#2463eb]"/>
            title = {t("user_friendly_title")}
            content = {t("user_friendly_content")}
        />
        </div>
        </div>
    )
}
export default Features;