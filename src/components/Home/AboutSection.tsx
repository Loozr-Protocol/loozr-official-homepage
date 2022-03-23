export default function AboutSection() {
  const tbgStyle = {
    bottom: "100px",
    "font-size": "14vw",
  };
  return (
    <div>
      <div id="block-nvblockaboutindex" className="about section-padding mt-30">
        <div className="container">
          <div className="sec-head mb-3 custom-font d-flex flex-column align-items-center">
            <div className="content col-md-6">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                WHAT’S LOOZR?
              </h6>
              <h3 className="main-title wow">
                The decentralized music streaming & investment platform on Web
                3.0
              </h3>
              <p className="wow txt">
                Loozr brings DeFi and trading to the music industry. It enables
                creators to tokenize their name/brand, content, and songs;
                allowing fans to buy, sell, trade and promote these tokens
                directly in real time on the blockchain while also sharing
                streaming earnings.
              </p>
            </div>
            <span className="tbg" style={tbgStyle}>
              About
            </span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="container d-flex flex-column align-items-center">
          <div className="col-md-5 img-mons">
            <div className="img1 wow imago" data-wow-delay=".5s">
              <img src="/img/intro.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
