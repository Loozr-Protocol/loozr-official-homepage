import React, { useEffect, useRef } from "react";
import { useAccountNameCheckCallback } from "../state/user/hooks";
import { MIXER_ACCOUNT } from "../config/constants/index";

const AccountSetupInput = ({
  onChange,
  onBlur,
  onFocus,
  setResult,
  value,
  accountDomain,
  ...rest
}) => {
  const timerRef = useRef(null);

  const { nameCheckCallback } = useAccountNameCheckCallback();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onKeyUp = async () => {
    clearTimeout(timerRef.current);
    if(value.length < 1) return;
    const accountId = `${value}.${MIXER_ACCOUNT}`;
    timerRef.current = setTimeout(async () => {
      const isAvailable = await nameCheckCallback(accountId);
      setResult(isAvailable);
    }, 3000);
  };
  
  return (
    <div
      className="flex flex-row w-full md:w-[450px] between items-center"
      style={{ backgroundColor: "#12161F" }}
    >

      <div className=" relative w-full " > 
      <input
        type="text"
        onKeyUp={() => onKeyUp()}
        onKeyDown={() => clearTimeout(timerRef.current)}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        style={{paddingLeft: "30px"}}
        className="px-7 py-3 md:py-4 text-muted placeholder:text-muted relative z-20 h-[55px] md:h-[74px] flex-auto bg-transparent"
        {...rest}
      />

      <div className=" absolute top-[15px] md:top-[24px] flex left-[30px] right-7 overflow-x-hidden "> 
          <p className="text-[16.4px] text-transparent " >{value}</p>
          {value !== "" &&  
            <span className=" z-30 mt-[1px]  text-muted" >.lzr.testnet</span>
          }
        </div>  
      </div>
      {/* <span className="mr-8 text-slate-500">{accountDomain}</span> */}
    </div>
  );
};

export default AccountSetupInput;
