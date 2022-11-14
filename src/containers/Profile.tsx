import React, { useEffect, useMemo, useState } from "react";
import { transactions, coinsBought } from "../components/dummy/wallet";
import { capitalize } from "../functions";
import Arrow45Deg from "../assets/icons/arrow-45deg.svg";
import Arrow225Deg from "../assets/icons/arrow-225deg.svg";
import { ReactComponent as MoreIcon } from "../assets/icons/more-white.svg";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import soundcloud from "../assets/icons/soundcloud.png";
import spotify from "../assets/icons/spotify.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import share from "../assets/icons/share.png";
import chain from "../assets/icons/chain.png";
import copy from "../assets/icons/copy.png";
import { abbrevNumber } from "../utils/formatBalance";
import { getIndividualProfile } from "../state/user/userActions";
import User from "../config/constants/models/user";
import CreatorStatCard from "../components/CreatorStatCard";
import CoinHodlers from "../components/history/CoinHodlers";
import { resetCoinPrice, resetHoldersList } from "../state/artist/artistReducer";
import { decodedJWT } from "../utils";
import Photo from "../components/Photo";
import verified from "../assets/icons/verified.png"
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";

const Profile = () => {
  const push = useNavigate();
  let { accountDomain } = useParams();
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user.userInfo);
  const errorLoadingProfile = useSelector(
    (state: AppState) => state.user.errorLoadingProfile
  );
  const currentProfileFromState = useSelector(
    (state: AppState) => state.user.currentProfile
  );
  const [currentProfile, setCurrentProfile] = useState<User>();
  const coinInfo = useSelector((state: AppState) => state.artist.coinInfo);


  const [copySuccess, setCopySuccess] = React.useState('');
  const textAreaRef: any = React.useRef(null);

  function copyToClipboard(item: any) { 
      navigator.clipboard.writeText(item)
      setCopySuccess('Copied!');
      const t1 = setTimeout(() => {
          setCopySuccess('');
          clearTimeout(t1); 
      }, 2000); 
  }; 

  const loadProfile = () => {
    if (accountDomain) {
      if (accountDomain !== user.accountDomain) {
        dispatch(getIndividualProfile(accountDomain));
        return;
      }
      dispatch(getIndividualProfile(accountDomain));
    }
    dispatch(getIndividualProfile(decodedJWT()["id"]));
    setCurrentProfile(user);
  };

  useEffect(() => {
    dispatch(resetCoinPrice());
    dispatch(resetHoldersList());
  }, []);

  useEffect(() => {
    dispatch(resetCoinPrice());
    dispatch(resetHoldersList());
    loadProfile();
  }, [accountDomain, user]);

  useEffect(() => {
    setCurrentProfile(currentProfileFromState);
  }, [currentProfileFromState]);

  // const renderHistory = useMemo(() => {
  //   switch (active) {
  //     case 1:
  //       return coinsBought.map((item, index) => (
  //         <div
  //           className="w-full flex items-center justify-between mb-6"
  //           key={index}
  //         >
  //           <div className="flex items-center">
  //             <img
  //               src={Arlene}
  //               alt=""
  //               className="h-8 md:h-[60px] w-8 md:w-[60px] rounded-full mr-3"
  //               style={{ border: "6px solid #141922" }}
  //             />
  //             <div>
  //               <p className="text-sm md:text-xl font-extrabold">{item.name}</p>
  //               <p className="text-xs md:text-base font-semibold text-muted">
  //                 You own 0.735 LZR
  //               </p>
  //             </div>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               {capitalize(item.type)}
  //             </p>
  //             <p className="text-xs md:text-base font-semibold text-muted">
  //               Type of user
  //             </p>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               ~${item.price}
  //             </p>
  //             <p className="text-xs md:text-base font-semibold text-muted">
  //               USD value
  //             </p>
  //           </div>
  //         </div>
  //       ));
  //     case 2:
  //       return tokenHolder.map((item, index) => (
  //         <div
  //           className="w-full flex items-center justify-between text-white mb-6"
  //           key={index}
  //         >
  //           <div className="flex items-center">
  //             <img
  //               src={Arlene}
  //               alt=""
  //               className="h-8 md:h-[60px] w-8 md:w-[60px] rounded-full mr-3"
  //               style={{ border: "6px solid #141922" }}
  //             />
  //             <div>
  //               <p className="text-sm md:text-xl font-extrabold">{item.name}</p>
  //               <p className="md:text-base font-semibold text-muted">
  //                 Owns {item.owns} LZR of your artiste token
  //               </p>
  //             </div>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               {capitalize(item.type)}
  //             </p>
  //             <p className="md:text-base font-semibold text-muted">
  //               Type of user
  //             </p>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               ~${item.price}
  //             </p>
  //             <p className="md:text-base font-semibold text-muted">USD value</p>
  //           </div>
  //         </div>
  //       ));
  //     case 3:
  //       return transactions.map((item, index) => (
  //         <div
  //           className="w-full flex items-center justify-between text-white mb-6"
  //           key={index}
  //         >
  //           <div className="flex items-start">
  //             <div className="rounded-full h-[44px] w-[44px] bg-dark-700 mr-4 flex items-center justify-center">
  //               <img
  //                 src={item.type === "cr" ? Arrow225Deg : Arrow45Deg}
  //                 alt=""
  //                 className="object-cover w-3 h-4"
  //               />
  //             </div>
  //             <div>
  //               <p className="text-sm md:text-xl font-medium">
  //                 {item.type === "dr" ? "Sent" : "Received"}
  //                 <span className="font-extrabold px-1">{item.token}</span>
  //                 coin
  //               </p>
  //               <p className="md:text-base font-semibold text-muted">
  //                 {item.type === "dr" ? "to" : "from"}{" "}
  //                 {item.type === "dr" ? item.to : item.from}
  //               </p>
  //             </div>
  //           </div>
  //           <div>
  //             <p className="text-sm md:text-xl font-extrabold">
  //               ~${item.price}
  //             </p>
  //             <p className="md:text-base font-semibold text-muted">USD value</p>
  //           </div>
  //         </div>
  //       ));
  //   }
  // }, [active]);

  const renderHistory = useMemo(() => {
    switch (active) {
      case 1:
        return <CoinHodlers coin={currentProfile} user={user} />;
      case 2:
        return coinsBought.map((item, index) => (
          <div
            className="w-full flex items-center justify-between mb-6"
            key={index}
          >
            <div className="flex items-center">
              <Photo
                alt=""
                className="h-12 md:h-12 w-12 md:w-12 rounded-full mr-3"
                style={{ border: "6px solid #141922" }}
              />
              <div>
                <p className="text-xs md:text-sm font-bold text-white mb-0.5">
                  {item.name}
                </p>
                <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                  You own 0.735 LZR
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                {capitalize(item.type)}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                Type of user
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                ~${item.price}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                USD value
              </p>
            </div>
          </div>
        ));
      case 3:
        return transactions.map((item, index) => (
          <div
            className="w-full flex items-center justify-between text-white mb-6"
            key={index}
          >
            <div className="flex items-start">
              <div className="rounded-full h-[44px] w-[44px] bg-dark-700 mr-4 flex items-center justify-center">
                <img
                  src={item.type === "cr" ? Arrow225Deg : Arrow45Deg}
                  alt=""
                  className="object-cover w-3 h-4"
                />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-white mb-0.5">
                  {item.type === "dr" ? "Sent" : "Received"}
                  <span className="font-extrabold px-1">{item.token}</span>
                  coin
                </p>
                <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                  {item.type === "dr" ? "to" : "from"}{" "}
                  {item.type === "dr" ? item.to : item.from}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
                ~${item.price}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                USD value
              </p>
            </div>
          </div>
        ));
      default:
        return "";
    }
  }, [active, currentProfile]);

  if (currentProfile && !currentProfile.accountId) {
    return <div className="text-center">Profile Not Found!</div>;
  }

  console.log(currentProfile);
  

  return (
    <div className="w-full">
      {currentProfile ? (
        <>
          {currentProfile.isArtist && currentProfile.tokenName && (
            <CreatorStatCard user={currentProfile} />
          )}
          <div className="flex md:flex-row flex-col items-start mb-7">
            <div className=" relative " >
              <Photo
                alt={currentProfile.accountDomain}
                className="h-8 md:h-[130px] w-8 md:w-[130px] rounded-full md:mr-3"
                style={{ border: "10px solid #141922" }}
              />
              <img src={verified} alt="verified" className=" absolute bottom-2 right-4 w-[31.03px] " />
            </div>
            <div className="md:ml-10">
              <div className=" flex " > 
                <p className="text-xl md:text-xl font-medium text-white mb-1.5">
                  {currentProfile.accountDomain}
                </p>
                <button onClick={()=>copyToClipboard(currentProfile.accountDomain)} className=" w-[30px] ml-2 h-[30px] rounded-full bg-[#141922] flex justify-center items-center mr-2  " > 
                  <img src={copy} alt="copy" className=" w-[12.17px] " />
                </button>
                {copySuccess}
              </div>
              <p className="text-muted font-medium text-xs md:text-xs mb-[10px]">
                <span>{currentProfile.username ? currentProfile.username : currentProfile.accountId}</span>
                {currentProfile.isArtist ? (
                  <span className="pointer ml-1.5 pl-2 before:top-2">
                    Artiste
                  </span>
                ) : (
                  ""
                )}
              </p>
              <div className=" w-full py-6 flex items-center " >
                  <img src={soundcloud} alt="" className=" w-[23.93px] h-[11.43px] mx-2 " />
                  <img src={spotify} alt="" className=" w-[15.24px] mx-2  " /> 
                  <img src={instagram} alt="" className=" w-[16px] mx-2  " />
                  <img src={twitter} alt="" className=" w-[18.76px] mx-2  " />
                  <img src={share} alt="" className=" w-[12.67px] mx-2  " />
              </div>
              <p className="text-white max-w-[435px] font-medium text-xs md:text-[13px] mb-[20px]">
                {currentProfile.bio}
              </p>
              <div className="flex items-center mb-9">
                <p className="text-xs md:text-sm font-bold mr-6">
                  {abbrevNumber(currentProfile.followersCount)}
                  <span className="ml-2 text-sm text-muted font-medium">
                    Followers
                  </span>
                </p>
                <p className="text-xs md:text-sm font-bold mr-6">
                  {abbrevNumber(currentProfile.followingsCount)}
                  <span className="ml-2 text-sm text-muted font-medium">
                    Following
                  </span>
                </p>
                {currentProfile.isArtist ? (
                  <p className="text-xs md:text-sm font-bold">
                    0
                    <span className="ml-2 text-sm text-muted font-medium">
                      Listens
                    </span>
                  </p>
                ) : null}
              </div> 
              {currentProfile.id === user.id ? (
                <div className="flex items-center mt-4">
                  <button
                    onClick={() => push("/profile/edit")}
                    className="py-3 px-16 text-sm font-medium bg-loozr-purple rounded-full"
                  >
                    Update
                  </button>
                  <div className="w-[50px] h-[50px] rounded-full bg-dark-700 flex items-center justify-center ml-6">
                    <MoreIcon />
                  </div>
                </div>
              ) : null}
              {currentProfile.isArtist ? (
                <div className="flex items-start mb-9">
                  <button
                    onClick={() => toast.info("Coming soon!", TOAST_OPTIONS)}
                    className="py-[14.1px] px-3 sm:px-6 md:px-7 text-xs md:text-sm font-medium bg-loozr-purple rounded-full"
                  >
                    Buy artiste coin
                  </button>
                  <button
                    onClick={() => toast.info("Coming soon!", TOAST_OPTIONS)}
                    className="py-[14.1px] px-3 sm:px-6 md:px-7 text-xs md:text-sm font-medium bg-dark-700 rounded-full ml-6"
                  >
                    Sell artiste coin
                  </button>
                </div>
              ) : null}
              <div className=" flex items-center py-2 " >
                <img src={chain} alt="chain" className=" w-[12.39px] " />
                <p className=" font-medium text-sm ml-2 " >https://yourweblink.com</p>
              </div>
            </div>
          </div>
          <div className="w-full pb-2 mb-9 border-b-2 border-muted-50 flex items-center text-sm font-medium text-muted">
            <p
              className={`mr-10 cursor-pointer ${
                active === 1 ? "active-tab-bottom" : "text-muted font-medium"
              }`}
              onClick={() => setActive(1)}
            >
              Coin holders
            </p>
            <p
              className={`mr-10 cursor-pointer ${
                active === 2 ? "active-tab-bottom" : "text-muted font-medium"
              }`}
              onClick={() => setActive(2)}
            >
              Coins bought
            </p>
            <p
              className={`cursor-pointer ${
                active === 3 ? "active-tab-bottom" : "text-muted font-medium"
              }`}
              onClick={() => setActive(3)}
            >
              Transactions
            </p>
          </div>
          {coinInfo ? renderHistory : null}
        </>
      ) : errorLoadingProfile ? (
        <div className="text-center">Profile Not Found!</div>
      ) : (
        <div className="text-center">Loading Profile...</div>
      )}
    </div>
  );
};

export default Profile;
