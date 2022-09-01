// Auth Components
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import RecoverPassword from "../containers/RecoverPassword";
import ResetPassword from "../containers/ResetPassword";
import VerifyEmail from "../containers/VerifyEmail";
import AccountVerificationSuccess from "../containers/AccountVerificationSuccess";

// Non-auth components
import Home from "../containers/Home";
import ArtistEcosystem from "../containers/ArtistsEcosystem";
import ArtistDashboard from "../containers/ArtistDashboard";
import SongDashboard from "../containers/SongDashboard";
import AddTokenName from "../containers/AddTokenName";

import Artistes from "../containers/Artistes";
import ArtisteDashboard from "../containers/ArtisteDashboard";
import Wallet from "../containers/Wallet";
import Profile from "../containers/Profile";
import LaunchToken from "../containers/LaunchToken";
import AccountSetup from "../containers/AccountSetup";
import EditProfile from "../containers/EditProfile";
import Tracks from "../containers/Tracks";
import BuyLzr from "../containers/BuyLzr";
import SendLzr from "../containers/SendLzr";
import NFTs from "../containers/Nfts";
import Notifications from "../containers/Notifications";

export const authRoutes = [
  {
    name: "login",
    path: "login",
    private: false,
    component: Login,
  },
  {
    name: "signup",
    path: "signup",
    private: false,
    component: Signup,
  },
  {
    name: "recover password",
    path: "recover-password",
    private: false,
    component: RecoverPassword,
  },
  {
    name: "reset password",
    path: "password-reset/:id/:token",
    private: false,
    component: ResetPassword,
  },
  {
    name: "verify-email",
    path: "verify-email/:email",
    private: false,
    component: VerifyEmail,
  }, {
    name: "complete-verification",
    path: "account-activation-success",
    private: false,
    component: AccountVerificationSuccess,
  },
  {
    name: "Complete Setup",
    path: "account-setup",
    private: true,
    component: AccountSetup,
  }, {
    name: "Launch Token",
    path: "launch-token",
    private: true,
    component: LaunchToken,
  },
];

export const routes = [
  {
    name: "home",
    path: "/",
    private: false,
    component: Home,
  },
  {
    name: "artists ecosystem",
    path: "/artistes/ecosystem",
    private: false,
    component: ArtistEcosystem,
  },
  {
    name: "artist dashboard",
    path: "/artists/:id",
    private: false,
    component: ArtistDashboard,
  },
  {
    name: "song dashboard",
    path: "/artists/songs/:id",
    private: false,
    component: SongDashboard,
  },
  {
    name: "add token name",
    path: "/tokenname/add",
    private: true,
    component: AddTokenName,
  },
];

export const dashboard = [
  {
    name: "artistes",
    path: "artistes",
    private: true,
    component: Artistes,
  },
  {
    name: "artiste dashboard",
    path: "explore",
    private: true,
    component: ArtisteDashboard,
  },
  {
    name: "wallet",
    path: "wallet",
    private: true,
    component: Wallet,
  },
  {
    name: "profile",
    path: "profile",
    private: true,
    component: Profile,
  },
  {
    name: "edit profile",
    path: "profile/edit",
    private: true,
    component: EditProfile,
  },
  {
    name: "tracks",
    path: "tracks",
    private: true,
    component: Tracks,
  },
  {
    name: "buy lzr",
    path: "lzr/buy",
    private: true,
    component: BuyLzr,
  },
  {
    name: "send lzr",
    path: "lzr/send",
    private: true,
    component: SendLzr,
  },
  {
    name: "music nfts",
    path: "nfts",
    private: true,
    component: NFTs,
  },
  {
    name: "notifications",
    path: "notifications",
    private: true,
    component: Notifications,
  },
];
