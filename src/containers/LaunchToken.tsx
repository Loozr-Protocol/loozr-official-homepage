import React from "react";
import { useNavigate } from "react-router-dom";

const LaunchToken = () => {
  const push = useNavigate();

  const launchToken = () => {
    sessionStorage.setItem("hasLaunchedToken", "true");
    alert("Token launched successfully :)");
    push("/explore");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="px-4 max-w-[550px] mx-auto">
        <p className="font-bold text-4xl md:text-5xl text-white mb-4 md:mb-7">
          Add Token Name
        </p>
        <p className="text-base md:text-xl mb-7">
          Launch you own cryptocurrency.
          <span className="mt-4">
            Enter a custom Artiste Token Name that will be used for all LOOZR
            operations, including sending and receiving assets.
          </span>
        </p>
        <input
          type="text"
          className="px-7 py-4 text-muted placeholder:text-muted mb-3"
          style={{ backgroundColor: "#12161F" }}
          placeholder="$YOUR_TOKEN_NAME"
        />
        <p className="italic text-sm md:text-lg text-muted mb-8 md:mb-16">
          Username: lzr.your_token_name.near
        </p>
        <button
          className="py-6 text-white disabled:text-muted font-medium md:text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={launchToken}
        >
          Reserve My Token Name
        </button>
      </div>
    </div>
  );
};

export default LaunchToken;
