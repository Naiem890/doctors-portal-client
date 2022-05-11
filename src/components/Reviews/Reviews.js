import React from "react";
import quoteIcon from "./../../assets/icons/quote.svg";

const Reviews = () => {
  return (
    <div className="mt-20">
      <div
        className="max-w-[1333px] mx-auto"
        style={{
          background: `url(${quoteIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "192px",
        }}
      >
        <h3 className="uppercase text-xl  font-bold text-secondary">
          Testimonial
        </h3>
        <h2 className="text-4xl text-accent leading-9 mt-2 capitalize">
          What Our Patients Says
        </h2>
        <div className="mt-36 grid grid-cols-3 gap-14">
          <div className="p-8 shadow-md rounded-2xl">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex gap-5 mt-9 items-center">
              <div className="avatar ">
                <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.lorem.space/image/face?hash=3174"
                    alt="person"
                  />
                </div>
              </div>
              <div>
                <h5 className="text-xl text-accent font-semibold">
                  Winson Herry
                </h5>
                <p className="">California</p>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-md rounded-2xl">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex gap-5 mt-9 items-center">
              <div className="avatar ">
                <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.lorem.space/image/face?hash=3174"
                    alt="person"
                  />
                </div>
              </div>
              <div>
                <h5 className="text-xl text-accent font-semibold">
                  Winson Herry
                </h5>
                <p className="">California</p>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-md rounded-2xl">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex gap-5 mt-9 items-center">
              <div className="avatar ">
                <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.lorem.space/image/face?hash=3174"
                    alt="person"
                  />
                </div>
              </div>
              <div>
                <h5 className="text-xl text-accent font-semibold">
                  Winson Herry
                </h5>
                <p className="">California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
