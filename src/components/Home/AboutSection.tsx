export default function AboutSection() {
  const tbgStyle = {
    bottom: "100px",
    "fontSize": "14vw",
  };
  return (
    <div className=" px-20 " >
      <div id="block-nvblockaboutindex" className="about flex items-center mt-30">
        <div className="container pt-32 ">
          <div className="sec-head mb-3 custom-font d-flex flex-column align-items-center">
            <div className=" pl-8 max-w-[545px] ">
              <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
                THE FIRST SOCIAL MUSIC LAYER OF WEB3.0
              </h6> 
              <p className="main-title !font-bold !text-white mt-8 !leading-[1.1] !text-4xl  wow">
                Where DeFi, GameFi & SocialFi Meet <br/>Content Creators.
              </p> 
              <p className="wow txt text-xl !font-medium ">
                It enables creators to tokenize their name/brand, content, and songs; allowing fans to buy, sell, trade and promote these tokens directly in real time on the blockchain while also sharing streaming earnings.
                <br/>
                <span className="mt-2" >
                Loozr is currently paving the way for the new creator market and setting the pace for global adoption of Web3, through the love of music.
                </span>
              </p>
            </div>
            <span className="tbg" style={tbgStyle}>
              Welcome
            </span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className=" lg:w-[60%]  ">
          <div className="mx-auto  ">
            <div className="img1 wow imago" data-wow-delay=".5s">
              <img src="/img/aboutus.png" className=" w-[80%] object-contain "  alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
