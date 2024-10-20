import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import Features from "./Features";
import Prevention from "./Prevention";
import Lottie from "lottie-react";
import UI from "../assets/lottie/UI.json";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        const diff = 100 / 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <Lottie animationData={UI} loop={true} className="h-[300px] w-[300px]" />
          <Box sx={{ width: '20%', marginTop: '20px' }}>
            <LinearProgress variant="determinate" value={progress} sx={{ borderRadius: '10px', height: '10px' }} />
          </Box>
          <div className="text-2xl font-medium mt-4">Loading Web UI</div>
        </div>
      ) : (
        <div className="">
          <Landing />
          <Features />
          <Prevention />
        </div>
      )}
    </>
  );
};

export default Layout;
