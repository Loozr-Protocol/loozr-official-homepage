export default function Community() {
  return (
    <>
      <div
        id="block-nvblockcalltoaction"
        className="call-action section-padding sub-bgxxx bg-img bg-no-repeat block-bg"
        data-bg-color="#000000"
        data-bg-image="assets/img/background/pattern.png"
        data-bg-position="top right"
        data-bg-size="cover"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <h6 className="wow" data-splitting>Join Community</h6>
                <h2 className="wow custom-font" data-splitting>
                  Ready <b>Get Started</b>.
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 valign">
              <a
                href="https://discord.gg/mm5mV8PHpq"
                target="_blank"
                className="btn-curve btn-lit nv-btn-l wow fadeInUp"
                data-wow-delay=".5s" rel="noreferrer"
              ><span>Join Discord</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}