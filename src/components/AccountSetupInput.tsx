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
      className="flex flex-row between items-center"
      style={{ backgroundColor: "#12161F" }}
    >
      <input
        type="text"
        onKeyUp={() => onKeyUp()}
        onKeyDown={() => clearTimeout(timerRef.current)}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className="px-7 py-4 text-muted placeholder:text-muted flex-auto bg-transparent"
        {...rest}
      />
      <span className="mr-8 text-slate-500">{accountDomain}</span>
    </div>
  );
};

export default AccountSetupInput;
