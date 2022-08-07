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
    <div className="w-full mt-[70px]">
      <p className="font-semibold text-2xl text-white mb-16">Update Profile</p>
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
          <p className="text-2xl text-white font-semibold mb-3">
            lzr.yourname.near
          </p>
          <p className="text-loozr-green text-xl font-medium">
            change profile picture
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start mb-10">
        <div className="grid gap-8">
          <input
            type="text"
            className="px-7 py-4 text-muted placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Enter full name"
          />
          <input
            type="text"
            className="px-7 py-4 text-muted placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Genre"
          />
          <input
            type="text"
            className="px-7 py-4 text-muted placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Website link"
          />
          <input
            type="text"
            className="px-7 py-4 text-muted placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Twitter link"
          />
          <input
            type="text"
            className="px-7 py-4 text-muted placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Country"
          />
        </div>
        <div
          className="grid gap-8"
          style={{
            gridTemplateRows: "auto minmax(0,1fr)",
          }}
        >
          <input
            type="text"
            className="px-7 py-4 text-white placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="uneditable_input@email.com*"
            value={"uneditable_input@email.com"}
            disabled
          />
          <textarea
            className="px-7 py-4 text-muted placeholder:text-muted resize-none"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Bio"
          />
          <input
            type="text"
            className="px-7 py-4 text-muted placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Souncloud link"
          />
        </div>
      </div>
      {hasLaunchedToken && (
        <>
          <div className="h-px bg-muted-50 mb-11" />
          <p className="text-white text-2xl font-semibold mb-10">
            Artiste Details
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start mb-10">
            <input
              type="text"
              className="px-7 py-4 font-bold text-lg text-white placeholder:text-muted"
              style={{ backgroundColor: "#12161F" }}
              placeholder="$DAVIDO *"
              value="$DAVIDO *"
            />
            <div className="flex items-center">
              <input
                type="text"
                className="max-w-[50%] mr-12 px-7 py-4 font-medium text-lg text-white placeholder:text-muted"
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
      <button
        className="py-6 text-white disabled:text-muted font-medium text-xl bg-gradient-ld disabled:bg-dark-800 mt-11 w-[48%] focus:outline-none"
        // onClick={launchToken}
      >
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
