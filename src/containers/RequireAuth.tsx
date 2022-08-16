import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const jwtToken = localStorage.getItem("jwtToken")
    ? localStorage.getItem("jwtToken")
    : null;
  let location = useLocation();

  if (!jwtToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}