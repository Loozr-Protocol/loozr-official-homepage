import React from "react";

const SendLzr = () => {
  return (
    <div className="w-full mt-16 md:mt-0">
      <p className="text-white text-2xl font-semibold mb-12">Send LZR</p>
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-[490px]">
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Enter username or fullname to send LZR to:
          </p>
          <input
            type="text"
            className="py-8 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="Search by name"
            style={{ background: "#12161F" }}
          />
        </div>
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">
            Amount of LZR to send:
          </p>
          <input
            type="text"
            className="py-8 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="0.00"
            style={{ background: "#12161F" }}
          />
        </div>
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">Network fee:</p>
          <input
            type="text"
            className="py-8 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="0.00  (≈ $0.0000 USD)"
            style={{ background: "#12161F" }}
          />
        </div>
        <div className="w-full mb-8">
          <p className="text-sm font-medium text-muted mb-5">Total: </p>
          <input
            type="text"
            className="py-8 px-11 bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="0.00  (≈ $0.0000 USD)"
            style={{ background: "#12161F" }}
          />
        </div>
        <button className="py-4 text-white disabled:text-muted font-medium text-sm bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none">
          Send Lzr
        </button>
      </div>
    </div>
  );
};

export default SendLzr;
