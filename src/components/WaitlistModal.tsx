import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ModalDialog from "./Modal";
import { gsap } from "gsap";

export default function WaitlistModal() {
  const style = {
    maxHeight: "600px",
    objectFit: "unset",
  } as React.CSSProperties;
  const successIcon = useRef();
  const [category, setCategory] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isSucccess, setIsSucccess] = useState(false);
  const [isLoading, setRequestStatus] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmailAddress(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    if (isSucccess) {
      gsap.fromTo(
        successIcon.current,
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        },
        {
          scale: 1,
          yoyo: true,
          repeat: 2,
          duration: 0.9,
          stagger: 0.1,
        }
      );
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSucccess(true);
    if (!!category && !!emailAddress) {
      setRequestStatus(true);
      try {
        await axios.post("/register-whitelist", { category, emailAddress });
        setRequestStatus(false);
        setIsSucccess(true);
        setCategory("");
        setEmailAddress("");
      } catch (err) {
        console.log(err);
        setRequestStatus(false);
      }
    }
  };

  const successView = (
    <div className="d-flex align-items-center justify-content-center form-success-wrapper">
      <span
        ref={successIcon}
        className="fa fa-check-circle success-icon"
      ></span>
    </div>
  );

  const formView = (
    <form onSubmit={handleSubmit} className="mt-30">
      <div className="form-wrap">
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Choose Category</option>
          <option value="Artist">Artist</option>
          <option value="Listener">Listener</option>
        </select>
      </div>
      <div className="form-wrap">
        <input
          type="email"
          value={emailAddress}
          onChange={handleEmailChange}
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-wrap mt-40">
        <button
          type="submit"
          className="button w-100 d-block"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="fa fa-spin fa-spinner"></span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </div>
    </form>
  );

  return (
    <>
      <ModalDialog modalName="waitlistDialog">
        <div className="section-padding pt-5 pb-0">
          <div className="container">
            <div className="row justify-content-center align-items-end">
              <div className="d-none d-md-block col-md-5 col-lg-4 img-mons">
                <div className="img1">
                  <img src="/img/waitlist-xsh.png" style={style} alt="" />
                </div>
              </div>
              <div className="col-md-5 offset-md-1 col-lg-5 offset-lg-1">
                <div className="content">
                  <div className="pl-0 container">
                    <div className="sec-head custom-font mb-10">
                      <h6>JOIN WAITLIST</h6>
                    </div>
                  </div>
                  <div className="clearfix"></div>

                  <h3 className="main-title">
                    Loozr is coming! Request early access to our beta and be
                    among the first.
                  </h3>
                  <p className="txt">
                    Indicate below whether you are an artist or a listener,
                    provide your email address, and we will take it from there.
                  </p>
                </div>
                {isSucccess ? successView : formView}
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </ModalDialog>
    </>
  );
}
