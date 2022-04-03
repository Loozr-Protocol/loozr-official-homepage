import { useEffect } from "react";

export default function LoozrVrz() {
  useEffect(() => {
    const lzrVerzElement = document.getElementById("lzrVerz");
    lzrVerzElement.scrollIntoView({ behavior: "smooth" });
  })
  
  return (
    <>
      <div
        id="block-nvblockaboutindex"
        className="about section-padding pt-5 pb-0"
      >
        <div className="container">
          <div className="row align-items-center" id="lzrVerz">
            <div className="col-lg-5 img-mons">
              <div className="img1 wow imago" data-wow-delay=".5s">
                <img src="/img/loozrvrz.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="content">
                <div className="pl-0 container">
                  <div className="sec-head custom-font mb-10">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">
                      LoozrVrze
                    </h6>
                  </div>
                </div>
                <div className="clearfix"></div>

                <h3 className="main-title wow">
                  Experience music, festivals, concerts, tours, NFT preview and
                  sales on the Metaverse.
                </h3>
                <p className="wow txt">
                  Unleash imagination, hang out with celebrities, friends, fans,
                  and immerse yourself in the virtual world - Web Player Only.
                </p>
                <a
                  href="https://yobozorle.github.io/loozr_meta/"
                  className="button btn-primary mt-20"
                >
                  Launch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}