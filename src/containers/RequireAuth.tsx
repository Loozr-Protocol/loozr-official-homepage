import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AppState } from "../state/store";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useSelector((state: AppState) => state.user.userInfo);
  const jwtToken = localStorage.getItem("jwtToken")
    ? localStorage.getItem("jwtToken")
    : null;
  let location = useLocation();

  if (!jwtToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user) {
    if (!user.account_id) {
      return (
        <Navigate to="/account-setup" state={{ from: location }} replace />
      );
    }
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
