import React from "react";

const Maintenance = () => {
  return (
    <div className="min-h-screen w-full h-full grid pt-16">
      <div className="flex flex-col items-center justify-center px-8 md:px-auto w-full max-w-5xl mx-auto text-white">
        <div
          className="bg-dark-800 text-center w-full py-16 px-7 md:px-[107px]"
          style={{ zoom: "85%" }}
        >
          <p className="text-2xl md:text-3xl mb-10 font-medium">
            SADLY, WE HAVE EXCEEDED THE TOTAL NUMBER OF 2K USERS FOR
            ALPHA-TESTING!!!
          </p>

          <p className="text-xl md:text-2xl font-medium text-muted">
            New users are unable to sign up. Please wait for the next version of
            Incentivized Testnet: Bolt1
          </p>
          <p className="text-xl md:text-2xl font-medium text-muted">
            Winners of the alpha-testers will be announced shortly for their
            participation and feedback.
          </p>
          <p className="text-xl md:text-2xl font-medium text-muted">
            Click here for more info about{" "}
            <a
              href="https://medium.com/@officialloozr/loozr-incentivized-testnet-roadmap-bd80c133b6f3"
              target="_blank"
              rel="noreferrer"
              className="text-loozr-purple"
            >
              Testnet Roadmap
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
