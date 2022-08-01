import React from "react";

const VerifyEmail = () => {
  return (
    <div className="min-h-screen w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-5xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-2xl md:text-3xl mb-10 font-medium">
            Verification email has been sent to youremail@gmail.com
          </p>

          <p className="text-xl md:text-2xl font-medium text-muted">
            Click the link in your email to verify you account. If you can’t
            find the email check your spam folder or{" "}
            <span className="text-loozr-purple">click here to resend.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
