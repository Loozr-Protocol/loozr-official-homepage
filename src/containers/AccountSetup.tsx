import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { LOOZR_MIXER, NEAR_NETWORK_DOMAIN } from "../config/constants/index";
import { AppState } from "../state/store";
import { accountSetup } from '../state/user/userActions';

export default function AccountSetup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.user.loading);
  const success = useSelector(
    (state: AppState) => state.user.accountSetupSuccess
  );

  const formSchema = yup.object({
    account_id: yup
      .string()
      .required("Please enter your username"),
  });

  const formik = useFormik({
    initialValues: { account_id: "" },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (success)
      navigate(`/explore`, { replace: true });
  }, [navigate, success]);

  const handleLaunchToken = async() => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }

    dispatch(accountSetup(formik.values));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="px-4 max-w-[550px] mx-auto">
        <p className="font-bold text-4xl md:text-5xl text-white mb-4 md:mb-7">
          Add username
        </p>
        <p className="text-base md:text-xl mb-7">
          <span className="mt-4">
            Enter a custom username that you'll use for all transactions,
            including earning, streaming, sending, and receiving tokens.
          </span>
        </p>
        <input
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onFocus={() => formik.setFieldTouched("account_id", true, true)}
          name="account_id"
          className="px-7 py-4 text-muted placeholder:text-muted mb-3"
          style={{ backgroundColor: "#12161F" }}
          placeholder="$YOUR_USERNAME"
        />
        <div className="w-full h-auto mb-1">
          {formik.touched.account_id && formik.errors.account_id && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-8px" }}
            >
              {formik.errors.account_id}
            </motion.div>
          )}
        </div>
        <p className="italic text-sm md:text-lg text-muted mb-8 md:mb-16">
          Username: {formik.values.account_id}.{LOOZR_MIXER}
          {NEAR_NETWORK_DOMAIN}
        </p>
        <button
          className="py-6 text-white disabled:text-muted font-medium md:text-xl bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={handleLaunchToken}
          disabled={isLoading}
        >
          {isLoading ? "Reserving username..." : "Reserve My Name"}
        </button>
      </div>
    </div>
  );
}
