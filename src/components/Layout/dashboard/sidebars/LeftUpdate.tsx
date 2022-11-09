import React from 'react'
import LoozrBeta from "../../../../assets/icons/loozr-beta.svg";
import Loozr from "../../../../assets/icons/loozr.svg"; 
import Explore from "../../../../assets/svg/Explore";
import Artist from "../../../../assets/svg/Artist";
import Tracks from "../../../../assets/svg/Tracks";
import NFT from "../../../../assets/svg/NFT";
import Wallet from "../../../../assets/svg/Wallet";
import Notification from "../../../../assets/svg/Notification";
import More from "../../../../assets/svg/More";
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_OPTIONS } from '../../../../config/constants';
import { useBecomeArtisteCallback } from '../../../../state/artist/hooks';
import { setPageLoaderStatus } from '../../../../state/misc';
import { AppState } from '../../../../state/store';

const tabs = [
  {
    icon: Explore,
    label: "Explore",
    available: true,
    path: "/explore",
  },
  {
    icon: Artist,
    label: "Artistes ",
    available: true,
    path: "/artistes",
  },
  {
    icon: Tracks,
    label: "Tracks",
    available: false,
    path: "/tracks",
  },
  {
    icon: NFT,
    label: "Music NFT",
    available: true,
    path: "/nfts",
  },
  {
    icon: Wallet,
    label: "Wallet",
    available: true,
    path: "/wallet",
  },
  {
    icon: Notification,
    label: "Notifications",
    available: true,
    path: "/notifications",
  },
  {
    icon: More,
    label: "LOOZRverse",
    available: true,
  },
];


export default function LeftUpdate() {

    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const push = useNavigate();
    const xl = useMediaQuery("(min-width:1280px)");
    // const lg = useMediaQuery("(min-width:1024px)");
    const md = useMediaQuery("(min-width:768px)");
    const user = useSelector((state: AppState) => state.user.userInfo);
    const { handleBecomeArtiste } = useBecomeArtisteCallback();
  
    const becomeArtist = async () => {
      dispatch(setPageLoaderStatus(true));
      try {
        await handleBecomeArtiste({});
        window.location.reload();
      } catch (err) {
        dispatch(setPageLoaderStatus(false));
      }
    };
  
    const musicUpload = () => {
      toast.info("Coming soon!", TOAST_OPTIONS);
    };
    
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true"; 

    return (
        <div className={`bg-dark-800 flex flex-col items-start h-screen md:pl-11 xl:pl-14 pr-auto md:pr-4 xl:pr-12 pt-8 pb-12 mb-5`}>
                   
                <img src={LoozrBeta} alt="" className={`w-32 h-8 mb-7 xl:flex hidden `} /> 
                <img src={Loozr} alt="" className={`mb-6 xl:hidden h-6 w-6`} /> 
        </div>
    )
} 