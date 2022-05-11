import React from "react";
import appointmentBannerImage from "./../../assets/images/appointment.png";
import doctorImage from "./../../assets/images/doctor-small.png";
const AppointmentBanner = () => {
  return (
    <div
      className="mt-64"
      style={{
        background: `url(${appointmentBannerImage})`,
        backgroundPosition: " center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-[533px] max-w-[1168px] mx-auto grid grid-cols-2 gap-7 items-center">
        <div className="relative h-full">
          <img
            src={doctorImage}
            alt=""
            className="absolute max-w-[606px] bottom-0 right-0"
          />
        </div>
        <div>
          <h3 className="uppercase text-xl  font-bold text-secondary">
            Appointment
          </h3>
          <h2 className="text-4xl font-semibold text-white leading-9 mt-5 capitalize">
            Make an appointment Today
          </h2>
          <p className="mt-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn mt-8 bg-gradient-to-r from-secondary to-primary border-0 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
