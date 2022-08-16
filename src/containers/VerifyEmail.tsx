import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";
import { AppState } from "../state/store";
import { resendVerificationMail } from "../state/user/userActions";

const VerifyEmail = () => {
  let { email } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.user.loading);
  const success = useSelector((state: AppState) => state.user.success);

  const handleResend = () => {
    dispatch(resendVerificationMail(email));
  };

  useEffect(() => {
    if (success)
      toast.success(
        "Account verification link has been sent to your email address!",
        TOAST_OPTIONS
      );
  }, [success]);

  return (
    <div className="min-h-screen w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-4xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-xl text-white mb-8 font-medium max-w-[358px] mx-auto">
            Verification email has been sent to {email}
          </p>

          <p className="text-base font-medium text-muted max-w-[496px] mx-auto">
            Click the link in your email to verify you account. If you can’t
            find the email check your spam folder or{" "}
            {!isLoading ? (
              <span className="text-loozr-purple" onClick={handleResend}>
                click here to resend.
              </span>
            ) : (
              <span className="text-loozr-purple">Re-sending...</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
