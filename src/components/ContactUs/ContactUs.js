import React from "react";

import contactBgImage from "./../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="mt-36 "
      style={{
        background: `url(${contactBgImage})`,
        backgroundPosition: " center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-[604px] flex justify-center items-center text-center">
        <div>
          <div>
            <h3 className="uppercase text-xl  font-bold text-secondary">
              Appointment
            </h3>
            <h2 className="text-4xl font-semibold text-white leading-9 mt-2 capitalize">
              Stay connected with us
            </h2>
          </div>
          <form action="" className="max-w-md mx-auto mt-10 ">
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full mb-5"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full mb-5 "
            />
            <textarea
              type="text"
              placeholder="Your message"
              className="textarea  w-full  mb-5"
            />
            <button
              type="submit"
              className="btn w-32 bg-gradient-to-r from-secondary to-primary border-0 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
