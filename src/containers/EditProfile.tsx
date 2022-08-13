import React, { useEffect, useState } from "react";
import Memoji from "../assets/img/memoji.png";
import { ReactComponent as HelpIcon } from "../assets/icons/help.svg";
import ToolTip from "../components/Tooltip";
const EditProfile = () => {
  const [hasLaunchedToken, setHasLaunchedToken] = useState(
    sessionStorage.getItem("hasLaunchedToken") === "true"
  );

  useEffect(() => {
    setHasLaunchedToken(sessionStorage.getItem("hasLaunchedToken") === "true");
  }, []);

  return (
    <div className="w-full mt-[70px] md:mt-0">
      <p className="font-medium text-base md:text-lg text-white mb-12">
        Update Profile
      </p>
      <div className="flex items-center justify-between w-1/2 mb-12">
        <div className="relative">
          <img
            src={Memoji}
            alt=""
            width={113}
            height={113}
            className="rounded-full w-[113px] h-[113px] object-contain"
            style={{ border: "8px solid #141922" }}
          />
        </div>
        <div>
          <p className="text-xl text-white font-semibold mb-2">
            lzr.yourname.near
          </p>
          <p className="text-loozr-green text-base font-medium">
            change profile picture
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-start mb-10">
        <div className="grid gap-6">
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Enter full name"
          />
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Genre"
          />
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Website link"
          />
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Twitter link"
          />
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Country"
          />
        </div>
        <div
          className="grid gap-6"
          style={{
            gridTemplateRows: "auto minmax(0,1fr)",
          }}
        >
          <input
            type="text"
            className="px-7 py-3 text-white text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="uneditable_input@email.com*"
            value={"uneditable_input@email.com"}
            disabled
          />
          <textarea
            className="px-[18px] py-3 text-muted text-sm placeholder:text-muted resize-none"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Bio"
          />
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Souncloud link"
          />
        </div>
      </div>
      {hasLaunchedToken && (
        <>
          <div className="h-px bg-muted-50 mb-11" />
          <p className="font-medium text-base md:text-lg text-white mb-8">
            Artiste Details
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start mb-10">
            <input
              type="text"
              className="px-7 py-3 font-medium text-base md:text-sm text-white placeholder:text-muted"
              style={{ backgroundColor: "#12161F" }}
              placeholder="$DAVIDO *"
              value="$DAVIDO *"
            />
            <div className="flex items-center">
              <input
                type="text"
                className="max-w-[50%] mr-12 px-7 py-3 font-medium text-sm text-white placeholder:text-muted"
                style={{ backgroundColor: "#12161F" }}
                placeholder="10%"
                value={"10%"}
              />
              <ToolTip
                title={
                  <p className="text-base font-medium">
                    <span className="mb-3">
                      When someone purchases your coin, a percentage of that
                      gets allocated to you as a founder reward.
                    </span>
                    <span className="mb-3">
                      A value of 0% means you get no money when someone buys,
                      whereas a value of 100% means that no one else can ever
                      get coins because 100% of every purchase goes to you.
                    </span>
                    <span>
                      Setting this value too high will discourage buyers from
                      ever purchasing your coin. It's a delicate balance, so
                      tread carefully or stick with the default.
                    </span>
                  </p>
                }
              >
                <HelpIcon className="cursor-pointer" />
              </ToolTip>
            </div>
          </div>
        </>
      )}
      <button className="py-[17px] text-white disabled:text-muted font-medium md:text-sm bg-gradient-ld disabled:bg-dark-800 mb-11 w-[48%] focus:outline-none">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
