import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { toastHttpError } from "../utils/httpHelper";
import AuthImage from "../assets/img/auth-img.png";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";
import { useRequestPasswordResetCallback } from "../state/user/hooks/useAuth";


const RecoverPassword = () => {
  const [isLoading, setLoading] = useState(false);
  const { handleRequestResetLink } = useRequestPasswordResetCallback();

  const formSchema = yup.object({
    email: yup
      .string()
      .email("This email is not valid")
      .required("Your email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
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
       await handleRequestResetLink(formik.values);
       setLoading(false);
        toast.success("A password reset link has been sent to your email address", TOAST_OPTIONS);
     } catch (err: any) {
       setLoading(false);
       toastHttpError(err);
     }
   };

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2 lg:grid-cols-3">
      <img
        src={AuthImage}
        alt=""
        className="w-full lg:w-4/5 hidden md:block h-screen"
      />
      <div className="flex flex-col items-center justify-center px-8 md:px-auto">
        <div style={{ zoom: "85%", width: "100%" }}>
          <p className="text-sm font-normal text-muted mb-2">Oops!</p>
          <p className="text-4xl font-bold mb-6 md:!mb-9">
            Recover password
          </p>
          <p className="text-[15px] font-normal mb-8">
            Please provide your email address in order to receive a password reset link.
          </p>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("email", true, true)}
            placeholder="Enter email"
            className="py-8 !px-[39px] text-muted placeholder:text-muted font-medium text-base h-[74px] bg-dark-800 mb-11"
            style={{ backgroundColor: "#12161F", borderRadius: 10, }}
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
          <div className="w-full">
            <button
              className="py-6 text-white disabled:text-muted font-medium text-xl bg-gradient-ld disabled:bg-dark-800 mb-6 md:mb-11 w-full focus:outline-none rounded-[10px]"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Requesting..." : "Proceed"}
            </button>
          </div>
          <p className="text-[15px] font-normal">
            Remember your password?{" "}
            <Link to="/login" className="text-loozr-purple">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
