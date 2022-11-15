import React, { useEffect, useRef, useState } from "react";
import { useAccountNameCheckCallback } from "../state/user/hooks";
import { MIXER_ACCOUNT } from "../config/constants/index";

const AccountSetupInput = ({
  onChange,
  onBlur,
  onFocus,
  setResult,
  // value,
  accountDomain,
  ...rest
}) => {
  const timerRef = useRef(null);

  const { nameCheckCallback } = useAccountNameCheckCallback();
  const [text, setText] = useState("")

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onKeyUp = async () => { 
    clearTimeout(timerRef.current);
    if(text.length < 1) return;
    const accountId = `${text}.${MIXER_ACCOUNT}`;
    timerRef.current = setTimeout(async () => {
      const isAvailable = await nameCheckCallback(accountId);
      setResult(isAvailable);
    }, 3000);
  };

  const OnChangeHandler =(item: any)=>{

    let NewValue = item.replace(/[^a-zA-Z0-9_]/g,'') 
    setText(NewValue)
    onChange(NewValue)
  }
  
  return (
    <div
      className="flex flex-row w-full md:w-[450px] between items-center"
      style={{ backgroundColor: "#12161F" }}
    >

      <div className=" relative w-full " > 
      <input 
        type="text" 
        onKeyUp={() => onKeyUp()}
        value={text}
        onKeyDown={() => clearTimeout(timerRef.current)}
        onChange={(e)=>OnChangeHandler(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        style={{paddingLeft: "30px"}}
        className="px-7 py-3 md:py-4 text-muted lower placeholder:text-muted relative z-20 h-[55px] md:h-[60px] flex-auto bg-transparent"
        {...rest}
      />

      <div className=" absolute top-[15px] md:top-[18px] flex left-[16px] right-7 overflow-x-hidden "> 
          {/* <p className="text-[16.26px] text-transparent " >{(text).toUpperCase()}</p> */}
          {text !== "" &&  
            <span className=" z-30 mt-[1px]  text-muted" >$</span>
          }
        </div>  
      </div>
      {/* <span className="mr-8 text-slate-500">{accountDomain}</span> */}
    </div>
  );
};

export default AccountSetupInput;
