import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../../config/constants";
import ApiService from "../../services/ApiService/ApiService";
import "./SongUploadDialog.scss";

interface Props {
  handleCloseModal: () => void;
}

const SongUploadDialog = ({ handleCloseModal }: Props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setLoader] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("song", file);

    setLoader(true);
    ApiService.post("/music/upload-song", formData, {
      onUploadProgress: (progressEvent) => {
        setProgress(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
      },
    })
      .then((res) => {
        setLoader(false);
        navigate(`/song-tokenization?songUrl=${res["song_url"]}`);
      })
      .catch((err) => {
        setLoader(false);
        toast.error(err.message, TOAST_OPTIONS);
      });
  };

  return (
    <div className=" w-full h-screen flex flex-col !txt justify-center  md:w-[475px] md:h-auto relative z-[80]  md:rounded-2xl bg-[#12161F]">
      <div className=" p-8 flex items-center justify-between border-b border-[#222A3B] ">
        <p className=" txt font-bold text-xl text-white ">Upload a track</p>
        <svg
          role="button"
          onClick={handleCloseModal}
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8341 1.04828L1.85547 17.0269"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.85547 1.04828L17.8341 17.0269"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className=" w-full flex h-auto pt-12 pb-9 px-10  flex-col items-center ">
        <svg
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.04704 42.499C4.04704 63.7351 21.2625 80.9519 42.5 80.9519C43.6174 80.9519 44.524 81.8579 44.524 82.976C44.524 84.0933 43.6181 85 42.5 85C19.0279 85 0 65.9721 0 42.5C0 19.0279 19.0279 0 42.5 0C65.9722 0 85 19.0279 85 42.5C85 43.6174 84.094 44.524 82.976 44.524C81.8586 44.524 80.9519 43.6181 80.9519 42.5C80.9519 21.2639 63.7365 4.04704 42.499 4.04704C21.2628 4.04704 4.046 21.2625 4.046 42.5L4.04704 42.499Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.5228 24.4287C51.3877 25.4106 56.6656 31.3153 56.6656 38.452C56.6656 39.5693 57.5716 40.476 58.6897 40.476C59.8071 40.476 60.7137 39.57 60.7137 38.452C60.7137 28.3928 52.5593 20.2377 42.4994 20.2377C41.3821 20.2377 40.4754 21.1436 40.4754 22.2617V42.4987C38.7841 41.2288 36.6821 40.476 34.404 40.476C28.8157 40.476 24.2852 45.0065 24.2852 50.5948C24.2852 56.1831 28.8157 60.7136 34.404 60.7136C39.9923 60.7136 44.5228 56.1831 44.5228 50.5948V24.4287ZM34.404 44.5234C37.7568 44.5234 40.4754 47.242 40.4754 50.5948C40.4754 53.9476 37.7568 56.6662 34.404 56.6662C31.0512 56.6662 28.3325 53.9476 28.3325 50.5948C28.3325 47.242 31.0512 44.5234 34.404 44.5234Z"
            fill="white"
          />
          <path
            d="M59.3694 69.3087C60.2049 70.0513 61.4841 69.9761 62.2269 69.1406L66.7859 64.0118V82.9738C66.7859 84.0911 67.6919 84.9978 68.8099 84.9978C69.9273 84.9978 70.834 84.0918 70.834 82.9738V64.0118L75.3929 69.1406C76.1356 69.9761 77.4149 70.0513 78.2505 69.3087C79.0861 68.566 79.1612 67.2867 78.4185 66.4511L70.3231 57.344C69.9389 56.9123 69.3886 56.665 68.8106 56.665C68.2326 56.665 67.6824 56.9123 67.2982 57.344L59.2027 66.4511C58.46 67.2866 58.5352 68.5653 59.3708 69.3087H59.3694Z"
            fill="white"
          />
        </svg>
        <div className=" w-full pt-12 flex flex-col items-center ">
          <p className=" max-w-[319px] leading-[22.5px] txt font-semibold text-[15px] text-center text-white ">
            Start by uploading your track. Make sure to check the guidelines and
            file format requirements before proceeding.
          </p>
          <label
            htmlFor="songFileInput"
            className="text-sm only:txt font-semibold py-[16px] mt-8 bg-dark-900 w-[352px] mb-4 outline-none focus:outline-none text-center song-upload"
          >
            {file ? (
              file.name
            ) : (
              <>
                <i className="fa fa-music mr-2"></i> Choose a song
              </>
            )}
            <input
              className="song-upload-input"
              id="songFileInput"
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
            />
          </label>
          {file ? (
            <button
              onClick={handleUpload}
              disabled={isLoading}
              className="text-sm only:txt font-semibold py-[16px] mt-8 bg-s-gradient w-[352px] mb-10 outline-none focus:outline-none"
            >
              {isLoading ? <>{progress}% uploaded</> : "Choose a track"}
            </button>
          ) : null}
          <div></div>
        </div>
        <p className=" text-[#536079] text-xs txt font-semibold text-center ">
          M4A, MP3, WAV, AIFF, FLAC, AAC, OGG, MP2, and WMA accepted
        </p>
      </div>
    </div>
  );
};

export default SongUploadDialog;
