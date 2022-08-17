import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { signUp } from "../state/user/userActions";
import AuthImage from "../assets/img/auth-img.png";
import { AppState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state: AppState) => state.user.loading);
  const success = useSelector((state: AppState) => state.user.success);

  const formSchema = yup.object({
    email: yup
      .string()
      .email("This email is not valid")
      .required("Your email is required"),
    password: yup
      .string()
      .required("Your password is required")
      .min(4, "A minimum of 6 characters"),
    retyped_password: yup
      .string()
      .test(
        "retyped_password",
        "passwords don't match",
        (value, context) => value === context.parent["password"]
      ),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", retyped_password: "" },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  const handleSubmit = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }

    dispatch(signUp(formik.values));
  };

  useEffect(() => {
    if (success)
      navigate(`/verify-email/${formik.values.email}`, { replace: true });
  }, [navigate, success, formik.values.email]);

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 lg:grid-cols-3">
      <img
        src={AuthImage}
        alt=""
        className="w-full lg:w-4/5 hidden md:block h-screen"
      />
      <div className="flex flex-col items-center justify-center px-6 md:px-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-sm font-normal text-muted mb-3">START FOR FREE</p>
          <p className="text-4xl mb-2 md:!mb-9 font-bold text-white">
            Create account
          </p>
          <p className="text-[15px] font-normal mb-[40px]">
            Already have an account?{" "}
            <Link to="/login" className="text-loozr-purple">
              Login
            </Link>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("email", true, true)}
            className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base bg-dark-800 mb-7"
            style={{ backgroundColor: "#12161F", height: 74 }}
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
              className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base bg-dark-800 mb-7"
              style={{ backgroundColor: "#12161F", height: 74 }}
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
                style={{ marginTop: "-44px" }}
              >
                {formik.errors.password}
              </motion.div>
            )}
          </div>
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="retyped_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() =>
                formik.setFieldTouched("retyped_password", true, true)
              }
              placeholder="Re-type Password"
              className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base bg-dark-800 "
              style={{ backgroundColor: "#12161F", height: 74 }}
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
            {formik.touched.retyped_password && formik.errors.retyped_password && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "-2px" }}
              >
                {formik.errors.retyped_password}
              </motion.div>
            )}
          </div>
          <p className="text-muted text-[15px] md:text-base my-11">
            By clicking “Create account” you agree to our{" "}
            <span className="text-loozr-purple">Terms of Service</span> and our{" "}
            <span className="text-loozr-purple">Policy.</span>
          </p>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="py-3 md:py-6 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none h-[74px]"
          >
            {isLoading ? "Processing..." : "Create account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
