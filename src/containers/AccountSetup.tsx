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
    account_id: yup.string().required("Please enter your domain name"),
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
      <div className="md:px-4 px-10 max-w-[550px] mx-auto">
        <p className=" font-extrabold text-[25px] w-full md:w-[450px] leading-snug md:leading-normal md:text-4xl text-white md:mb-7">
        Your Web3 identity
          starts here.
        </p>
        <p className="text-[15px] w-full md:w-[450px] md:text-xl leading-normal font-normal mb-7">
          <span className="mt-4">
          Reserve your <span className=" font-bold " >.lzr.testnet</span> domain name to represent your wallet, profile or brand. Stream, send and receive tokens via domain names.
          </span>
        </p>
        <AccountSetupInput
          accountDomain={`.${MIXER_ACCOUNT}`}
          name="account_id"
          placeholder="username.lzr.testnet"
          value={formik.values.account_id}
          setResult={(result) => setAvailableState(result)}
          onChange={formik.handleChange}
          onBlur={(e) => formik.handleBlur(e)}
          onFocus={() => formik.setFieldTouched("account_id", true, true)}
        />
        <div className="w-full h-auto mt-2 mb-3">
          {formik.touched.account_id && formik.errors.account_id && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-normal text-[#F25341]"
              style={{ marginTop: "3px" }}
            >
              {formik.errors.account_id}
            </motion.div>
          )}
        </div> 
        <p className="italic text-[13px] font-normal md:text-lg text-muted mb-8 md:mb-16">
          Domain name:{" "}
          {formik.values.account_id ? formik.values.account_id : "example"}.lzr.testnet
          {/* {MIXER_ACCOUNT} */}
        </p>
        <button
          className="md:py-4 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full md:w-[450px] focus:outline-none h-[55px] md:h-[74px]"
          onClick={handleLaunchToken}
          disabled={isLoading || !isAccountAvailable}
        >
          {isLoading ? "Reserving username..." : "Reserve name"}
        </button>
      </div>
    </div>
  );
}
