import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import Memoji from "../assets/img/artists/arlene.png";
import { motion } from "framer-motion";
import {
  useGetArtistDetailsCallback,
  useSellArtistTokenCallback,
} from "../state/artist/hooks";
import Artist from "../config/constants/models/artist";
import { jsonToArtist } from "../utils";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";
import { httpError } from "../utils/httpHelper";

const SellArtistToken = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { handleGetArtists } = useGetArtistDetailsCallback();
  const { handleSellToken } = useSellArtistTokenCallback();
  let { id } = useParams();

  const [artistDetails, setArtistDetails] = useState<Artist>(null);
  const [pageLoading, setPageLoadingStatus] = useState(true);

  const formSchema = yup.object({
    amount: yup.number().typeError("Amount must be in number format"),
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
      await handleSellToken(artistDetails.id, formik.values.amount);
      setLoading(false);
      toast.success("Exchange successful!", TOAST_OPTIONS);
    } catch (err: any) {
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

  return (
    <div className="w-full mt-16 md:mt-0">
      <p className="text-white text-2xl font-semibold mb-12">
        Sell Artiste Token
      </p>
      <div className="max-w-[490px]">
        <div className="w-30 mb-8">
          <div className="relative mb-2">
            <img
              src={Memoji}
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
            Amount of <span className="uppercase">${artistDetails.creatorCoinId}</span> to exchange
            for LZR:
          </p>
          <input
            type="tel"
            name="amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("amount", true, true)}
            className="py-8 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
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
        <div>
          <button
            className="py-4 text-white disabled:text-muted font-medium text-sm bg-gradient-ld disabled:bg-dark-800 mb-11 w-full sm:w-80 focus:outline-none"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Inprogress..." : "Exchange"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellArtistToken;
