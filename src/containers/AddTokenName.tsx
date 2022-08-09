import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTokenName = () => {
  return (
    <div className="min-h-screen w-full h-full grid pt-16 ">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto h-full w-full max-w-[558px] mx-auto text-white">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-4xl md:text-5xl lg:text-label mb-10 font-bold">
            Add Token Name
          </p>
          <p className="text-base md:text-xl font-normal mb-7">
            Launch you own cryptocurrency.{" "}
          </p>
          <p className="text-base md:text-xl font-normal mb-16">
            Enter a custom Token Name that will be used for all LOOZR
            operations, including sending and receiving assets.
          </p>
          <div className="w-full relative mb-24">
            <input
              type="text"
              placeholder="$YOUR_TOKEN_NAME"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium md:text-xl bg-dark-800 mb-7"
              style={{ backgroundColor: "#12161F" }}
            />
            <p className="text-muted italic text-lg font-normal">
              Token ID: lzr.your_token_name.near
            </p>
          </div>
          <button className="py-6 text-white disabled:text-muted font-medium md:text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none">
            Reserve My Token Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTokenName;
