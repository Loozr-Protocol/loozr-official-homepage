import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthImage from "../assets/img/auth-img.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const push = useNavigate();
  const handleLogin = () => {
    console.log("Login");
    sessionStorage.setItem("isLoggedIn", "true");
    setTimeout(() => {
      push("/explore");
    }, 2000);
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
          <p className="text-sm font-normal text-muted mb-2.5">WELCOME BACK</p>
          <p className="text-4xl font-bold mb-11 text-white">Login account</p>
          <p className="text-lg font-normal mb-11">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-loozr-purple">
              Create account
            </Link>
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="py-8 !px-[39px] text-muted placeholder:text-muted text-base font-medium bg-dark-800 mb-7"
            style={{
              backgroundColor: "#12161F",
              height: 74,
              padding: "auto 40px",
            }}
          />
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="py-8 !px-[39px] text-muted placeholder:text-muted text-base font-medium bg-dark-800 w-full"
              style={{
                backgroundColor: "#12161F",
                marginBottom: 43,
                height: 74,
                padding: "auto 40px",
              }}
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
          <button
            className="py-3 md:py-6 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-4 md:!mb-12 w-full focus:outline-none h-[74px]"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-base font-normal">
            Forgot your password?{" "}
            <Link to="/recover-password" className="text-loozr-purple">
              Reset here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
