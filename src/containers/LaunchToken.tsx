import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATOR_COIN_DOMAIN } from "../config/constants";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useArtisteSetupCallback } from "../state/artist/hooks";
import { jsonToArtist } from "../utils";
import { httpError } from "../utils/httpHelper";
import { useDispatch } from "react-redux";
import { updateProfile } from "../state/user/userReducer";

const LaunchToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleArtisteSetup } = useArtisteSetupCallback();
  const [isLoading, setLoader] = useState<boolean>(false);

  const formSchema = yup.object({
    account_id: yup.string().required("Please enter coin name"),
    founder_reward: yup
      .number()
      .typeError("Founder percentage must be in number format"),
  });

  const formik = useFormik({
    initialValues: { account_id: "", founder_reward: 0 },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  const handleLaunchToken = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }

    setLoader(true);

    try {
      const result = await handleArtisteSetup(formik.values);
      const artist = jsonToArtist(result);
      dispatch(updateProfile(artist.user));
      setLoader(false);

      navigate(`/explore`, { replace: true });
    } catch (err) {
      setLoader(false);
      httpError(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="px-4 max-w-[520px] mx-auto">
        <p className="font-bold text-4xl md:text-4xl text-white mb-4 md:mb-4">
          Add Artiste Coin
        </p>
        <p className="text-sm md:text-base mb-7">
          Launch you own cryptocurrency.
          <span className="mt-2.5">
            Enter a custom Artiste Token Symbol that will act as your currency
            that can be held, traded and exchanged for goods and services.
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
          placeholder="$YOUR_COIN_NAME"
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
        <p className="italic text-sm md:text-base text-muted mb-8 md:mb-5">
          Coin name: {formik.values.account_id}.{CREATOR_COIN_DOMAIN}
        </p>
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Set Founder Reward:
          </p>
          <input
            type="tel"
            name="founder_reward"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("founder_reward", true, true)}
            className="py-4 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="100%"
            style={{ background: "#12161F" }}
          />
        </div>
        <div className="w-full h-auto pt-2">
          {formik.touched.founder_reward && formik.errors.founder_reward && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-35px" }}
            >
              {formik.errors.founder_reward}
            </motion.div>
          )}
        </div>
        <button
          className="py-4 text-white disabled:text-muted font-medium md:text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={handleLaunchToken}
          disabled={isLoading}
        >
          {isLoading ? "Reserving username..." : "Reserve Coin Name"}
        </button>
      </div>
    </div>
  );
};

export default LaunchToken;
