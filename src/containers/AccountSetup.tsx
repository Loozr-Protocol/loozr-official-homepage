import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state/store";
import { MIXER_ACCOUNT } from "../config/constants/index";
import { accountSetup } from "../state/user/userActions";
import AccountSetupInput from "../components/AccountSetupInput";

export default function AccountSetup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAccountAvailable, setAvailableState] = useState(false)
  const isLoading = useSelector((state: AppState) => state.user.loading);
  const success = useSelector(
    (state: AppState) => state.user.accountSetupSuccess
  );

  const jwtToken = localStorage.getItem("jwtToken")
    ? localStorage.getItem("jwtToken")
    : null;
  let location = useLocation();

  const formSchema = yup.object({
    account_id: yup.string().required("Please enter your username"),
  });

  const formik = useFormik({
    initialValues: { account_id: "" },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (success) navigate(`/explore`, { replace: true });
  }, [navigate, success]);

  const handleLaunchToken = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }

    if (!isAccountAvailable) return;

    dispatch(accountSetup(formik.values));
  };

  // if (!jwtToken) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="px-4 max-w-[550px] mx-auto">
        <p className="font-bold text-4xl md:text-5xl text-white mb-4 md:mb-7">
        Your Web3 identity
          starts here.
        </p>
        <p className="text-base md:text-xl mb-7">
          <span className="mt-4">
            Enter a custom username that you'll use for all transactions,
            including earning, streaming, sending, and receiving tokens.
          </span>
        </p>
        <AccountSetupInput
          accountDomain={`.${MIXER_ACCOUNT}`}
          name="account_id"
          placeholder="$YOUR_USERNAME"
          value={formik.values.account_id}
          setResult={(result) => setAvailableState(result)}
          onChange={formik.handleChange}
          onBlur={(e) => formik.handleBlur(e)}
          onFocus={() => formik.setFieldTouched("account_id", true, true)}
        />
        <div className="w-full h-auto mb-1">
          {formik.touched.account_id && formik.errors.account_id && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "3px" }}
            >
              {formik.errors.account_id}
            </motion.div>
          )}
        </div>
        <p className="italic text-sm md:text-lg text-muted mb-8 md:mb-16">
          Username:{" "}
          {formik.values.account_id ? formik.values.account_id : "examplename"}.
          {MIXER_ACCOUNT}
        </p>
        <button
          className="py-4 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none h-[74px]"
          onClick={handleLaunchToken}
          disabled={isLoading || !isAccountAvailable}
        >
          {isLoading ? "Reserving username..." : "Reserve My Name"}
        </button>
      </div>
    </div>
  );
}
