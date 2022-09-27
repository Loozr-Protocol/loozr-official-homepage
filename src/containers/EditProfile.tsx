import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import Memoji from "../assets/img/memoji.png";
import { ReactComponent as HelpIcon } from "../assets/icons/help.svg";
import ToolTip from "../components/Tooltip";
import { AppState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { MIXER_ACCOUNT, TOAST_OPTIONS } from "../config/constants";
import { httpError } from "../utils/httpHelper";
import { useUpdateProfileCallback } from "../state/user/hooks/useAccount";
import { toast } from "react-toastify";
import { updateProfile } from "../state/user/userReducer";
import Photo from "../components/Photo";

const EditProfile = () => {
  const [hasLaunchedToken, setHasLaunchedToken] = useState(
    sessionStorage.getItem("hasLaunchedToken") === "true"
  );
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { handleUpdateProfile } = useUpdateProfileCallback();
  const user = useSelector((state: AppState) => state.user.userInfo);
  const lzrAccountId = `${user.accountId}.${MIXER_ACCOUNT}`;

  const profileEditSchema = yup.object({
    username: yup.string().required("Please enter full name"),
    website: yup.string(),
    country: yup.string(),
    bio: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      username: user.username ?? "",
      website: user.website ?? "",
      country: user.country ?? "",
      bio: user.bio ?? "",
    },
    validationSchema: profileEditSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      username: user.username,
      website: user.website,
      bio: user.bio,
      country: user.country,
    });
  }, [user.username, user.country, user.bio, user.website]);

  const handleSubmit = async () => {
    console.log(formik.values);
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }
    setLoading(true);
    try {
      const result = await handleUpdateProfile(formik.values);
      setLoading(false);
      console.log("Good here:::: ", result);
      dispatch(updateProfile(result));
      toast.success("Profile updated!", TOAST_OPTIONS);
    } catch (err: any) {
      setLoading(false);
      httpError(err);
    }
  };

  useEffect(() => {
    setHasLaunchedToken(sessionStorage.getItem("hasLaunchedToken") === "true");
  }, []);

  return (
    <div className="w-full mt-[70px] md:mt-0">
      <p className="font-medium text-base md:text-lg text-white mb-12">
        Update Profile
      </p>
      <div className="flex items-center justify-between w-1/2 mb-12">
        <div className="relative">
          <Photo
            alt=""
            width={113}
            height={113}
            className="rounded-full w-[113px] h-[113px] object-contain"
            style={{ border: "8px solid #141922" }}
          />
        </div>
        <div>
          <p className="text-xl text-white font-semibold mb-2">
            {lzrAccountId}
          </p>
          {/* <p className="text-loozr-green text-base font-medium">
            change profile picture</p> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-start mb-10">
        <div className="grid gap-6">
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Enter full name"
            name="username"
            defaultValue={user.username ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("username", true, true)}
          />
          <div className="w-full h-auto pt-2">
            {formik.touched.username && formik.errors.username && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-xs font-Inter-SemiBold text-[#F25341]"
                style={{ marginTop: "-32px" }}
              >
                {formik.errors.username}
              </motion.div>
            )}
          </div>
          {/* <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Genre"
          /> */}
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            name="website"
            defaultValue={user.website ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("website", true, true)}
            placeholder="Website link"
          />
          <input
            type="text"
            className="px-7 py-3 text-muted text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            name="country"
            defaultValue={user.country ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("country", true, true)}
            placeholder="Country"
          />
        </div>
        <div
          className="grid gap-6"
          style={{
            gridTemplateRows: "auto minmax(0,1fr)",
          }}
        >
          <input
            type="text"
            className="px-7 py-3 text-white text-sm placeholder:text-muted"
            style={{ backgroundColor: "#12161F" }}
            placeholder="uneditable_input@email.com*"
            defaultValue={user.email}
            disabled
          />
          <textarea
            className="px-[18px] py-3 text-muted text-sm placeholder:text-muted resize-none"
            style={{ backgroundColor: "#12161F" }}
            placeholder="Bio"
            defaultValue={user.bio ?? ""}
            name="bio"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("bio", true, true)}
          ></textarea>
        </div>
      </div>
      {hasLaunchedToken && (
        <>
          <div className="h-px bg-muted-50 mb-11" />
          <p className="font-medium text-base md:text-lg text-white mb-8">
            Artiste Details
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start mb-10">
            <input
              type="text"
              className="px-7 py-3 font-medium text-base md:text-sm text-white placeholder:text-muted"
              style={{ backgroundColor: "#12161F" }}
              placeholder="$DAVIDO *"
              value="$DAVIDO *"
            />
            <input
              type="text"
              className="px-7 py-4 text-muted placeholder:text-muted"
              style={{ backgroundColor: "#12161F" }}
              placeholder="Souncloud link"
            />
            <input
              type="text"
              className="px-7 py-4 text-muted placeholder:text-muted"
              style={{ backgroundColor: "#12161F" }}
              placeholder="Twitter link"
            />
            <div className="flex items-center">
              <input
                type="text"
                className="max-w-[50%] mr-12 px-7 py-3 font-medium text-sm text-white placeholder:text-muted"
                style={{ backgroundColor: "#12161F" }}
                placeholder="10%"
                value={"10%"}
              />
              <ToolTip
                title={
                  <p className="text-base font-medium">
                    <span className="mb-3">
                      When someone purchases your coin, a percentage of that
                      gets allocated to you as a founder reward.
                    </span>
                    <span className="mb-3">
                      A value of 0% means you get no money when someone buys,
                      whereas a value of 100% means that no one else can ever
                      get coins because 100% of every purchase goes to you.
                    </span>
                    <span>
                      Setting this value too high will discourage buyers from
                      ever purchasing your coin. It's a delicate balance, so
                      tread carefully or stick with the default.
                    </span>
                  </p>
                }
              >
                <HelpIcon className="cursor-pointer" />
              </ToolTip>
            </div>
          </div>
        </>
      )}
      <button
        className="py-[17px] text-white disabled:text-muted font-medium md:text-sm bg-gradient-ld disabled:bg-dark-800 mb-11 w-[48%] focus:outline-none"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? " Updating..." : " Update profile"}
      </button>
    </div>
  );
};

export default EditProfile;
