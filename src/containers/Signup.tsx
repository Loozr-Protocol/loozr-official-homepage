import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthImage from "../assets/img/auth-img.png";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const push = useNavigate();

  const handleSignup = () => {
    push("/verify-email");
  };

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 lg:grid-cols-3">
      <img
        src={AuthImage}
        alt=""
        className="w-full lg:w-4/5 hidden md:block h-screen"
      />
      <div className="flex flex-col items-center justify-center px-6 md:px-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-sm font-normal text-muted mb-3">START FOR FREE</p>
          <p className="text-4xl mb-2 md:!mb-9 font-bold text-white">
            Create account
          </p>
          <p className="text-[15px] font-normal mb-[40px]">
            Already have an account?{" "}
            <Link to="/login" className="text-loozr-purple">
              Login
            </Link>
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base bg-dark-800 mb-7"
            style={{ backgroundColor: "#12161F", height: 74 }}
          />
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base bg-dark-800 mb-7"
              style={{ backgroundColor: "#12161F", height: 74 }}
            />
            <span
              className="absolute right-10 inset-y-6 cursor-pointer"
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
              className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base bg-dark-800 "
              style={{ backgroundColor: "#12161F", height: 74 }}
            />
            <span
              className="absolute right-10 inset-y-6 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <VisibilityIcon style={{ color: "#536079" }} />
              ) : (
                <VisibilityOffIcon style={{ color: "#536079" }} />
              )}
            </span>
          </div>
          <p className="text-muted text-[15px] md:text-base my-11">
            By clicking “Create account” you agree to our{" "}
            <span className="text-loozr-purple">Terms of Service</span> and our{" "}
            <span className="text-loozr-purple">Policy.</span>
          </p>
          <button
            onClick={handleSignup}
            className="py-3 md:py-6 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none h-[74px]"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
