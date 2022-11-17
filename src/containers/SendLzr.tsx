import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { httpError } from "../utils/httpHelper";
import { toast } from "react-toastify";
import { MIXER_ACCOUNT, TOAST_OPTIONS, LZR_IN_USD } from "../config/constants";
import { useLZRTransferCallback } from "../utils/calls/useLZRTransferCallback";
import { useSearchUserCallback } from "../state/user/hooks/useAccount"; 
import { usePollLZRBalance } from "../state/wallet/hooks/fetchBalance";
import { useSelector } from "react-redux";
import { AppState } from "../state/store";
import { formatNumber, getFullDisplayBalance } from "../utils/formatBalance";
import Photo from "../components/Photo";

const SendLzr = () => {
  const [isLoading, setLoading] = useState(false);
  const { handleLZRTransfer } = useLZRTransferCallback();
  const [max, setMax] = useState(false);

  const formSchema = yup.object({
    amount: yup
      .number(),
    account_id: yup
      .string()
      .required("Enter account id")
  });

  const formik = useFormik({
    initialValues: { account_id: "", amount: null },
    validationSchema: formSchema,
    onSubmit: () => {},
  }); 
  
  const user = useSelector((state: AppState) => state.user.userInfo);
  const lzrAccountId = `${user?.accountId}.${MIXER_ACCOUNT}`;
  const balanceResult = usePollLZRBalance(lzrAccountId);
  const balanceBN = getFullDisplayBalance(balanceResult);
  
  const balanceInLzr = formatNumber(Number(balanceBN));
  const [data, setData] = React.useState([] as any)
  const { getSearchUser } = useSearchUserCallback(); 
  const [searchValue, setSearchValue] = React.useState("")

  const OnchangeAcount = async (item: any)=>{  
    setSearchValue(item) 
    formik.setFieldValue("account_id", item)
    const result = await getSearchUser(item); 
    setData(result)
  } 

  const OnchangeHandler =(item: any)=> {   
    if( Number(balanceInLzr) > Number(item) ){  
      formik.setFieldValue("amount", item)
    }else{
      setMax(true)
      const t1 = setTimeout(() => { 
        setMax(false)
        clearTimeout(t1); 
    }, 2000); 
    }
  }

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
  
  const ClickHandler =(item: any)=> {
    formik.setFieldValue("account_id", item)
    setSearchValue("")
  }

  return (
    <div className="w-full mt-16 md:mt-0">
      <p className="text-white text-2xl font-semibold mb-12">Send LZR</p>
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-[490px]">
        <div className=" md:w-[350px] mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Enter account_id to send LZR to:
          </p>
          <div className=" w-[350px] relative " > 
            <input
              type="text"
              name="account_id"
              autoComplete="off"
              value={formik.values.account_id}
              onChange={(e)=> OnchangeAcount(e.target.value)}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldTouched("account_id", true, true)}
              className=" h-[60px] w-full px-6 md:w-[350px] bg-dark-800 text-sm placeholder:text-muted text-white"
              placeholder="Search by name"
              style={{ background: "#12161F" }}
            />
            {searchValue && ( 
              <div className=" absolute bg-[#12161F] top-[61px] overflow-y-auto max-h-[250px] z-[120] py-2 mt-2 rounded-lg px-4 w-full  " > 
                {data.map((item: any, index: any) => { 

                  const domainName = item.account_id+"."+MIXER_ACCOUNT

                  return(
                    <div key={index} onClick={() => ClickHandler(item.account_id)} className=' w-full cursor-pointer flex my-3 items-center ' > 
                      <Photo
                        alt=""
                        className="object-contain w-10 h-10 rounded-full "
                        style={{ border: "3px solid #141922" }}
                      />
                      {/* <div className=' w-10 h-10 rounded-full bg-red-600 border-[3px] border-[#222A3B] ' /> */}
                      <div className=' ml-3 ' >
                        <div className=' flex -mt-1 items-center ' >
                          <p className=' text-[13px] font-semibold ' > {item?.account_id}</p>
                        </div>
                        <div className=' flex -mt-1 items-center ' >
                          <p className=' text-[11px] font-semibold text-[#536079] ' >{item?.email}</p> 
                        </div>
                      </div> 
                    </div> 
                  )
                })} 
              </div>
            )}
          </div>  
          <p className="helper-text">
            Example account id is <strong>example.{MIXER_ACCOUNT}</strong>
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
            type="number"
            name="amount"
            onKeyPress={(e) => {
              if (e.key === "e" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
            value={formik.values.amount}
            onChange={(e)=> OnchangeHandler(e.target.value)}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("amount", true, true)}
            className=" h-[60px] w-full px-6 md:w-[350px] bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="0.00"
            style={{ background: "#12161F" }}
          />
        </div> 
        {max && ( 
          <div className="w-full h-auto pt-2"> 
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-35px" }}
            >
              Amount must be less than your balance
            </motion.div> 
          </div>
        )}
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
          className=" h-[60px] text-white disabled:text-muted font-medium md:w-[350px] text-sm bg-gradient-ld disabled:bg-dark-800 mb-24 md:mb-11 w-full sm:w-80 focus:outline-none"
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
