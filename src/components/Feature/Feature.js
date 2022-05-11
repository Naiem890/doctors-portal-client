import React from "react";
import treatmentImg from "./../../assets/images/treatment.png";

const Feature = () => {
  return (
    <div className="mt-40 max-w-6xl px-6 mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img src={treatmentImg} alt="" className="max-w-md rounded-lg" />
        </div>
        <div>
          <h2 className="text-5xl leading-tight font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="mt-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn mt-8 bg-gradient-to-r from-secondary to-primary border-0 text-white block">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
