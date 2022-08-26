import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useCheckPasswordResetDataCallback, usePasswordResetCallback } from "../state/user/hooks/useAuth";
import FullPageError from "../components/FullPageError";
import { httpError, returnHttpError } from "../utils/httpHelper";
import { TOAST_OPTIONS } from "../config/constants";
import { toast } from "react-toastify";

const ResetPassword = () => {
  let { id, token } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isFetchingData, setFetchingStatus] = useState(true);
  const [pageError, setPageError] = useState(null);
  const { checkDataValidity } = useCheckPasswordResetDataCallback();
  const { handlePasswordReset } = usePasswordResetCallback();
  const [passwordVisible, setPasswordVisible] = useState(false);

   useEffect(() => {
     checkDataValidity(id, token)
       .then((res) => {
         setFetchingStatus(false);
       })
       .catch((err) => {
         setFetchingStatus(false);
         setPageError(returnHttpError(err));
       });
   }, []);

  const formSchema = yup.object({
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
    initialValues: { password: "", retyped_password: "" },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  const handleSubmit = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }
    setLoading(true);
    try {
      const formData = { ...formik.values, uidb64: id, token: token};
      await handlePasswordReset(formData);
      setLoading(false);
      toast.success(
        "Success! You can now login with your new password",
        TOAST_OPTIONS
      );
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 5000);
    } catch (err: any) {
      setLoading(false);
      httpError(err);
    }
  };

  return isFetchingData ? (
    <>Loading...</>
  ) : pageError ? (
    <FullPageError errorMsg={pageError} />
  ) : (
    <div className="min-h-screen w-full h-full grid">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto h-full w-full max-w-[558px] mx-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-4xl md:text-5xl lg:text-label mb-6 md:mb-10 font-bold">
            Reset password
          </p>
          <p className="md:text-xl font-normal mb-10 md:mb-20">
            Enter a new login password below.
          </p>
          <div className="w-full relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldTouched("password", true, true)}
              placeholder="New password"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium md:text-xl bg-dark-800 mb-11"
              style={{ backgroundColor: "#12161F" }}
            />
            <span
              className="absolute right-4 inset-y-4 cursor-pointer"
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
          <div className="w-full relative mb-12 md:mb-24">
            <input
              type={passwordVisible ? "text" : "password"}
              name="retyped_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() =>
                formik.setFieldTouched("retyped_password", true, true)
              }
              placeholder="Re-type Password"
              className="py-8 px-11 text-muted placeholder:text-muted font-medium md:text-xl bg-dark-800 "
              style={{ backgroundColor: "#12161F" }}
            />
            <span
              className="absolute right-4 inset-y-4 cursor-pointer"
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
                style={{ marginTop: "-48px" }}
              >
                {formik.errors.retyped_password}
              </motion.div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="py-6 text-white disabled:text-muted font-medium md:text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          >
            {isLoading ? "Processing..." : "Reset"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
