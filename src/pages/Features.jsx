import React from "react";
import Card from "../components/Card";
import { CheckCircle, Clock, User } from "lucide-react";

const Features = () => {
    return (
        <div className="bg-white md:px-32 p-16">
        <div className="text-3xl font-semibold text-center">Our Features</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-4 md:space-x-4">
        <Card
            icon = <Clock className="text-[#2463eb]"/>
            title = "Fast Results"
            content = "Get malaria detection results within seconds of uploading your image."
        />
        <Card
            icon = <CheckCircle className="text-[#2463eb]"/>
            title = "High Accuracy"
            content = "Our AI model is trained on thousands of blood smear images for reliable results."
        />
        <Card
            icon = <User className="text-[#2463eb]"/>
            title = "User Friendly"
            content = "Simple interface for quick and hassle-free malaria detection."
        />
        </div>
        </div>
    )
}
export default Features;