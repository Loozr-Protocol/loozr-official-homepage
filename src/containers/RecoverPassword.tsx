import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../assets/img/auth-img.png";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 lg:grid-cols-3">
      <img
        src={AuthImage}
        alt=""
        className="w-full lg:w-4/5 hidden md:block h-screen"
      />
      <div className="flex flex-col items-center justify-center px-8 md:px-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-sm font-normal text-muted mb-2">Oops!</p>
          <p className="text-4xl font-bold mb-6 md:!mb-9">Recover password</p>
          <p className="text-[15px] font-normal mb-10">
            Please provide your email address in order to receive a reset code.
          </p>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base h-[74px] bg-dark-800 mb-11"
            style={{ backgroundColor: "#12161F" }}
          />
          <Link to="/reset-password" className="w-full">
            <button className="py-6 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-6 md:mb-11 w-full focus:outline-none h-[74px]">
              Reset password
            </button>
          </Link>
          <p className="text-[15px] font-normal">
            Remember your password?{" "}
            <Link to="/login" className="text-loozr-purple">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
