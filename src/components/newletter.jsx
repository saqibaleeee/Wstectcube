import React from "react";

const Newletter = () => {
  return (
    <div className="w-full bg-[#2699fb] p-4">
      <div className="max-w-[1240px] md:flex justify-between mx-auto py-[50px]">
        <div className=" m-2">
          <h1 className="font-bold   text-[20px] md:text-[40px] capitalize text-black">
            wants to learn latest I.T skills ?
          </h1>
          <span className="text-white">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className=" ">
          <div className="flex gap-0">
            <input
              type="text"
              className=" sm:w-full p-3 mr-2 mb-2 text-slate-600 rounded  "
              placeholder="email"
            />
            <button className="bg-black text-white  px-5 md:px-16 rounded ">
              Get started
            </button>{" "}
          </div>

          <br />
          <p className="text-white">
            we care about the protection of your data . read our <br /> privacy
            policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
