import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthImage from "../assets/img/auth-img.png";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 lg:grid-cols-3">
      <img
        src={AuthImage}
        alt=""
        className="w-full lg:w-4/5 hidden md:block h-screen"
      />
      <div className="flex flex-col items-center justify-center px-8 md:px-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-lg md:text-[22px] font-normal text-muted mb-2">
            START FOR FREE
          </p>
          <p className="text-4xl md:text-5xl 2xl:text-label mb-6 md:mb-10 font-bold">
            Create account
          </p>
          <p className="md:text-xl font-normal mb-10 md:mb-20">
            Already have an account?{" "}
            <Link to="/login" className="text-loozr-purple">
              Login
            </Link>
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="py-8 px-11 text-muted placeholder:text-muted font-medium md:text-xl bg-dark-800 mb-11"
            style={{ backgroundColor: "#12161F" }}
          />
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium md:text-xl bg-dark-800 mb-11"
              style={{ backgroundColor: "#12161F" }}
            />
            <span
              className="absolute right-4 inset-y-4 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <VisibilityIcon style={{ color: "#536079" }} />
              ) : (
                <VisibilityOffIcon style={{ color: "#536079" }} />
              )}
            </span>
          </div>
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Re-type Password"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium md:text-xl bg-dark-800 "
              style={{ backgroundColor: "#12161F" }}
            />
            <span
              className="absolute right-4 inset-y-4 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <VisibilityIcon style={{ color: "#536079" }} />
              ) : (
                <VisibilityOffIcon style={{ color: "#536079" }} />
              )}
            </span>
          </div>
          <p className="w-4/5 text-muted text-base my-8">
            By clicking “Create account” you agree to our{" "}
            <span className="text-loozr-purple">Terms of Service</span> and our{" "}
            <span className="text-loozr-purple">Policy.</span>
          </p>
          <button className="py-6 text-white disabled:text-muted font-medium md:text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
