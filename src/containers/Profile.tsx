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
import { abbrevNumber } from "../utils/formatBalance";
import { getIndividualProfile } from "../state/user/userActions";
import User from "../config/constants/models/user";
import CreatorStatCard from "../components/CreatorStatCard";
import CoinHodlers from "../components/history/CoinHodlers";
import { resetCoinPrice, resetHoldersList } from "../state/artist/artistReducer";
import { decodedJWT } from "../utils";
import Photo from "../components/Photo";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";

const Profile = () => {
  const push = useNavigate();
  let { id } = useParams();
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

  const loadProfile = () => {
    if (id) {
      if (Number(id) !== user.id) {
        dispatch(getIndividualProfile(Number(id)));
        return;
      }
      dispatch(getIndividualProfile(Number(id)));
    }
    dispatch(getIndividualProfile(Number(decodedJWT()["id"])));
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
  }, [id, user]);

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

  return (
    <div className="w-full">
      {currentProfile ? (
        <>
          {currentProfile.isArtist && currentProfile.tokenName && (
            <CreatorStatCard user={currentProfile} />
          )}
          <div className="flex items-start mb-7">
            <Photo
              alt={currentProfile.accountDomain}
              className="h-8 md:h-[170px] w-8 md:w-[170px] rounded-full mr-3"
              style={{ border: "20px solid #141922" }}
            />
            <div className="md:ml-10">
              <p className="text-xl md:text-xl font-medium text-white mb-1.5">
                {currentProfile.accountDomain}
              </p>
              <p className="text-muted font-medium text-sm md:text-sm mb-[10px]">
                <span>{currentProfile.accountId}</span>
                {currentProfile.isArtist ? (
                  <span className="pointer ml-1.5 pl-2 before:top-2">
                    Artiste
                  </span>
                ) : (
                  ""
                )}
              </p>
              <p className="text-white max-w-[435px] text-sm md:text-sm mb-[20px]">
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
            </div>
          </div>
          {currentProfile.isArtist ? (
            <div className="flex justify-content-end mb-9">
              <button
                onClick={() => toast.info("Coming soon!", TOAST_OPTIONS)}
                className="py-3 px-3 sm:px-6 md:px-9 text-xs md:text-sm font-medium bg-loozr-purple rounded-full"
              >
                Buy artiste coin
              </button>
              <button
                onClick={() => toast.info("Coming soon!", TOAST_OPTIONS)}
                className="py-3 px-3 sm:px-6 md:px-9 text-xs md:text-sm font-medium bg-dark-700 rounded-full ml-6"
              >
                Sell artiste coin
              </button>
            </div>
          ) : null}
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
