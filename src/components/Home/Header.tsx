export default function Header() {
  return (
    <>
      <div className="valign stateless-slide">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="caption center">
                <h1><span>Invest in</span> <span>artists.</span></h1>
                <p className="mt-10">
                  Share their success in cryptocurrencies on the Metaverse.
                </p>
                <a href="/" className="btn-curve btn-lit mt-20">
                  <span>Coming Soon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="stateless-bg"></div>
        <div className="social-icon">
          <a href="https://twitter.com/officialloozr" target="_blank" rel="noopener noreferrer"
          ><i className="fab fa-twitter"></i
          ></a>
          <a href="https://discord.gg/mm5mV8PHpq" target="_blank" rel="noopener noreferrer"
          ><img src="/img/discord.png" alt=""
            /></a>
          <a href="https://t.me/+Zi7-M7wMW6A4MjE0" target="_blank" rel="noopener noreferrer"
          ><i className="fab fa-telegram-plane"></i
          ></a>
          <a href="https://medium.com/@officialloozr" target="_blank" rel="noopener noreferrer"
          ><i className="fab fa-medium-m"></i
          ></a>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}