import React from "react";
import { useNavigate } from "react-router-dom";

const LaunchToken = () => {
  const push = useNavigate();

  const launchToken = () => {
    sessionStorage.setItem("hasLaunchedToken", "true");
    alert("Token launched successfully :)");
    push("/artistes/1");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-[550px] mx-auto">
        <p className="font-bold text-5xl text-white mb-7">Add Token Name</p>
        <p className="text-xl mb-7">
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
        <p className="italic text-lg text-muted mb-16">
          Username: lzr.your_token_name.near
        </p>
        <button
          className="py-6 text-white disabled:text-muted font-medium text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={launchToken}
        >
          Reserve My Token Name
        </button>
      </div>
    </div>
  );
};

export default LaunchToken;
