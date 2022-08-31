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
      <div className="px-4 max-w-[520px] mx-auto">
        <p className="font-bold text-4xl md:text-4xl text-white mb-4 md:mb-4">
          Add Token Name
        </p>
        <p className="text-sm md:text-base mb-7">
          Launch you own cryptocurrency.
          <span className="mt-2.5">
            Enter a custom Artiste Token Name that will be used for all LOOZR
            operations, including sending and receiving assets.
          </span>
        </p>
        <input
          type="text"
          className="px-7 py-3 text-muted placeholder:text-muted mb-2"
          style={{ backgroundColor: "#12161F" }}
          placeholder="$YOUR_TOKEN_NAME"
        />
        <p className="italic text-sm md:text-base text-muted mb-8 md:mb-12">
          Username: lzr.your_token_name.near
        </p>
        <button
          className="py-4 text-white disabled:text-muted font-medium md:text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={launchToken}
        >
          Reserve My Token Name
        </button>
      </div>
    </div>
  );
};

export default LaunchToken;
