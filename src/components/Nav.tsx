/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody, 
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react' 

function Nav() {
  
  const [tab, setTab] = React.useState(false)
  const [tab2, setTab2] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div id="block-avo-branding">
          <Link to="/" className="logo lg:!ml-10 ">
            <img className="logo-light" src="/img/logo-light.png" alt="Home" />
          </Link>
        </div>
        <button
          className="navbar-toggler" 
          onClick={()=> onOpen()}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse lg:block hidden " id="navbarSupportedContent">
          <ul className=" flex md:flex-row flex-col items-center !text-white gap-7 md:ml-auto">
            {/* <li className="nav-item">
              <a className="nav-link !font-medium " href="https://loozr-1.gitbook.io/docs/">
                LiteDoc
              </a>
            </li> */}
            <li className="nav-item">
              <a className="txt text-[14px] !font-medium  " href="/product">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="txt text-[14px] !font-medium " target="_blank" href="https://docs.loozr.io/infrastructure/loozr-ecosystem">
                Ecosystem
              </a>
            </li>
            <li className="nav-item">
              <a className="txt text-[14px] !font-medium  " target="_blank" href="https://docs.loozr.io/infrastructure/loozr-applications">
                Applications
              </a>
            </li>
            <li className="nav-item relative ">
              <div 
                role="button"
                onClick={()=> setTab2((prev) => !prev)}
                className="txt text-[14px] !font-medium mt-[3px]  flex items-center " 
              >
                About
                <svg className={tab ? " ml-2 rotate-180 ": " ml-2 " } width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.103374 0.103374C0.228676 -0.0219278 0.424753 -0.0333189 0.562923 0.0692008L0.602508 0.103374L3.64706 3.14776L6.69161 0.103374C6.81691 -0.0219278 7.01299 -0.0333189 7.15116 0.0692008L7.19074 0.103374C7.31605 0.228676 7.32744 0.424753 7.22492 0.562923L7.19074 0.602508L3.89663 3.89663C3.77132 4.02193 3.57525 4.03332 3.43708 3.9308L3.39749 3.89663L0.103374 0.602508C-0.034458 0.464676 -0.034458 0.241206 0.103374 0.103374Z" fill="#D9D9D9"/>
                </svg>
              </div> 
              {tab2 && ( 
                <div  style={{boxShadow: "10px 10px 30px 6px #000000CC"}} className=" font-semibold md:absolute md:w-[232px] z-20 top-14 py-8 bg-[#0C0F15] px-8  " > 
                  <a onClick={()=> setTab2(false)} target="_blank" href="https://docs.loozr.io/" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >LiteDOC</a>
                  <a onClick={()=> setTab2(false)} target="_blank" href="#https://docs.loozr.io/tokenomics" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Tokenomics</a> 
                  <a onClick={()=> setTab2(false)} target="_blank" href="https://docs.loozr.io/roadmap" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Roadmap</a>
                  <a onClick={()=> setTab2(false)} target="_blank" href="https://docs.loozr.io/team" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Team</a> 
                </div>
              )}
              {tab2 && (
                <div className=" fixed inset-0 bg-black bg-opacity-30 z-10 "  onClick={()=> setTab2(false)}   />
              )}
            </li>
            <li className="nav-item">
              <a className="txt text-[14px] !font-medium  " href="https://medium.com/@officialloozr">
                Blog
              </a>
            </li>
            <li className="nav-item relative w-[232px] ">
              <div 
                role="button"
                onClick={()=> setTab((prev) => !prev)}
                className="txt text-[14px] !font-medium mt-[3px]  flex items-center " 
              >
                Join community
                <svg className={tab ? " ml-2 rotate-180 ": " ml-2 " } width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.103374 0.103374C0.228676 -0.0219278 0.424753 -0.0333189 0.562923 0.0692008L0.602508 0.103374L3.64706 3.14776L6.69161 0.103374C6.81691 -0.0219278 7.01299 -0.0333189 7.15116 0.0692008L7.19074 0.103374C7.31605 0.228676 7.32744 0.424753 7.22492 0.562923L7.19074 0.602508L3.89663 3.89663C3.77132 4.02193 3.57525 4.03332 3.43708 3.9308L3.39749 3.89663L0.103374 0.602508C-0.034458 0.464676 -0.034458 0.241206 0.103374 0.103374Z" fill="#D9D9D9"/>
                </svg>
              </div> 
              {tab && ( 
                <div style={{boxShadow: "10px 10px 30px 6px #000000CC"}} className=" font-semibold md:absolute md:w-[232px] z-20 top-14 py-8 bg-[#0C0F15] px-8  " >
                  <a onClick={()=> setTab(false)} target="_blank" href="https://twitter.com/officialloozr" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join on Twitter</a>
                  <a onClick={()=> setTab(false)} target="_blank" href="https://t.me/officialloozr" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join Telegram</a>
                  <a onClick={()=> setTab(false)} target="_blank" href="https://discord.gg/loozr" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join Discord</a> 
                  <a onClick={()=> setTab(false)} target="_blank" href="https://www.instagram.com/officialloozr/" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Join on Instagram</a>
                  <a onClick={()=> setTab(false)} target="_blank" href="https://www.tiktok.com/@officialloozr" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Follow on Tiktok</a>
                  <a onClick={()=> setTab(false)} target="_blank" href="https://www.youtube.com/@loozr_" className=" text-white text-sm w-full border-b border-[#5360791A] flex hover:justify-center justify-center py-3 outline-none " >Watch Youtube</a> 
                </div>
              )}
              {tab && (
                <div className=" fixed inset-0 bg-black bg-opacity-30 z-10 "  onClick={()=> setTab(false)}   />
              )}
            </li>
            
            <Drawer onClose={onClose} isOpen={isOpen} size="full">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton /> 
                <DrawerBody style={{backgroundColor: "#0c0f15"}} >
                  <div className=" w-full gap-y-4 flex flex-col !text-white px-6 pt-14 " > 
                    
                      <a className="txt text-[14px] !font-medium  " href="/product">
                        Products
                      </a>
                    
                    
                      <a className="txt text-[14px] !font-medium   " href="">
                        Ecosystem
                      </a>
                    
                    
                      <a className="txt text-[14px] !font-medium  " href="">
                        Features
                      </a>
                    
                    
                    
                      <li className="nav-item relative flex flex-col ">
                        <div 
                          role="button"
                          onClick={()=> setTab2((prev) => !prev)}
                          className="txt text-[14px] !font-medium mt-[3px]  flex items-center " 
                        >
                          About
                          <svg className={tab2 ? " ml-2 rotate-180 ": " ml-2 " } width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.103374 0.103374C0.228676 -0.0219278 0.424753 -0.0333189 0.562923 0.0692008L0.602508 0.103374L3.64706 3.14776L6.69161 0.103374C6.81691 -0.0219278 7.01299 -0.0333189 7.15116 0.0692008L7.19074 0.103374C7.31605 0.228676 7.32744 0.424753 7.22492 0.562923L7.19074 0.602508L3.89663 3.89663C3.77132 4.02193 3.57525 4.03332 3.43708 3.9308L3.39749 3.89663L0.103374 0.602508C-0.034458 0.464676 -0.034458 0.241206 0.103374 0.103374Z" fill="#D9D9D9"/>
                          </svg>
                        </div>  
                        {tab2 && ( 
                          <div  className=" font-semibold z-20 flex flex-col py-3 px-4  " > 
                            <a onClick={()=> setTab2(false)} target="_blank" href="https://docs.loozr.io/" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >LiteDOC</a>
                            <a onClick={()=> setTab2(false)} target="_blank" href="#https://docs.loozr.io/tokenomics" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Tokenomics</a> 
                            <a onClick={()=> setTab2(false)} target="_blank" href="https://docs.loozr.io/roadmap" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Roadmap</a>
                            <a onClick={()=> setTab2(false)} target="_blank" href="https://docs.loozr.io/team" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Team</a> 
                          </div>
                        )}
                      </li>
                      {/* <a className="txt text-[14px] !font-medium  " href="">
                        About
                      </a> */}
                    
                    
                      <a className="txt text-[14px] !font-medium  " href="https://medium.com/@officialloozr">
                        Blog
                      </a>
                    
                    <li className="nav-item relative flex flex-col ">
                      <div 
                        role="button"
                        onClick={()=> setTab((prev) => !prev)}
                        className="txt text-[14px] !font-medium mt-[3px]  flex items-center " 
                      >
                        Join community
                        <svg className={tab ? " ml-2 rotate-180 ": " ml-2 " } width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.103374 0.103374C0.228676 -0.0219278 0.424753 -0.0333189 0.562923 0.0692008L0.602508 0.103374L3.64706 3.14776L6.69161 0.103374C6.81691 -0.0219278 7.01299 -0.0333189 7.15116 0.0692008L7.19074 0.103374C7.31605 0.228676 7.32744 0.424753 7.22492 0.562923L7.19074 0.602508L3.89663 3.89663C3.77132 4.02193 3.57525 4.03332 3.43708 3.9308L3.39749 3.89663L0.103374 0.602508C-0.034458 0.464676 -0.034458 0.241206 0.103374 0.103374Z" fill="#D9D9D9"/>
                        </svg>
                      </div> 
                      {tab && ( 
                        <div className=" font-semibold z-20 flex flex-col py-3 px-4  " >
                          <a onClick={()=> setTab(false)} target="_blank" href="https://twitter.com/officialloozr" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Join on Twitter</a>
                          <a onClick={()=> setTab(false)} target="_blank" href="https://t.me/officialloozr" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Join Telegram</a>
                          <a onClick={()=> setTab(false)} target="_blank" href="https://discord.gg/loozr" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Join Discord</a> 
                          <a onClick={()=> setTab(false)} target="_blank" href="https://www.instagram.com/officialloozr/" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Join on Instagram</a>
                          <a onClick={()=> setTab(false)} target="_blank" href="https://www.tiktok.com/@officialloozr" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Follow on Tiktok</a>
                          <a onClick={()=> setTab(false)} target="_blank" href="https://www.youtube.com/@loozr_" className=" text-white text-base border-b border-[#5360791A] py-3 outline-none " >Watch Youtube</a> 
                        </div>
                      )} 
                    </li>
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;