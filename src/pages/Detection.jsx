import React, { useState } from "react";
import Scan from "../assets/lottie/Scan.json";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { UploadIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import LoadingArt from "../assets/lottie/Loading.json";
import { Box, Modal, Typography } from "@mui/material";
import SheildArt from "../assets/lottie/Sheild.json";
import InfectedArt from "../assets/lottie/Infected.json";
import BadRequest from "../assets/images/BadRequest.jpg";
const Detection = () => {
  const [image, setImage] = useState(null);
  const [infected, setInfected] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState(""); 
  const { t } = useTranslation();

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const onPost = async () => {
    setLoading(true);
    setError(""); 
    const form_data = new FormData();
    form_data.append("file", image);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", form_data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });

      
      if (response.status !== 200) {
        throw new Error("Error");
      }

      const prediction = response.data.prediction;
      const isInfected = prediction === "Parasitized";
      setInfected(isInfected);
      const displayResult = isInfected ? t("infected") : t("uninfected");

      setTimeout(() => {
        setLoading(false);
        setOpen(true);
        setResult(displayResult);
        setImage(null);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        setError("Error");
        console.error(err);
      }, 2000);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={BadRequest} height={100} width={700} className="animate-up-down"/>
      </div>
    );
  }

  if (!loading) {
    return (
      <div className="">
        <Navbar />
        <div className="mt-28 text-3xl font-bold text-center">{t("detect_title")}</div>
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
            <span className="">{t("upload_and_analyse")}</span>
          </button>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
              width: '300px',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
              {t("prediction_result")}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} align="center">
              {infected ? (
                <Lottie animationData={InfectedArt} loop={true} />
              ) : (
                <Lottie animationData={SheildArt} loop={true} />
              )}
              <div>{result}</div>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center h-screen items-center">
        <Lottie animationData={LoadingArt} loop={true} className="h-[100px] w-[100px]" />
      </div>
    );
  }
};

export default Detection;
