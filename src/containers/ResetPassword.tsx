import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen w-full h-full grid">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto h-full w-full max-w-[558px] mx-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-5xl lg:text-label mb-10 font-bold">
            Reset password
          </p>
          <p className="text-xl font-normal mb-20">
            Enter a new login password below.
          </p>
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="New password"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium text-xl bg-dark-800 mb-11"
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
          <div className="w-full relative mb-24">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Re-type Password"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium text-xl bg-dark-800 "
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
          <button className="py-6 text-white disabled:text-muted font-medium text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
