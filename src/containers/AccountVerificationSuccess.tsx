import React from "react";
import { useNavigate } from "react-router-dom";

const AccountVerificationSuccess = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/login", { replace: true });
  }, 8000);

  return (
    <div className="min-h-screen w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-5xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-2xl md:text-3xl mb-10 font-medium">
            Account verification Successful
          </p>

          <p className="text-xl md:text-2xl font-medium text-muted">
            Your account has been verified. You will be redirected to the login
            screen -
            <span
              onClick={() => navigate("/login", { replace: true })}
              className="text-loozr-purple"
            >
              Can't wait
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationSuccess;
