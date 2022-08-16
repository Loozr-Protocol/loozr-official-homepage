import React from "react";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const push = useNavigate();

  const createUsername = () => {
    alert("Successfully created your username :)");
    push("/explore");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="px-4 max-w-[450px] mx-auto">
        <p className="font-bold text-4xl text-white mb-9">Add your username</p>
        <p className="text-sm md:text-[15.5px] mb-11">
          Enter a custom username that you'll use for all transactions,
          including earning, streaming, sending, and receiving tokens.
        </p>
        <input
          type="text"
          className="!px-[39px] py-3 text-base text-muted placeholder:text-muted mb-4 h-[74px]"
          style={{ backgroundColor: "#12161F" }}
          placeholder="lzr.your_username.near"
        />
        <p className="italic text-sm md:text-[15.5px] text-muted mb-8 md:mb-12">
          Username: lzr.your_token_name.near
        </p>
        <button
          className="py-4 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none h-[74px]"
          onClick={createUsername}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
