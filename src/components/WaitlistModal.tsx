import ModalDialog from "./Modal";

export default function WaitlistModal() {
  const style = { maxHeight: "600px", objectFit: "unset"} as React.CSSProperties;
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
                <form className="mt-30">
                  <div className="form-wrap">
                    <select>
                      <option value="" selected>
                        Choose Category
                      </option>
                      <option value="Artist">Artist</option>
                      <option value="Listener">Listener</option>
                    </select>
                  </div>
                  <div className="form-wrap">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-wrap mt-40">
                    <button type="button" className="button w-100 d-block">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </ModalDialog>
    </>
  );
}
