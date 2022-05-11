import React from "react";
import fluorideIcon from "./../../assets/images/fluoride.png";
import cavityIcon from "./../../assets/images/cavity.png";
import whiteningIcon from "./../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className="mt-28 max-w-8xl px-6 mx-auto ">
      <div className="text-center">
        <h3 className="uppercase text-xl  font-bold text-secondary">
          our services
        </h3>
        <h2 className="text-4xl text-accent leading-9 mt-2 capitalize">
          services we provide
        </h2>
      </div>

      {/* Services */}

      <div className="grid grid-cols-3 gap-8 mt-20">
        {/* Service Component */}
        <div className="shadow-md rounded-2xl px-14 pt-11 pb-8">
          <div className="text-center">
            <div>
              <img src={fluorideIcon} alt="" className="mx-auto" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mt-8 text-accent">
                Fluoride Treatment
              </h4>
              <p className="mt-3">
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-2xl px-14 pt-11 pb-8">
          <div className="text-center">
            <div>
              <img src={cavityIcon} alt="" className="mx-auto" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mt-8 text-accent">
                Cavity Filling
              </h4>
              <p className="mt-3">
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-2xl px-14 pt-11 pb-8">
          <div className="text-center">
            <div>
              <img src={whiteningIcon} alt="" className="mx-auto" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mt-8 text-accent">
                Teeth Whitening
              </h4>
              <p className="mt-3">
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
