export default function Header() {
  return (
    <>
      <div className="d-flex align-items-center hero-head">
        <div className="overlay"></div>
        <video
          className="fullscreen"
          src="/vid-0399482.mp4"
          playsInline
          autoPlay
          muted
          loop
        ></video>
        <div className="container">
          <div className="mt-100 hero-content">
            <div className="d-flex">
              <div className="col-12 col-md-7">
                <h1>
                  Invest
                  <br />
                  in artists.
                </h1>
                <p className="mt-10">
                  Share their success in cryptocurrencies on the Metaverse.
                </p>
                <div className="mt-20">
                  <a
                    href="https://loozr-1.gitbook.io/docs/"
                    className="button btn-lit mr-3"
                  >
                    <span>Learn more</span>
                  </a>
                  <a href="/" className="button btn-primary btn-lit">
                    <span>Join Waitlist</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="social-icon">
            <a
              href="https://twitter.com/officialloozr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://discord.gg/mm5mV8PHpq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/discord.png" alt="" />
            </a>
            <a
              href="https://t.me/+Zi7-M7wMW6A4MjE0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://medium.com/@officialloozr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium-m"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="container">
        <div className="d-flex mt-50 powered-section">
          <span>Powered by </span>
          <img src="/img/algo.png" alt="algo" />
          <img src="/img/unity.png" alt="unity" />
        </div>
      </div>
    </>
  );
}