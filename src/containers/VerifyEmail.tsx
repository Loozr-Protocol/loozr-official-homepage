import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const push = useNavigate();

  const handleVerify = () => {
    console.log("Login");
    sessionStorage.setItem("isLoggedIn", "true");
    setTimeout(() => {
      push("/profile/create");
    }, 1000);
  };
  return (
    <div className="min-h-screen w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-4xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-xl text-white mb-8 font-medium max-w-[358px] mx-auto">
            Verification email has been sent to youremail@gmail.com
          </p>

          <p className="text-base font-medium text-muted max-w-[496px] mx-auto">
            Click the link in your email to verify you account. If you can’t
            find the email check your spam folder or{" "}
            <span className="text-loozr-purple" onClick={handleVerify}>
              click here to resend.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
