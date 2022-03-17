export default function AboutSection() {
  return (
    <div>
      <div id="block-nvblockaboutindex" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 img-mons">
              <div className="img1 wow imago" data-wow-delay=".5s">
                <img src="/img/intro.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="content">
                <div className="pl-0 container">
                  <div className="sec-head custom-font mb-10">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">what is</h6>
                    <h3 className="wow" data-splitting>Loozr?</h3>
                    <span className="tbg">Loozr</span>
                  </div>
                </div>
                <div className="clearfix"></div>

                <h3 className="main-title wow">
                  The decentralized music streaming & investment platform on
                  Web 3.0
                </h3>
                <p className="wow txt">
                  Loozr brings DeFi and trading to the music industry.
It enables creators to tokenize their name/brand, content, and
songs; allowing fans to buy, sell, trade and promote these tokens directly 
in real time on the blockchain while also sharing streaming earnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
