import React from "react";
import Lottie from "react-lottie";
import * as loadingAnimation from "./../../assets/animation/Animation - loding.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 flex items-center"
      style={{ zIndex: "9999" }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
