import React from "react";
import heroBgImage from "./../../assets/images/bg.png";
import heroImage from "./../../assets/images/chair.png";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
          <img src={heroImage} className="max-w-2xl rounded-lg " alt="chair" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6  text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button
              className="btn border-0 text-white"
              style={{
                background:
                  "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
