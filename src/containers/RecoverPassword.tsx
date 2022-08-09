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
          <p className="text-[22px] font-normal text-muted mb-2">Oops!</p>
          <p className="text-4xl md:text-5xl 2xl:text-label font-bold mb-6 md:mb-10">
            Recover password
          </p>
          <p className="md:text-xl font-normal mb-10 md:mb-20">
            Please provide your email address in order to receive a reset code.
          </p>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-8 px-11 text-muted placeholder:text-muted font-medium text-xl bg-dark-800 mb-11"
            style={{ backgroundColor: "#12161F" }}
          />
          <Link to="/reset-password" className="w-full">
            <button
              className="py-6 text-white disabled:text-muted font-medium text-xl bg-gradient-ld disabled:bg-dark-800 mb-6 md:mb-11 w-full focus:outline-none"
              // disabled={!email}
            >
              Reset password
            </button>
          </Link>
          <p className="md:text-xl font-normal">
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
