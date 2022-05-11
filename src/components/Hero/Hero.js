import React from "react";
import heroBgImage from "./../../assets/images/bg.png";
import heroImage from "./../../assets/images/chair.png";

const Hero = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundPosition: "left",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content  flex-col gap-6 lg:flex-row-reverse">
          <div>
            <img
              src={heroImage}
              className="max-w-2xl rounded-lg "
              alt="chair"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6  text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn border-0 text-white bg-gradient-to-r from-secondary to-primary cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
