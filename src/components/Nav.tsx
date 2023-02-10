/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  
  const [tab, setTab] = React.useState(false)

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div id="block-avo-branding">
          <Link to="/" className="logo !ml-10 ">
            <img className="logo-light" src="/img/logo-light.png" alt="Home" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <a className="nav-link !font-medium " href="https://loozr-1.gitbook.io/docs/">
                LiteDoc
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link !font-medium " href="/product">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link !font-medium  " href="">
                Ecosystem
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link !font-medium " href="">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link !font-medium " href="">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link !font-medium " href="https://medium.com/@officialloozr">
                Blog
              </a>
            </li>
            <li className="nav-item relative w-[232px] ">
              <div 
                role="button"
                onClick={()=> setTab((prev) => !prev)}
                className="nav-link !font-medium   flex items-center " 
              >
                Join community
                <svg className={tab ? " ml-2 rotate-180 ": " ml-2 " } width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.103374 0.103374C0.228676 -0.0219278 0.424753 -0.0333189 0.562923 0.0692008L0.602508 0.103374L3.64706 3.14776L6.69161 0.103374C6.81691 -0.0219278 7.01299 -0.0333189 7.15116 0.0692008L7.19074 0.103374C7.31605 0.228676 7.32744 0.424753 7.22492 0.562923L7.19074 0.602508L3.89663 3.89663C3.77132 4.02193 3.57525 4.03332 3.43708 3.9308L3.39749 3.89663L0.103374 0.602508C-0.034458 0.464676 -0.034458 0.241206 0.103374 0.103374Z" fill="#D9D9D9"/>
                </svg>
              </div> 
              {tab && ( 
                <div style={{boxShadow: "10px 10px 30px 6px #000000CC"}} className=" font-semibold absolute w-[232px] z-20 top-14 py-8 bg-[#0C0F15] px-8  " >
                  <a onClick={()=> setTab(false)} target="_blank" href="https://t.me/officialloozr" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join on Twitter</a>
                  <a href="item" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join Telegram</a>
                  <a href="item" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join Discord</a> 
                  <a href="item" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join on Instagram</a>
                  <a href="item" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Follow on Tiktok</a>
                  <a href="item" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Watch Youtube</a> 
                </div>
              )}
              {tab && (
                <div className=" fixed inset-0 bg-black bg-opacity-30 z-10 "  onClick={()=> setTab(false)}   />
              )}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link !font-medium  nav-btn mr-0" to="/artistes/ecosystem">
                View Ecosystem
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;