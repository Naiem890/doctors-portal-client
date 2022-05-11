import React from "react";
import { ReactComponent as ClockIcon } from "./../../assets/icons/clock.svg";
import { ReactComponent as LocationIcon } from "./../../assets/icons/marker.svg";
import { ReactComponent as PhoneIcon } from "./../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="max-w-8xl px-6 mx-auto ">
      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-center gap-6 pr-6 pl-8 rounded-xl  py-[52px] text-white bg-gradient-to-r from-secondary to-primary">
          <div>
            <ClockIcon></ClockIcon>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div className="flex items-center gap-6 pr-6 pl-8 rounded-xl  py-[52px] bg-accent text-white">
          <div>
            <LocationIcon></LocationIcon>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Visit our location</h4>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="flex items-center gap-6 pr-6 pl-8 rounded-xl  py-[52px] bg-gradient-to-r from-secondary to-primary text-white">
          <div>
            {/* <img src={phoneIcon} alt="phone" className="" /> */}
            <PhoneIcon></PhoneIcon>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact us now</h4>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
