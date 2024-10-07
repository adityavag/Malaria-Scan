import React, { useState } from "react";
import Upload from "../assets/lottie/Upload.json";
import Scan from "../assets/lottie/Scan.json";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { SquareScissors, UploadIcon } from "lucide-react";
import Navbar from "../components/Navbar";

const Detection = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  const { t } = useTranslation();

  const onPost = (e) => {
    console.log("onPost Function Called");
    // 
  }

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  return (
    <div className="">
    <Navbar/>
    <div className="mt-28 text-3xl font-bold text-center">Upload Blood Smear Slide Image</div>
          <div className="grid grid-cols-1 mx-auto w-1/2 item-center justify-center min-h-screen mt-10 max-lg:w-full max-lg:px-2">
      <div className="p-4 mx-6 flex justify-center items-center border-2 border-black rounded-md h-[500px]">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            className="max-h-full object-contain"
          />
        ) : (
          <Lottie animationData={Scan} loop={true} />
        )}
      </div>
      <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border-2 border-black rounded-md my-auto mx-auto p-2"
        />
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 flex flex-row my-auto items-center justify-center space-x-2"
          onClick={onPost}
          >
        <UploadIcon/>
        <span className="">Upload and Analyse</span>
        </button>
    </div>
    </div>
  );
};

export default Detection;

function FeatureCard({ title, description, icon }) {
  return (
    <div className="transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
{/* <FeatureCard title={"Malaria Presence Detected"} description={"h"} icon={<SquareScissors/>}/> */}
