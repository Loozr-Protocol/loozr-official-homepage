import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../state/store";
import { useBecomeArtisteCallback } from "../../../../state/artist/hooks";
import { setPageLoaderStatus } from "../../../../state/misc";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../../../../assets/icons/search.svg";
import LoozrGradient from "../../../../assets/icons/loozr-gradient.svg";
import SearchWhiteIcon from "../../../../assets/icons/search-white.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import UserIcon from "../../../../assets/icons/user.svg";
import { LZR_IN_USD, MIXER_ACCOUNT } from "../../../../config/constants";
import Photo from "../../../Photo";
import { useSearchUserCallback } from "../../../../state/user/hooks/useAccount";

export const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleBecomeArtiste } = useBecomeArtisteCallback();
  const [searchValue, setSearchValue] = React.useState("")
  const [data, setData] = React.useState([] as any)
  const user = useSelector((state: AppState) => state.user.userInfo);
  const { getSearchUser } = useSearchUserCallback();

  const OnchangeHandler = async (item: any) => {
    setSearchValue(item)
    const result = await getSearchUser(item);
    setData(result)
  }

  const becomeArtist = async () => {
    dispatch(setPageLoaderStatus(true));
    try {
      await handleBecomeArtiste({});
      window.location.reload();
    } catch (err) {
      dispatch(setPageLoaderStatus(false));
    }
  };

  const ClickHandler = (item: any) => {
    navigate(item)
    setSearchValue("")
  }

  return (
    <div className="w-full mb-6 md:px-0 px-6 md:pr-4 ">
      <div className="flex justify-between px-0 sm:px-4  items-center">
        <div className="hidden md:flex md:w-[100vw] relative">
          <input
            type="text"
            value={searchValue}
            placeholder="Search artiste, fans… "
            onChange={(e) => OnchangeHandler(e.target.value)}
            className="placeholder:text-[#536079]  w-full rounded-full h-[48px] text-xs"
            style={{
              paddingLeft: "3.5rem",
              paddingRight: 16,
              background: "#12161F",
              color: "#536079",
            }}
          />
          <img
            src={SearchIcon}
            alt=""
            className="absolute w-4 h-4 object-contain inset-y-[16px] left-7"
          />
          {searchValue && (
            <div className=" absolute bg-[#12161F] top-[50px] overflow-y-auto max-h-[250px] z-[120] py-2 mt-2 rounded-lg px-4 w-full  ">
              {data.map((item: any, index: any) => {
                const domainName = item.account_id + "." + MIXER_ACCOUNT;

                return (
                  <div
                    key={index}
                    onClick={() => ClickHandler(`/${domainName}`)}
                    className=" w-full cursor-pointer relative z-[120] flex my-3 items-center "
                  >
                    <Photo
                      alt=""
                      className="object-contain w-10 h-10 rounded-full "
                      style={{ border: "3px solid #141922" }}
                    />
                    {/* <div className=' w-10 h-10 rounded-full bg-red-600 border-[3px] border-[#222A3B] ' /> */}
                    <div className=" ml-3 ">
                      <div className=" flex -mt-1 items-center ">
                        <p className=" text-[13px] font-semibold ">
                          {" "}
                          {item?.account_id}
                        </p>
                      </div>
                      <div className=" flex -mt-1 items-center ">
                        <p className=" text-[11px] font-semibold text-[#536079] ">
                          {domainName.slice(0, 30)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {searchValue && (
                <div
                  className=" fixed inset-0 z-[90] "
                  onClick={() => setSearchValue("")}
                />
              )}
            </div>
          )}
        </div>
        {!user && (
          <div className=" flex  items-center justify-end gap-x-4">
            <button
              className="rounded-full h-[48px] w-[170px] bg-[#141922]  text-[11.5px] font-semibold outline-none focus:outline-none"
              onClick={() => navigate("/login")}
            >
              LOG IN
            </button>
            <button
              className="rounded-full h-[48px] md:px-6 w-[170px] bg-s-gradient hidden lg:block text-[11.5px] font-semibold outline-none focus:outline-none"
              onClick={() => navigate("/signup")}
            >
              CREATE ACCOUNT
            </button>
          </div>
        )}
        <div className="md:hidden flex items-center">
          <p className="text-white pr-0.5 font-bold">~${LZR_IN_USD}/</p>
          <img
            src={LoozrGradient}
            alt=""
            className="pointer-cursor"
            onClick={() => navigate("/explore")}
          />
        </div>
        <div className="md:hidden flex items-center">
          {/*
          <img
            src={SearchWhiteIcon}
            alt=""
            className="ml-8"
            width={17}
            height={17}
          /> */}
          {!user?.isArtist ? (
            <img
              src={PlusIcon}
              onClick={becomeArtist}
              alt=""
              className="pointer-cursor"
              width={17}
              height={17}
            />
          ) : null}
          {user ? (
            <img
              src={UserIcon}
              alt=""
              className="ml-8 pointer-cursor"
              onClick={() => navigate("/" + user.accountDomain)}
              width={17}
              height={17}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
