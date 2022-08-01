// Auth Components
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import RecoverPassword from "../containers/RecoverPassword";
import ResetPassword from "../containers/ResetPassword";
import VerifyEmail from "../containers/VerifyEmail";

// Non-auth components
import Home from "../containers/Home";
import ArtistEcosystem from "../containers/ArtistsEcosystem";
import ArtistDashboard from "../containers/ArtistDashboard";
import SongDashboard from "../containers/SongDashboard";
import AddTokenName from "../containers/AddTokenName";

import ArtisteDashboard from "../containers/ArtisteDashboard";
import Wallet from "../containers/Wallet";

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
    path: "reset-password",
    private: false,
    component: ResetPassword,
  },
  {
    name: "verify-email",
    path: "verify-email",
    private: false,
    component: VerifyEmail,
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
    name: "artist dashboard",
    path: "artistes/:id",
    private: true,
    component: ArtisteDashboard,
  },
  {
    name: "wallet",
    path: "wallet",
    private: true,
    component: Wallet,
  },
  { name: "wallet1", path: "wallet", private: true, component: Wallet },
];
