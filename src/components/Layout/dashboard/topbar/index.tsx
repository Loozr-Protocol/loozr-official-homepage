import React from "react";
import SearchIcon from "../../../../assets/icons/search.svg";
import LoozrGradient from "../../../../assets/icons/loozr-gradient.svg";
import SearchWhiteIcon from "../../../../assets/icons/search-white.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import UserIcon from "../../../../assets/icons/user.svg";

export const TopBar = () => {

  return (
    <div className="w-full mb-6 px-3">
      <div className="flex justify-between items-center">
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search artiste, fans… "
            className="placeholder:text-[#536079] rounded-full py-[6px] text-xs"
            style={{
              paddingLeft: "3.5rem",
              paddingRight: 16,
              width: 400,
              background: "#12161F",
              color: "#536079",
            }}
          />
          <img
            src={SearchIcon}
            alt=""
            className="absolute w-4 h-4 object-contain inset-y-[16px] left-7"
          />
        </div>
        <div className="md:hidden flex items-center">
          <p className="text-xl text-white pr-0.5 font-bold">~$46.23/</p>
          <img src={LoozrGradient} alt="" />
        </div>
        <div className="md:hidden flex items-center">
          <img src={PlusIcon} alt="" width={17} height={17} />
          <img
            src={SearchWhiteIcon}
            alt=""
            className="ml-8"
            width={17}
            height={17}
          />
          <img src={UserIcon} alt="" className="ml-8" width={17} height={17} />
        </div>
      </div>
    </div>
  );
};
