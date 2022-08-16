import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../state/user/userReducer";
import { useLocation, useNavigate } from "react-router-dom";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      const decodedJwt = parseJwt(jwtToken);
      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(logout());
        navigate("/login");
      }
    }
  }, [location, dispatch, navigate]);

  return <div></div>;
};

export default AuthVerify;
