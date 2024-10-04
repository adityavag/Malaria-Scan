import React, { useState } from "react";
import Upload from "../assets/lottie/Upload.json";
import Scan from "../assets/lottie/Scan.json";
import Lottie from "lottie-react";
import { UploadIcon } from "lucide-react";

const Detection = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  
  const onPost = (e) => {
    // 
  }

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  return (
    <div className="mt-10">
    <div className="text-3xl font-bold text-center">Upload Blood Smear Slide Image</div>
          <div className="grid grid-cols-1 mx-auto w-1/2 item-center justify-center min-h-screen mt-10 max-lg:w-full max-lg:px-2">
      <div className="p-4 flex justify-center items-center border-2 border-black rounded-md h-[500px]">
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
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 flex flex-row my-auto items-center justify-center space-x-2">
        <UploadIcon/>
        <span className="">Upload and Analyse</span>
        </button>
    </div>
    </div>
  );
};

export default Detection;
