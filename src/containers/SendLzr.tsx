import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { httpError } from "../utils/httpHelper";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";
import { useLZRTransferCallback } from "../utils/calls/useLZRTransferCallback";

const SendLzr = () => {
  const [isLoading, setLoading] = useState(false);
  const { handleLZRTransfer } = useLZRTransferCallback();

  const formSchema = yup.object({
    amount: yup
      .number(),
    account_id: yup
      .string()
      .required("Enter account id")
  });

  const formik = useFormik({
    initialValues: { account_id: "", amount: 0 },
    validationSchema: formSchema,
    onSubmit: () => {},
  });

  const handleSubmit = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }
    setLoading(true);
    try {
      await handleLZRTransfer(formik.values);
      setLoading(false);
      toast.success("Funds sent!", TOAST_OPTIONS);
    } catch (err: any) {
      setLoading(false);
      httpError(err);
    }
  };
  
  return (
    <div className="w-full mt-16 md:mt-0">
      <p className="text-white text-2xl font-semibold mb-12">Send LZR</p>
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-[490px]">
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Enter account_id to send LZR to:
          </p>
          <input
            type="text"
            name="account_id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("account_id", true, true)}
            className="py-8 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="Search by name"
            style={{ background: "#12161F" }}
          />
          <p className="helper-text">
            Example account id is <strong>example.loozr.near</strong>
          </p>
        </div>
        <div className="w-full h-auto pt-2">
          {formik.touched.account_id && formik.errors.account_id && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-42px" }}
            >
              {formik.errors.account_id}
            </motion.div>
          )}
        </div>
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Amount of LZR to send:
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
              style={{ marginTop: "-42px" }}
            >
              {formik.errors.amount}
            </motion.div>
          )}
        </div>
        <button
          className="py-4 text-white disabled:text-muted font-medium text-sm bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Lzr"}
        </button>
      </div>
    </div>
  );
};

export default SendLzr;
