import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../../assets/icons/search.svg";

export const TopBar = () => {
  const push = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search artiste, fans… "
            className="rounded-full py-[16px] bg-dark-700 border"
            style={{
              paddingLeft: "4rem",
              paddingRight: 16,
              width: 400,
            }}
          />
          <img
            src={SearchIcon}
            alt=""
            className="absolute w-[20px] h-[20px] object-contain inset-y-5 left-7"
          />
        </div>
        {!isLoggedIn && (
          <div className="flex items-center justify-end gap-x-4">
            <button
              className="rounded-full py-[16px] px-[40px] border border-grey-white min-w-[200px] text-lg font-semibold outline-none focus:outline-none"
              onClick={() => push("/login")}
            >
              LOG IN
            </button>
            <button
              className="rounded-full py-[16px] px-[40px] bg-s-gradient min-w-[200px] text-lg font-semibold outline-none focus:outline-none"
              onClick={() => push("/signup")}
            >
              CREATE ACCOUNT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
