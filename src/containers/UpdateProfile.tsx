import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { ReactComponent as HelpIcon } from "../assets/icons/help.svg";
import Edit from "../assets/Edit.png";
import ToolTip from "../components/Tooltip";
import { AppState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { MIXER_ACCOUNT, TOAST_OPTIONS } from "../config/constants";
import { httpError } from "../utils/httpHelper";
import { useUpdateProfileCallback } from "../state/user/hooks/useAccount";
import { toast } from "react-toastify";
import { updateProfile } from "../state/user/userReducer";
import Photo from "../components/Photo";
import { jsonToUser } from "../utils";
import { MenuItem, Select } from "@mui/material";

export default function UpdateProfile() {
    const [isLoading, setLoading] = useState(false);
    const [image, setImage] = React.useState('');  
    const [selectedImage, setSelectedImage] = React.useState('');  
    const dispatch = useDispatch();
    const { handleUpdateProfile } = useUpdateProfileCallback();
    const user = useSelector((state: AppState) => state.user.userInfo);
    const lzrAccountId = `${user.accountId}.${MIXER_ACCOUNT}`;
  
    const profileEditSchema = yup.object({
      username: yup.string().required("Please enter full name").nullable(),
      website: yup.string(),
      country: yup.string(),
      bio: yup.string(),
    });
  
    const formik = useFormik({
      initialValues: {
        username: user.username ?? "",
        website: user.website ?? "",
        twitterLink: user.twitterLink ?? "", 
        soundCloudLink: user.soundCloudLink ?? "",
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
      if (!formik.dirty) {
        return;
      } else if (!formik.isValid) {
        return;
      }
      setLoading(true);
      try {
        const result = await handleUpdateProfile(formik.values);
        const user = jsonToUser(result);
        setLoading(false);
        dispatch(updateProfile(user));
        toast.success("Profile updated!", TOAST_OPTIONS);
      } catch (err: any) {
        setLoading(false);
        httpError(err);
      }
    };
  
    const handleImageChange = (e: any ) => {
  
      const selected = e.target.files[0]; 
      const TYPES = ["image/png", "image/jpg", "image/jpeg" ];        
      if (selected && TYPES.includes(selected.type)) {
          setImage(selected)
          const reader: any = new FileReader();
          reader.onloadend= () => {  
            setSelectedImage(reader.result)
          }
          reader.readAsDataURL(selected)
      } else {
          console.log('Error')
      }  
  
      // setSelectedImage(selected)
    } 

    const genres = ["Acoustic", "Ambient", "Afro", "Amapiano", "Blues", "Country", "Classical", "Electric", "Emo", "Folk", "Hardcore", "Hip-hop", "Indie", "Jazz", "Latin", "Metal", "Pop", "Pop punk", "Punk", "Raggae", "R&B", "Rock", "Soul", "World"]
  
  return (
    <div className=" w-full flex flex-col items-center pt-14 " > 
        <div className=" max-w-[550px] mt-[70px] md:mt-0">
            <p className="font-medium text-base md:text-2xl text-white">
                Update your artist profile
            </p>
            <p className=" text-[13px] text-[#536079] font-medium mt-[4px] leading-tight md:w-[429px] mb-4" >Provide proof of your musical background to validate
your status as an official musician.</p>
            <div className="flex items-center mb-8">
                <div className="relative  w-[90px] h-[90px] ">
                {!selectedImage && ( 
                    <Photo
                        alt="" 
                        src={selectedImage}
                        className="rounded-full w-[90px] h-[90px] object-cover"
                        style={{ border: "8px solid #141922" }}
                    />
                )}
                {selectedImage && ( 
                    <img src={selectedImage} 
                    style={{ border: "8px solid #141922" }} className="rounded-full w-[90px] h-[90px] object-cover " /> 
                )}
                <label className=" w-[33px] h-[33px] cursor-pointer absolute -bottom-2 -right-1 rounded-full bg-[#141922] flex justify-center items-center " > 
                    <img src={Edit} className=" w-[15px] h-[15px] " alt="Edit" /> 
                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                </label>
                </div>
                <div className=" ml-3 " >
                    <p className="text-lg text-white font-semibold ">
                        {lzrAccountId}
                    </p>
                    <label className="text-[#FFCD43] cursor-pointer text-[13px] font-medium">
                        change profile picture
                        <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-start mb-10">
                <div className=" flex flex-col ">
                    <input
                        type="text"
                        className="px-7 py-2 h-11 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        placeholder="Enter full name"
                        name="username"
                        defaultValue={user.username ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("username", true, true)}
                    /> 
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <select 
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="website" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("website", true, true)}
                        placeholder="Website link"
                    >
                        <option value="" >Genre</option>
                        {genres.map((item: any)=> {
                            return(
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select> 
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <input
                        type="text"
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="website"
                        defaultValue={user.website ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("website", true, true)}
                        placeholder="Website link"
                    />
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <input
                        type="text"
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="website"
                        defaultValue={user.website ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("website", true, true)}
                        placeholder="Twitter link"
                    />
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <input
                        type="text"
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="website"
                        defaultValue={user.website ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("website", true, true)}
                        placeholder="Spotify link"
                    />
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <select 
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="country" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("country", true, true)}
                        placeholder="Country"
                    >
                        <option>Country</option>
                    </select>
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                </div>
                <div
                    className="flex flex-col"
                    style={{
                        gridTemplateRows: "auto minmax(0,1fr)",
                    }}
                    >
                    <input
                        type="text"
                        className="px-7 py-2 h-11 text-white text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        placeholder="uneditable_input@email.com*"
                        defaultValue={user.email}
                        disabled
                    /> 
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <textarea
                        className="px-[18px] h-[105px] py-3 mt-2 text-muted text-[13px] placeholder:text-muted resize-none"
                        style={{ backgroundColor: "#12161F" }}
                        placeholder="Bio"
                        defaultValue={user.bio ?? ""}
                        name="bio"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("bio", true, true)}
                    ></textarea>
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <input
                        type="text"
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="website"
                        defaultValue={user.website ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("website", true, true)}
                        placeholder="Instagram link"
                    />
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                    <input
                        type="text"
                        className="px-7 py-2 h-11 mt-2 text-muted text-[13px] placeholder:text-muted"
                        style={{ backgroundColor: "#12161F" }}
                        name="website"
                        defaultValue={user.website ?? ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched("website", true, true)}
                        placeholder="Souncloud link"
                    />
                    <div className=" w-full h-auto pt-2" >
                        {formik.touched.username && formik.errors.username && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#F25341]"
                            // style={{ marginTop: "-32px" }}
                        >
                            {formik.errors.username}
                        </motion.div>
                        )}  
                    </div>
                </div>
            </div> 
            <button
                className="py-[17px] text-white disabled:text-muted font-medium md:text-[13px] bg-gradient-ld disabled:bg-dark-800 mb-11 w-[48%] focus:outline-none"
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? " Updating..." : " Update profile"}
            </button>
        </div>
    </div>
  )
}
