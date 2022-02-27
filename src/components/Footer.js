export default function Footer() {
  return (
    <>
      <footer className="footer-half sub-bg section-padding pb-0 pt-20">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cont">
                <div id="block-nvblockfollowus" className="social-icon">
                  <h6 className="custom-font stit simple-btn">Follow Us</h6>
                  <div className="social">
                    <a
                      href="https://twitter.com/officialloozr"
                      target="_blank" rel="noopener noreferrer"
                      className="icon"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a
                      href="https://discord.gg/rJZJGhRf"
                      target="_blank" rel="noopener noreferrer"
                      className="icon"
                    ><img src="/img/discord.png" alt="discord"
                      /></a>
                    <a
                      href="https://t.me/+Zi7-M7wMW6A4MjE0"
                      target="_blank" rel="noopener noreferrer"
                      className="icon"
                    ><i className="fab fa-telegram-plane"></i
                    ></a>
                    <a
                      href="https://medium.com/@officialloozr"
                      target="_blank" rel="noopener noreferrer"
                      className="icon"
                    ><i className="fab fa-medium-m"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights text-center">
            <p>&copy; 2022 Loozr.</p>
          </div>
        </div>
      </footer>
    </>
  );
}