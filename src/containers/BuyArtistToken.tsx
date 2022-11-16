import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import {
  useBuyArtistTokenCallback,
  useGetArtistDetailsCallback,
} from "../state/artist/hooks";
import Artist from "../config/constants/models/artist";
import { jsonToArtist } from "../utils";
import { httpError } from "../utils/httpHelper";
import { Link } from "react-router-dom";
import Photo from "../components/Photo";

const BuyArtistToken = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { handleGetArtists } = useGetArtistDetailsCallback();
  const { handleBuyToken } = useBuyArtistTokenCallback();
  const bpsDenominator = 100;
  let { id } = useParams();

  const [artistDetails, setArtistDetails] = useState<Artist>(null);
  const [pageLoading, setPageLoadingStatus] = useState(true);

  const formSchema = yup.object({
    amount: yup.number().typeError("Amount to send must be in number format"),
  });

  const formik = useFormik({
    initialValues: { amount: 0 },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  if (isNaN(Number(id))) {
    navigate("/explore");
  }

  const loadArtistDetails = async () => {
    try {
      const result = await handleGetArtists(Number(id));
      const artist = jsonToArtist(result);
      setArtistDetails(artist);
      setPageLoadingStatus(false);
    } catch (err) {
      setArtistDetails(null);
      setPageLoadingStatus(false);
    }
  };

  useEffect(() => {
    loadArtistDetails();
  }, []);

  const handleSubmit = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }
    setLoading(true);
    try {
      await handleBuyToken(artistDetails.id, formik.values.amount);
      setLoading(false);
      setSuccess(true);
    } catch (err: any) {
      setSuccess(false);
      setLoading(false);
      httpError(err);
    }
  };

  if (pageLoading) {
    return <div className="text-center"> Fetching artiste information...</div>;
  }

  if (!artistDetails) {
    navigate("/explore");
    return <></>;
  }

  return isSuccess ? (
    <div className="w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-5xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-2xl md:text-3xl mb-10 font-medium">
            Transaction complete!
          </p>

          <p className="text-xl md:text-2xl font-medium text-muted">
            You exchanged {formik.values.amount} LZR for{" "}
            <strong className="uppercase">
              ${artistDetails.creatorCoinId}
            </strong>{" "}
            coin
          </p>
          <Link to="/explore" className="mt-2 text-loozr-purple">
            Continue
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full mt-16 md:mt-0">
      <p className="text-white text-2xl font-semibold mb-12">
        Buy Artiste Token
      </p>
      <div className="md:w-[350px] w-full ">
        <div className="w-30 mb-8">
          <div className="relative mb-2">
            <Photo
              alt=""
              width={113}
              height={113}
              className="rounded-full w-[113px] h-[113px] object-contain"
              style={{ border: "8px solid #141922" }}
            />
          </div>
          <h3 className="font-semibold uppercase helper-text">
            ${artistDetails.creatorCoinId}
          </h3>
        </div>
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Amount of LZR to exchange:
          </p>
          <input
            type="tel"
            name="amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("amount", true, true)}
            className=" h-[60px] px-11 w-[350px] bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="0.00"
            style={{ background: "#12161F" }}
          />
        </div>
        <div className="w-full h-auto pt-2">
          {formik.touched.amount && formik.errors.amount && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-35px" }}
            >
              {formik.errors.amount}
            </motion.div>
          )}
        </div>
        <p className="helper-text mb-2">
          Artiste will receive {artistDetails.founderReward / bpsDenominator}%
          of your purchase as a Founder Reward
        </p>
        <div className="  " >
          <button
            className=" h-[60px] text-white disabled:text-muted font-medium text-sm bg-gradient-ld disabled:bg-dark-800 mb-11 w-full sm:w-80 focus:outline-none"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Purchase in progress..." : "Purchase"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyArtistToken;
