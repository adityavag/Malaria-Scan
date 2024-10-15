import React, { useState } from "react";
import Upload from "../assets/lottie/Upload.json";
import Scan from "../assets/lottie/Scan.json";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { Flag, SquareScissors, UploadIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import LoadingArt from "../assets/lottie/Loading.json";

const Detection = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const onPost = async (e) => {
    setLoading(true)
    const form_data = new FormData();
    form_data.append("file", image);
    axios.post('http://127.0.0.1:5000/predict', form_data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
        },
    }).then((result) => {
      const a = result.data[0].prediction[0][0];
      const b = result.data[0].prediction[0][1];
      let answer;
      a > b ? answer = "Infected" : "Uninfected";
      setTimeout(() => {
        setLoading(false); 
        alert(answer);
      },2000);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };
  if(loading == false)
  {
    return (
      <div className="">
        <Navbar />
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
            <UploadIcon />
            <span className="">Upload and Analyse</span>
          </button>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="flex justify-center h-screen items-center">
        <Lottie animationData={LoadingArt} loop={true} className="h-[100px] w-[100px]"/>
      </div>
    )
  }
};

export default Detection;
