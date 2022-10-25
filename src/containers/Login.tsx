import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useLoginCallback } from "../state/user/hooks/useAuth";
import AuthImage from "../assets/img/auth-img.png";
import { httpError } from "../utils/httpHelper";
import { useDispatch } from "react-redux";
import { login } from "../state/user/userReducer";
import { jsonToUser } from "../utils";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const push = useNavigate();
  const dispatch = useDispatch();
  const { handleLogin } = useLoginCallback();

  const loginSchema = yup.object({
    email: yup
      .string()
      .email("This email is not valid")
      .required("Your email is required"),
    password: yup
      .string()
      .required("Your password is required")
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  const handleLoginSubmit = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }
    setLoading(true);
    try {
      const result = await handleLogin(formik.values);
      setLoading(false);
      const jwtToken = result["access_token"];
      localStorage.setItem("jwtToken", jwtToken);
      const user = jsonToUser(result["user"]);
      dispatch(login(user));
      push("/explore", { replace: true });
    } catch (err: any) {
      setLoading(false);
       httpError(err);
    }
  };

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 lg:grid-cols-3">
      <img
        src={AuthImage}
        alt=""
        className="w-full lg:w-4/5 hidden md:block h-screen"
      />
      <div className="flex flex-col items-center justify-center px-6 md:px-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-sm font-normal text-muted mb-3">WELCOME BACK</p>
          <p className="text-4xl font-bold mb-9 text-white">Login account</p>
          <p className="text-[15px] font-normal mb-11">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-loozr-purple">
              Create account
            </Link>
          </p>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("email", true, true)}
            placeholder="Enter email"
            className="py-8 !px-[39px] text-muted placeholder:text-muted text-base font-medium bg-dark-800 mb-7"
            style={{
              backgroundColor: "#12161F",
              height: 74,
              padding: "auto 40px",
            }}
          />
          <div className="w-full h-auto pt-2">
            {formik.touched.email && formik.errors.email && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "-42px" }}
              >
                {formik.errors.email}
              </motion.div>
            )}
          </div>
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldTouched("password", true, true)}
              placeholder="Password"
              className="py-8 !px-[39px] text-muted placeholder:text-muted text-base font-medium bg-dark-800 w-full"
              style={{
                backgroundColor: "#12161F",
                marginBottom: 43,
                height: 74,
                padding: "auto 40px",
              }}
            />
            <span
              className="absolute right-10 inset-y-6 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <VisibilityIcon style={{ color: "#536079" }} />
              ) : (
                <VisibilityOffIcon style={{ color: "#536079" }} />
              )}
            </span>
          </div>
          <div className="w-full h-auto pt-2">
            {formik.touched.password && formik.errors.password && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "-56px" }}
              >
                {formik.errors.password}
              </motion.div>
            )}
          </div>
          <button
            className="py-3 md:py-6 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-4 md:!mb-12 w-full focus:outline-none h-[74px]"
            onClick={handleLoginSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Login in..." : "Login"}
          </button>
          <p className="text-[15px] font-normal">
            Forgot your password?{" "}
            <Link to="/recover-password" className="text-loozr-purple">
              Reset here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
