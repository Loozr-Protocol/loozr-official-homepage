import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import { TOAST_OPTIONS } from "../../config/constants";
import FullPageError from "../../components/FullPageError";
import SongTokenizedSuccessDialog from "../../components/SongTokenization/SongTokenizedSuccessDialog";
import ApiService from "../../services/ApiService/ApiService";
import "./SongTokenization.scss";
import { parseRawTrack } from "../../utils/parser";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SongTokenization() {
  const query = useQuery();
  const songUrl = query.get("songUrl");

  const [isLoading, setLoader] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState(null);
  const [artworkSrc, setArtworkSrc] = useState(null);
  const [file, setFile] = useState(null);

  const formSchema = yup.object({
    coinName: yup.string().required("enter coin name"),
    songTitle: yup.string().required("this field is required"),
    genre: yup.string().required("this field is required"),
    description: yup.string().required("this field is required"),
    mood: yup.string().required("this field is required"),
    featuring: yup.string(),
    founderReward: yup
      .number()
      .max(100, "Founder reward exceeded 100%")
      .min(1, "Minimum allowed value is 1 percent")
      .typeError("Founder percentage must be in number format"),
    ISRCCode: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      coinName: "",
      songTitle: "",
      songName: "",
      genre: "",
      description: "",
      mood: "",
      featuring: "",
      ISRCCode: "",
      founderReward: 0,
    },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  const handleFileChange = (e) => {
    const artwork = e.target.files[0];
    console.log(URL.createObjectURL(artwork));
    setArtworkSrc(URL.createObjectURL(artwork));
    setFile(artwork);
  };

  const handleCloseSongTokenizedModal = () => {
    setShowSuccessModal(false);
  };

  const handleSubmit = () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }

    if (!file) {
      toast.error("Please provide track artwork", TOAST_OPTIONS);
      return;
    }

    setLoader(true);
    const isNft = false;
    const formData = new FormData();
    formData.append("artwork", file);
    formData.append("song_title", formik.values.songTitle);
    formData.append("song_name", formik.values.coinName);
    formData.append("song_url", songUrl);
    formData.append("is_nft", isNft.toString());
    formData.append("description", formik.values.description);
    formData.append("isrc_code", formik.values.ISRCCode ?? "");
    formData.append("upc_code", "");
    formData.append("features", formik.values.featuring ?? "");
    formData.append(
      "founder_reward",
      (formik.values.founderReward * 100).toString()
    );

    const genreArray = formik.values.genre.split(",");
    genreArray.forEach((genre) => {
      formData.append("genres", genre.trim());
    });

    const moodArray = formik.values.mood.split(",");
    moodArray.forEach((mood) => {
      formData.append("moods", mood.trim());
    });

    ApiService.post("/music/tokenize-song", formData)
      .then((res) => {
        setLoader(false);
        const track = parseRawTrack(res);
        setShowSuccessModal(track);
      })
      .catch((err) => {
        setLoader(false);
        toast.error(err.message, TOAST_OPTIONS);
      });
  };

  if (!songUrl) {
    return (
      <FullPageError errorMsg="Invalid request. Please go back and try again." />
    );
  }
  return (
    <div className=" w-full flex flex-col py-20 px-6 items-center font-medium ">
      <div className=" w-[470px] flex flex-col gap-4 ">
        <div>
          <p className=" text-[25px] font-bold text-white ">
            Edit track details
          </p>
          <p className=" mt-1 text-[#536079] text-xs font-medium ">
            Only tokenize music you own or have permission to distribute.
          </p>
        </div>
        <div className=" mt-6 w-full flex gap-4 ">
          <div className=" w-fit" style={{ backgroundColor: "#008000" }}>
            <div
              className=" w-[180px] h-full bg-[#12161F] flex flex-col px-4 pb-4 "
              style={{
                backgroundImage: `url(${artworkSrc})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <label
                htmlFor="artworkFileInput"
                className="flex justify-center items-center mt-auto w-full rounded-[50px] bg-[#536079] font-semibold !text-[12px] h-[36px] text-white text-center artwork-upload"
              >
                {file ? "Select artwork" : <>Add artwork</>}
                <input
                  className="artwork-upload-input"
                  id="artworkFileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className=" w-full gap-4 flex flex-col ">
            <div style={{ minHeight: "50px" }}>
              <input
                type="text"
                className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
                style={{ backgroundColor: "#12161F", minHeight: "50px" }}
                placeholder="$MUSIC COIN NAME *"
                name="coinName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => formik.setFieldTouched("coinName", true, true)}
              />
              {formik.touched.coinName && formik.errors.coinName && (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xs font-Inter-SemiBold text-[#F25341]"
                  style={{ marginTop: "5px" }}
                >
                  {formik.errors.coinName}
                </motion.div>
              )}
            </div>
            <div style={{ minHeight: "50px" }}>
              <input
                type="text"
                className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
                style={{ backgroundColor: "#12161F", minHeight: "50px" }}
                placeholder="Enter song title *"
                name="songTitle"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => formik.setFieldTouched("songTitle", true, true)}
              />
              {formik.touched.songTitle && formik.errors.songTitle && (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xs font-Inter-SemiBold text-[#F25341]"
                  style={{ marginTop: "5px" }}
                >
                  {formik.errors.songTitle}
                </motion.div>
              )}
            </div>
            <div style={{ minHeight: "50px" }}>
              <select
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="genre"
                onFocus={() => formik.setFieldTouched("genre", true, true)}
                className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
                style={{ backgroundColor: "#12161F", minHeight: "50px" }}
              >
                <option value="" disabled selected hidden>
                  Choose genre *
                </option>
                <option value="dance">Dance</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
              </select>
              {formik.touched.genre && formik.errors.genre && (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xs font-Inter-SemiBold text-[#F25341]"
                  style={{ marginTop: "5px" }}
                >
                  {formik.errors.genre}
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("description", true, true)}
            placeholder="Add track description (optional) "
            name="description"
            id="description"
            style={{
              borderRadius: "0px",
              backgroundColor: "#12161F",
              fontSize: "13px",
              borderWidth: "0px",
              resize: "none",
              color: "white",
              minHeight: "99px",
              padding: "10px",
              outline: "none",
              width: "100%",
            }}
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "5px" }}
            >
              {formik.errors.description}
            </motion.div>
          )}
        </div>
        <div className=" w-full flex gap-4 ">
          <div style={{ minHeight: "50px", width: "100%" }}>
            <select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldTouched("mood", true, true)}
              name="mood"
              className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
              style={{ backgroundColor: "#12161F", minHeight: "50px" }}
            >
              <option value="" disabled selected hidden>
                Select mood
              </option>
              <option value="reading">reading</option>
              <option value="club">club</option>
              <option value="cool">cool</option>
            </select>
            {formik.touched.mood && formik.errors.mood && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "5px" }}
              >
                {formik.errors.mood}
              </motion.div>
            )}
          </div>
          <div style={{ minHeight: "50px", width: "100%" }}>
            <input
              type="text"
              className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
              style={{ backgroundColor: "#12161F", minHeight: "50px" }}
              placeholder="Featuring (optional)"
              name="featuring"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldTouched("featuring", true, true)}
            />
            {formik.touched.featuring && formik.errors.featuring && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "5px" }}
              >
                {formik.errors.featuring}
              </motion.div>
            )}
          </div>
        </div>
        <div className=" mt-6 ">
          <p className=" text-[20px] font-bold text-white ">Monetization</p>
          <p className=" mt-1 text-[#536079] text-xs font-medium ">
            Determine the percentage of Founder Reward that you wish to receive
            for each sale of your music coin, as well as the percentage of
            reward for your coin holders.
          </p>
        </div>
        <div className=" w-full flex gap-4 mt-2 ">
          <div className=" w-full ">
            <p className=" mb-2 text-sm text-white font-medium ">
              Founders Reward (%)
            </p>
            <input
              type="text"
              className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
              style={{ backgroundColor: "#12161F", minHeight: "50px" }}
              placeholder="10% ownership"
              name="founderReward"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() =>
                formik.setFieldTouched("founderReward", true, true)
              }
            />
            {formik.touched.founderReward && formik.errors.founderReward && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "5px" }}
              >
                {formik.errors.founderReward}
              </motion.div>
            )}
          </div>
          <div className=" w-full ">
            <p className=" mb-2 text-sm text-white font-medium ">
              Your Track Identifier
            </p>
            <input
              type="text"
              className="px-7 py-2 h-50 text-muted text-[13px] placeholder:text-muted"
              style={{ backgroundColor: "#12161F", minHeight: "50px" }}
              placeholder="ISRC code (optional)"
              name="ISRCCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldTouched("ISRCCode", true, true)}
            />
            {formik.touched.ISRCCode && formik.errors.ISRCCode && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "5px" }}
              >
                {formik.errors.ISRCCode}
              </motion.div>
            )}
          </div>
        </div>
        <div className=" w-full flex gap-2  mt-4">
          <Checkbox />
          <p className=" font-normal text-xs text-white ">
            Click on checkbox to accept Terms of Service and Policy
          </p>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="text-sm only:txt font-semibold py-[16px] mt-4 bg-s-gradient w-[352px] mb-10 outline-none focus:outline-none"
        >
          {isLoading ? "TOKENIZING TRACK..." : "TOKENIZE TRACK"}
        </button>
      </div>

      {showSuccessModal && (
        <div className=" fixed inset-0 flex justify-center items-center md:overflow-y-hidden bg-black bg-opacity-90 z-[70] ">
          <SongTokenizedSuccessDialog
            track={showSuccessModal}
            handleCloseModal={handleCloseSongTokenizedModal}
          />
        </div>
      )}
    </div>
  );
}
