/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import TextSlides from "./TextSlides";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const style = { position: "relative" } as React.CSSProperties; 

  const [isShown, setIsShown] = React.useState(0)

  const boxAnimation = {
    key: "box",
    initial: { 
      opacity: 0,
      y: 20
        // scale: 0.5,
    },
    animate: {
        y: 0,
        opacity: 1,
        // scale: 1,
    },
    exit: { 
        opacity: 0,  
        y: -20
        // scale: 0.5,
    },
    transition: {
        duration: 0.2,
        ease: "easeOut",
    },
  }

  const array = ["Create", "Buy", "Sell"] 

  React.useEffect(() => { 
    const t1 = setTimeout(() => {  
      if(isShown === array.length-1){ 
        setIsShown(0) 
      } else { 
        setIsShown(prev=>prev+1) 
      }
    }, 1500); 
    return () => { 
      clearTimeout(t1); 
    }
  },[isShown]) 
  

  return (
    <>
      <div className="d-flex align-items-center relative hero-head">
        <div className="overlay"></div>
        <video
          poster="/img/vid-thumbnail.jpg"
          className="fullscreen "
          src="/vid-0399482.mp4"
          playsInline
          autoPlay
          muted
          loop
        ></video>
        <div className="container">
          <div className="mt-100 hero-content">
            <div className="d-flex">
              <div className="col-12 col-md-7 !pl-10 px-remove-all"> 
                <div className=" w-full  relative !text-[68px] !font-bold " > 
                <p className=" main-title -mb-6 flex !font-bold !text-[68px] !text-white  wow" >
                  <p >
                    {array.map((item: any, index: any) => {
                      return( 
                        <AnimatePresence  key={index} >
                          {index === isShown && 
                            <motion.div {...boxAnimation} className=" absolute " > 
                              <span className=" main-title !font-thin !text-[68px] !text-white  wow " >{item}</span>
                            </motion.div> 
                          }
                        </AnimatePresence> 
                      )
                    })}
                  </p> <span className=" text-transparent " >{array[isShown]}</span> Music 
                  </p>
                  Tokens.
                </div>
                {/* <h1>
                  <TextSlides /> 
                </h1> */}
                <p className="mt-10">
                  Don’t just stream, earn, and succeed with artistes.
                </p>
                <div className="mt-20">
                  <a
                    href="https://loozr-1.gitbook.io/docs/"
                    className="button btn-lit mr-3"
                  >
                    <span>Learn more</span>
                  </a>
                  <a
                    href="https://testnet.loozr.io/explore"
                    className="button btn-primary btn-lit"
                  >
                    <span>Join Testnet</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={style}>
            <div className="social-icon">
              <a
                href="https://twitter.com/officialloozr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://discord.gg/loozr"
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
      </div>
      <div className="clearfix"></div>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center mt-50 !pl-10 powered-section">
          <span className=" !font-medium " >Powered by </span>
          <img src="/img/unity.png" alt="unity" />
          <img src="/img/near.png" alt="near" />
          {/* <img src="/img/MAPBOX.png" className=" " alt="unity" />
          <img src="/img/SOWWND.png" className=" " alt="unity" /> */}
          <svg width="128" height="26" viewBox="0 0 133 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M99.1512 8.97393C97.5045 8.97393 95.9237 9.65457 94.76 10.8402V4.56075C94.76 4.36315 94.5843 4.1875 94.3867 4.1875H92.1472C91.9496 4.1875 91.774 4.36315 91.774 4.56075V21.5548C91.774 21.7524 91.9496 21.928 92.1472 21.928H94.3867C94.5843 21.928 94.76 21.7524 94.76 21.5548V20.3911C95.9017 21.5767 97.4826 22.2574 99.1512 22.2574C102.642 22.2574 105.453 19.2933 105.453 15.6266C105.453 11.96 102.642 8.97393 99.1512 8.97393ZM98.6462 19.5787C96.5384 19.5787 94.8039 17.8222 94.8039 15.6486V15.5388C94.8478 13.3651 96.5384 11.6087 98.6462 11.6087C100.776 11.6087 102.489 13.3871 102.489 15.5827C102.489 17.8003 100.754 19.5787 98.6462 19.5787ZM113.686 8.97393C109.91 8.97393 106.858 11.938 106.858 15.6047C106.858 19.2713 109.91 22.2354 113.686 22.2354C117.463 22.2354 120.514 19.2713 120.514 15.6047C120.514 11.938 117.463 8.97393 113.686 8.97393ZM113.664 19.5787C111.534 19.5787 109.822 17.8003 109.822 15.6047C109.822 13.4091 111.556 11.6306 113.664 11.6306C115.772 11.6306 117.507 13.4091 117.507 15.6047C117.528 17.8003 115.794 19.5787 113.664 19.5787ZM71.9696 9.30327H69.7301C69.5324 9.30327 69.3568 9.47892 69.3568 9.67652V10.8402C68.2151 9.65457 66.6342 8.97393 64.9656 8.97393C61.4746 8.97393 58.6642 11.938 58.6642 15.6047C58.6642 19.2713 61.4746 22.2354 64.9656 22.2354C66.6123 22.2354 68.1931 21.5548 69.3568 20.3691V21.5328C69.3568 21.7304 69.5324 21.9061 69.7301 21.9061H71.9696C72.1672 21.9061 72.3428 21.7304 72.3428 21.5328V9.65457C72.3428 9.45696 72.1891 9.30327 71.9696 9.30327ZM65.5145 19.5787C63.3847 19.5787 61.6722 17.8003 61.6722 15.6047C61.6722 13.4091 63.4067 11.6306 65.5145 11.6306C67.6223 11.6306 69.3568 13.3871 69.3568 15.5608V15.6705C69.3348 17.8222 67.6223 19.5787 65.5145 19.5787ZM83.1452 8.97393C81.4985 8.97393 79.9177 9.65457 78.754 10.8402V9.67652C78.754 9.47892 78.5784 9.30327 78.3808 9.30327H76.1412C75.9436 9.30327 75.768 9.47892 75.768 9.67652V26.6486C75.768 26.8462 75.9436 27.0218 76.1412 27.0218H78.3808C78.5784 27.0218 78.754 26.8462 78.754 26.6486V20.3691C79.8957 21.5548 81.4766 22.2354 83.1452 22.2354C86.6362 22.2354 89.4466 19.2713 89.4466 15.6047C89.4466 11.938 86.6143 8.97393 83.1452 8.97393ZM82.6183 19.5787C80.5105 19.5787 78.776 17.8222 78.776 15.6486V15.5388C78.8199 13.3651 80.5105 11.6087 82.6183 11.6087C84.748 11.6087 86.4606 13.3871 86.4606 15.5827C86.4606 17.8003 84.748 19.5787 82.6183 19.5787ZM52.0115 8.97393C50.3428 8.99588 48.8279 9.94 48.1033 11.455C47.2909 9.91804 45.6442 8.97393 43.9097 8.97393C42.5484 8.97393 41.253 9.63261 40.4626 10.7304V9.67652C40.4626 9.47892 40.2869 9.30327 40.0893 9.30327H37.8498C37.6522 9.30327 37.4766 9.47892 37.4766 9.67652V21.5548C37.4766 21.7524 37.6522 21.928 37.8498 21.928H40.0893C40.2869 21.928 40.4626 21.7524 40.4626 21.5548V14.441C40.5504 12.8602 41.6702 11.5867 43.0315 11.5867C44.4586 11.5867 45.6223 12.7504 45.6223 14.2873V21.5548C45.6223 21.7524 45.7979 21.928 45.9955 21.928H48.257C48.4546 21.928 48.6303 21.7524 48.6303 21.5548L48.6083 14.1556C48.8059 12.7065 49.8598 11.5867 51.1332 11.5867C52.5604 11.5867 53.7241 12.7504 53.7241 14.2873V21.5548C53.7241 21.7524 53.8997 21.928 54.0973 21.928H56.3588C56.5564 21.928 56.732 21.7524 56.732 21.5548L56.7101 13.3871C56.6881 10.928 54.5804 8.97393 52.0115 8.97393ZM132.524 21.4011L128.66 15.5827L132.503 9.80826C132.612 9.65457 132.546 9.43501 132.393 9.34718C132.349 9.30327 132.283 9.30327 132.217 9.30327H129.626C129.429 9.30327 129.253 9.41305 129.143 9.56674L126.882 13.2993L124.62 9.56674C124.51 9.39109 124.335 9.30327 124.137 9.30327H121.546C121.371 9.30327 121.217 9.45696 121.217 9.63261C121.217 9.69848 121.239 9.76435 121.261 9.80826L125.103 15.5827L121.239 21.4011C121.129 21.5548 121.195 21.7743 121.349 21.8622C121.393 21.9061 121.459 21.9061 121.524 21.9061H124.115C124.313 21.9061 124.489 21.7963 124.598 21.6426L126.904 17.8442L129.209 21.6426C129.319 21.8182 129.495 21.9061 129.692 21.9061H132.239C132.415 21.9061 132.568 21.7524 132.568 21.5767C132.568 21.5328 132.568 21.4669 132.524 21.4011Z" fill="#536079"/>
            <path d="M15.6758 0.9375C7.48621 0.9375 0.855469 7.50237 0.855469 15.6042C0.855469 23.706 7.48621 30.2708 15.6758 30.2708C23.8654 30.2708 30.4962 23.706 30.4962 15.6042C30.4962 7.50237 23.8654 0.9375 15.6758 0.9375ZM22.7018 19.205C17.6299 24.211 8.58401 22.6301 8.58401 22.6301C8.58401 22.6301 6.95926 13.694 12.0311 8.66605C14.8415 5.87762 19.5181 5.9874 22.4603 8.90756C25.4243 11.7838 25.5122 16.4165 22.7018 19.205ZM17.3664 9.52233L15.9173 12.4644L12.9313 13.9135L15.9173 15.3407L17.3664 18.2828L18.8155 15.3407L21.8016 13.9135L18.8155 12.4864L17.3664 9.52233Z" fill="#536079"/>
          </svg>
          <svg width="131" height="11" className=" -ml-2 " viewBox="0 0 136 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.04099 6.2049C6.01483 6.2049 5.52312 5.92698 5.52312 5.20012C5.52312 4.47325 6.01483 4.21671 7.04099 4.21671H16.9605L19.8039 0.496881H7.38304C3.04324 0.496881 1.24746 2.2499 1.24746 4.94358C1.24746 7.40208 2.93634 9.04822 6.61342 9.04822H14.3951C15.4427 9.04822 15.913 9.34751 15.913 10.0744C15.913 10.8226 15.4427 11.1219 14.3951 11.1219H3.57769L0.734375 14.799H14.0531C18.4143 14.799 20.1887 13.046 20.1887 10.1171C20.1887 7.50898 18.3074 6.2049 14.8227 6.2049H7.04099ZM32.1582 0.261719C25.1888 0.261719 21.7042 2.52782 21.7042 7.63725C21.7042 12.7467 25.1888 15.0342 32.1582 15.0342C39.1062 15.0342 42.6122 12.7467 42.6122 7.63725C42.6122 2.52782 39.1062 0.261719 32.1582 0.261719ZM32.1582 11.3143C27.7115 11.3143 26.1081 10.7157 26.1081 7.63725C26.1081 4.55877 27.7115 3.98155 32.1582 3.98155C36.6049 3.98155 38.2083 4.55877 38.2083 7.63725C38.2083 10.7157 36.6049 11.3143 32.1582 11.3143ZM60.6232 13.5163C61.1577 14.4569 61.9273 15.0342 63.0604 15.0342C64.172 15.0342 65.1554 14.3928 65.5403 13.0673L69.2387 0.496881H64.9203L63.5734 5.47803C63.1459 7.06003 62.8252 8.2786 62.59 9.41165C62.1411 8.44962 61.6494 7.44484 60.5805 5.47803L58.6778 1.86509C57.9296 0.454124 57.1813 0.261719 56.1124 0.261719C55.0649 0.261719 54.338 0.454124 53.5898 1.86509L51.6657 5.45666C50.6823 7.31657 50.1265 8.40687 49.6561 9.41165C49.4424 8.25722 49.1431 7.08141 48.6941 5.47803L47.3473 0.496881H42.922L46.5563 13.0673C46.9411 14.3928 47.9245 15.0342 49.0362 15.0342C50.1906 15.0342 50.9602 14.4356 51.4733 13.5163L53.7608 9.45441C55.0007 7.25244 55.5779 6.2049 56.0269 5.17874C56.5186 6.2049 57.0958 7.27382 58.3358 9.47578L60.6232 13.5163ZM87.5548 13.5163C88.0893 14.4569 88.8589 15.0342 89.992 15.0342C91.1036 15.0342 92.087 14.3928 92.4718 13.0673L96.1703 0.496881H91.8519L90.505 5.47803C90.0775 7.06003 89.7568 8.2786 89.5216 9.41165C89.0727 8.44962 88.581 7.44484 87.5121 5.47803L85.6094 1.86509C84.8612 0.454124 84.1129 0.261719 83.044 0.261719C81.9965 0.261719 81.2696 0.454124 80.5213 1.86509L78.5973 5.45666C77.6139 7.31657 77.0581 8.40687 76.5877 9.41165C76.3739 8.25722 76.0746 7.08141 75.6257 5.47803L74.2789 0.496881H69.8536L73.4879 13.0673C73.8727 14.3928 74.8561 15.0342 75.9678 15.0342C77.1222 15.0342 77.8918 14.4356 78.4049 13.5163L80.6924 9.45441C81.9323 7.25244 82.5095 6.2049 82.9585 5.17874C83.4502 6.2049 84.0274 7.27382 85.2673 9.47578L87.5548 13.5163ZM111.806 15.0342C113.089 15.0342 114.243 14.2432 114.243 12.3405V0.496881H110.203V8.89857L101.437 1.03134C100.732 0.389989 100.198 0.261719 99.6631 0.261719C98.4018 0.261719 97.2473 1.03134 97.2473 2.93401V14.799H101.266V6.3973L110.032 14.2645C110.716 14.9059 111.25 15.0342 111.806 15.0342ZM135.046 7.50898C135.046 3.38296 131.433 0.496881 126.43 0.496881H119.675L116.853 4.21671H126.43C128.824 4.21671 130.663 5.69182 130.663 7.70138C130.663 9.7537 128.889 11.1219 126.43 11.1219H121.299V5.88422H116.853V14.799H126.43C131.39 14.799 135.046 11.6564 135.046 7.50898Z" fill="#536079"/>
            <path d="M16.9625 4.2176V4.43139H17.0682L17.1323 4.34744L16.9625 4.2176ZM19.8058 0.497773L19.9757 0.6276L20.2383 0.283989H19.8058V0.497773ZM3.57965 11.1228V10.909H3.47473L3.41053 10.992L3.57965 11.1228ZM0.736333 14.7999L0.567212 14.6691L0.300781 15.0137H0.736333V14.7999ZM7.04294 5.99201C6.5398 5.99201 6.21203 5.92204 6.01422 5.79578C5.8377 5.68309 5.73887 5.50854 5.73887 5.20101H5.3113C5.3113 5.62034 5.45832 5.94818 5.78419 6.15617C6.08876 6.35059 6.51992 6.41957 7.04294 6.41957V5.99201ZM5.73887 5.20101C5.73887 4.89408 5.83706 4.72628 6.01146 4.61866C6.20942 4.49653 6.53767 4.43139 7.04294 4.43139V4.00382C6.52206 4.00382 6.09137 4.06695 5.78694 4.2548C5.45896 4.45717 5.3113 4.78107 5.3113 5.20101H5.73887ZM7.04294 4.43139H16.9625V4.00382H7.04294V4.43139ZM17.1323 4.34744L19.9757 0.6276L19.636 0.367946L16.7926 4.08777L17.1323 4.34744ZM19.8058 0.283989H7.385V0.711557H19.8058V0.283989ZM7.385 0.283989C5.19154 0.283989 3.60255 0.726167 2.55812 1.54256C1.50448 2.36616 1.03563 3.54626 1.03563 4.94447H1.4632C1.4632 3.649 1.89223 2.60576 2.82144 1.87943C3.75985 1.14589 5.23865 0.711557 7.385 0.711557V0.283989ZM1.03563 4.94447C1.03563 6.22616 1.47827 7.31808 2.41842 8.08443C3.35206 8.8455 4.74871 9.26289 6.61538 9.26289V8.83533C4.80497 8.83533 3.51864 8.42965 2.68857 7.75303C1.865 7.08168 1.4632 6.12128 1.4632 4.94447H1.03563ZM6.61538 9.26289H14.3971V8.83533H6.61538V9.26289ZM14.3971 9.26289C14.9097 9.26289 15.236 9.33797 15.4303 9.46748C15.6048 9.58387 15.7012 9.76396 15.7012 10.0753H16.1287C16.1287 9.65972 15.9899 9.32673 15.6674 9.11173C15.3647 8.90989 14.932 8.83533 14.3971 8.83533V9.26289ZM15.7012 10.0753C15.7012 10.3996 15.6032 10.5846 15.429 10.7026C15.2353 10.8339 14.91 10.909 14.3971 10.909V11.3366C14.9317 11.3366 15.3654 11.2621 15.6688 11.0566C15.9915 10.838 16.1287 10.4992 16.1287 10.0753H15.7012ZM14.3971 10.909H3.57965V11.3366H14.3971V10.909ZM3.41053 10.992L0.567212 14.6691L0.905453 14.9307L3.74878 11.2536L3.41053 10.992ZM0.736333 15.0137H14.055V14.5861H0.736333V15.0137ZM14.055 15.0137C16.2585 15.0137 17.85 14.5718 18.8932 13.7231C19.9451 12.8674 20.4044 11.6276 20.4044 10.118H19.9768C19.9768 11.5373 19.549 12.6384 18.6234 13.3914C17.6891 14.1515 16.2127 14.5861 14.055 14.5861V15.0137ZM20.4044 10.118C20.4044 8.75591 19.9092 7.70843 18.9393 7.01034C17.9814 6.32093 16.5879 5.99201 14.8247 5.99201V6.41957C16.5461 6.41957 17.8355 6.74269 18.6895 7.35736C19.5314 7.96335 19.9768 8.87199 19.9768 10.118H20.4044ZM14.8247 5.99201H7.04294V6.41957H14.8247V5.99201ZM32.1601 0.0488281C28.6599 0.0488281 25.9938 0.616447 24.198 1.85852C22.3866 3.11157 21.4924 5.02842 21.4924 7.63814H21.9199C21.9199 5.13843 22.768 3.36752 24.4413 2.21016C26.1304 1.04183 28.6911 0.476395 32.1601 0.476395V0.0488281ZM21.4924 7.63814C21.4924 10.2478 22.3864 12.1698 24.1976 13.4282C25.9933 14.6758 28.6597 15.2488 32.1601 15.2488V14.8213C28.6913 14.8213 26.1306 14.2506 24.4417 13.0771C22.7682 11.9144 21.9199 10.1379 21.9199 7.63814H21.4924ZM32.1601 15.2488C35.6502 15.2488 38.3163 14.6757 40.1146 13.4283C41.9281 12.1701 42.8279 10.2482 42.8279 7.63814H42.4004C42.4004 10.1375 41.5472 11.9141 39.8709 13.077C38.179 14.2506 35.6181 14.8213 32.1601 14.8213V15.2488ZM42.8279 7.63814C42.8279 5.02797 41.9281 3.11128 40.1142 1.85843C38.316 0.616496 35.6499 0.0488281 32.1601 0.0488281V0.476395C35.6183 0.476395 38.1794 1.04178 39.8711 2.21025C41.5472 3.36782 42.4004 5.13888 42.4004 7.63814H42.8279ZM32.1601 11.1014C31.0517 11.1014 30.129 11.064 29.3673 10.9617C28.6049 10.8592 28.0172 10.6933 27.5719 10.4445C27.132 10.1987 26.8252 9.86918 26.6251 9.42376C26.4224 8.97277 26.3239 8.39164 26.3239 7.63814H25.8963C25.8963 8.42388 25.9983 9.07201 26.2351 9.59905C26.4746 10.1317 26.8466 10.5291 27.3633 10.8177C27.8746 11.1034 28.5218 11.2795 29.3104 11.3855C30.1001 11.4916 31.0453 11.529 32.1601 11.529V11.1014ZM26.3239 7.63814C26.3239 6.8846 26.4224 6.30496 26.6249 5.85615C26.825 5.41302 27.1313 5.08619 27.5711 4.84294C28.0164 4.59662 28.6041 4.4332 29.3669 4.33268C30.1286 4.23229 31.0515 4.19623 32.1601 4.19623V3.76866C31.0455 3.76866 30.1006 3.80475 29.3111 3.90877C28.5224 4.01269 27.8755 4.18596 27.3641 4.46878C26.8472 4.75465 26.4748 5.14934 26.2351 5.68027C25.9983 6.20549 25.8963 6.85244 25.8963 7.63814H26.3239ZM32.1601 4.19623C33.2688 4.19623 34.1917 4.23229 34.9534 4.33268C35.7162 4.4332 36.3039 4.59662 36.7492 4.84294C37.189 5.08619 37.4953 5.41302 37.6954 5.85615C37.8979 6.30496 37.9964 6.8846 37.9964 7.63814H38.424C38.424 6.85244 38.322 6.20549 38.0852 5.68027C37.8455 5.14934 37.4731 4.75465 36.9562 4.46878C36.4448 4.18596 35.7979 4.01269 35.0095 3.90877C34.2199 3.80475 33.2748 3.76866 32.1601 3.76866V4.19623ZM37.9964 7.63814C37.9964 8.39164 37.8979 8.97277 37.6952 9.42376C37.4951 9.86918 37.1883 10.1987 36.7484 10.4445C36.3031 10.6933 35.7156 10.8592 34.953 10.9617C34.1915 11.064 33.2686 11.1014 32.1601 11.1014V11.529C33.275 11.529 34.2202 11.4916 35.0099 11.3855C35.7987 11.2795 36.4456 11.1034 36.957 10.8177C37.4737 10.5291 37.8457 10.1317 38.0852 9.59905C38.322 9.07201 38.424 8.42388 38.424 7.63814H37.9964ZM60.6252 13.5172L60.439 13.6225L60.4392 13.6226V13.6228L60.6252 13.5172ZM65.5422 13.0682L65.337 13.0079V13.0083L65.3368 13.0086L65.5422 13.0682ZM69.2407 0.497773L69.4457 0.558114L69.5263 0.283989H69.2407V0.497773ZM64.9222 0.497773V0.283989H64.7585L64.7157 0.441972L64.9222 0.497773ZM63.5754 5.47893L63.3689 5.42313V5.42315L63.5754 5.47893ZM62.592 9.41254L62.3981 9.50295L62.6705 10.0863L62.8013 9.45598L62.592 9.41254ZM60.5824 5.47893L60.3932 5.57855L60.3939 5.57979L60.3945 5.58101L60.5824 5.47893ZM58.6798 1.86599L58.8687 1.76637V1.7661L58.8685 1.76583L58.6798 1.86599ZM53.5917 1.86599L53.7801 1.96694L53.7803 1.96654L53.7805 1.96614L53.5917 1.86599ZM51.6677 5.45755L51.4791 5.3566L51.4789 5.35711L51.4785 5.35763L51.6677 5.45755ZM49.6581 9.41254L49.4477 9.45147L49.5692 10.1067L49.8516 9.50316L49.6581 9.41254ZM48.6961 5.47893L48.4896 5.53472L48.4898 5.53564L48.4902 5.53656L48.6961 5.47893ZM47.3492 0.497773L47.5555 0.441972L47.5128 0.283989H47.3492V0.497773ZM42.9239 0.497773V0.283989H42.6394L42.7185 0.557149L42.9239 0.497773ZM46.5582 13.0682L46.3528 13.1276V13.1278L46.5582 13.0682ZM51.4753 13.5172L51.2888 13.4123L51.2886 13.4126L51.2884 13.413L51.4753 13.5172ZM53.7627 9.4553L53.949 9.5602L53.7627 9.4553ZM56.0288 5.17963L56.2215 5.08725L56.0199 4.66646L55.8328 5.09395L56.0288 5.17963ZM58.3377 9.47668L58.1513 9.58158L58.1515 9.58179V9.58201L58.3377 9.47668ZM60.4392 13.6228C61.0029 14.6148 61.8361 15.2488 63.0623 15.2488V14.8213C62.0223 14.8213 61.3161 14.3008 60.811 13.4116L60.4392 13.6228ZM63.0623 15.2488C64.2696 15.2488 65.3361 14.5442 65.7474 13.1278L65.3368 13.0086C64.9785 14.2432 64.0782 14.8213 63.0623 14.8213V15.2488ZM65.7472 13.1286L69.4457 0.558114L69.0354 0.437431L65.337 13.0079L65.7472 13.1286ZM69.2407 0.283989H64.9222V0.711557H69.2407V0.283989ZM64.7157 0.441972L63.3689 5.42313L63.7817 5.53472L65.1285 0.553573L64.7157 0.441972ZM63.3689 5.42315C62.9415 7.00461 62.6192 8.22897 62.3825 9.3691L62.8013 9.45598C63.035 8.33001 63.3539 7.11721 63.7817 5.5347L63.3689 5.42315ZM62.7857 9.32213C62.3346 8.35575 61.841 7.34707 60.7701 5.37685L60.3945 5.58101C61.4615 7.54439 61.9513 8.54529 62.3981 9.50295L62.7857 9.32213ZM60.7714 5.3793L58.8687 1.76637L58.4906 1.9656L60.3932 5.57855L60.7714 5.3793ZM58.8685 1.76583C58.4831 1.03896 58.0833 0.598861 57.619 0.347228C57.1566 0.0966329 56.658 0.0488281 56.1144 0.0488281V0.476395C56.6394 0.476395 57.0495 0.524793 57.4154 0.723142C57.7795 0.920455 58.128 1.28205 58.4908 1.96614L58.8685 1.76583ZM56.1144 0.0488281C55.5805 0.0488281 55.0921 0.0967135 54.6373 0.348073C54.1813 0.600037 53.7875 1.0401 53.4027 1.76583L53.7805 1.96614C54.1439 1.2809 54.4877 0.919279 54.8441 0.722297C55.2017 0.524712 55.6004 0.476395 56.1144 0.476395V0.0488281ZM53.4032 1.76503L51.4791 5.3566L51.856 5.5585L53.7801 1.96694L53.4032 1.76503ZM51.4785 5.35763C50.4949 7.21814 49.9371 8.31222 49.4644 9.32192L49.8516 9.50316C50.3195 8.5033 50.8735 7.41679 51.8567 5.55747L51.4785 5.35763ZM49.8683 9.37361C49.6525 8.20958 49.3513 7.0264 48.9017 5.42129L48.4902 5.53656C48.9385 7.13821 49.2359 8.30664 49.4477 9.45147L49.8683 9.37361ZM48.9024 5.42313L47.5555 0.441972L47.1427 0.553573L48.4896 5.53472L48.9024 5.42313ZM47.3492 0.283989H42.9239V0.711557H47.3492V0.283989ZM42.7185 0.557149L46.3528 13.1276L46.7635 13.0089L43.1292 0.438396L42.7185 0.557149ZM46.3528 13.1278C46.7641 14.5442 47.8307 15.2488 49.0381 15.2488V14.8213C48.022 14.8213 47.1218 14.2432 46.7635 13.0086L46.3528 13.1278ZM49.0381 15.2488C50.2864 15.2488 51.1197 14.5925 51.6619 13.6214L51.2884 13.413C50.8044 14.2804 50.0985 14.8213 49.0381 14.8213V15.2488ZM51.6615 13.6221L53.949 9.5602L53.5763 9.35039L51.2888 13.4123L51.6615 13.6221ZM53.949 9.5602C55.1874 7.36086 55.7704 6.30332 56.2247 5.26531L55.8328 5.09395C55.3892 6.10826 54.8178 7.1458 53.5763 9.35039L53.949 9.5602ZM55.836 5.27201C56.3309 6.3052 56.9113 7.37959 58.1513 9.58158L58.5239 9.37177C57.284 7.16982 56.71 6.10638 56.2215 5.08725L55.836 5.27201ZM58.1515 9.58201L60.439 13.6225L60.8112 13.4119L58.5237 9.37135L58.1515 9.58201ZM87.5568 13.5172L87.3708 13.6225V13.6226L87.371 13.6228L87.5568 13.5172ZM92.4738 13.0682L92.2688 13.0079L92.2686 13.0083V13.0086L92.4738 13.0682ZM96.1722 0.497773L96.3773 0.558114L96.4581 0.283989H96.1722V0.497773ZM91.8538 0.497773V0.283989H91.6903L91.6475 0.441972L91.8538 0.497773ZM90.507 5.47893L90.3007 5.42313V5.42315L90.507 5.47893ZM89.5236 9.41254L89.3299 9.50295L89.602 10.0863L89.7329 9.45598L89.5236 9.41254ZM87.514 5.47893L87.3248 5.57855L87.3255 5.57979L87.3261 5.58101L87.514 5.47893ZM85.6113 1.86599L85.8005 1.76637L85.8003 1.7661V1.76583L85.6113 1.86599ZM80.5233 1.86599L80.7119 1.96694L80.7121 1.96654L80.7123 1.96614L80.5233 1.86599ZM78.5992 5.45755L78.4109 5.3566L78.4105 5.35711L78.4103 5.35763L78.5992 5.45755ZM76.5897 9.41254L76.3795 9.45147L76.5007 10.1067L76.7834 9.50316L76.5897 9.41254ZM75.6277 5.47893L75.4214 5.53472L75.4216 5.53564L75.4218 5.53656L75.6277 5.47893ZM74.2808 0.497773L74.4871 0.441972L74.4446 0.283989H74.2808V0.497773ZM69.8555 0.497773V0.283989H69.5712L69.6501 0.557149L69.8555 0.497773ZM73.4898 13.0682L73.2844 13.1276L73.2846 13.1278L73.4898 13.0682ZM78.4068 13.5172L78.2206 13.4123L78.2204 13.4126L78.2202 13.413L78.4068 13.5172ZM80.6943 9.4553L80.8805 9.5602L80.6943 9.4553ZM82.9604 5.17963L83.1533 5.08725L82.9517 4.66646L82.7646 5.09395L82.9604 5.17963ZM85.2693 9.47668L85.0831 9.58158V9.58179L85.0833 9.58201L85.2693 9.47668ZM87.371 13.6228C87.9345 14.6148 88.7676 15.2488 89.9939 15.2488V14.8213C88.9541 14.8213 88.2479 14.3008 87.7428 13.4116L87.371 13.6228ZM89.9939 15.2488C91.2011 15.2488 92.2679 14.5442 92.679 13.1278L92.2686 13.0086C91.91 14.2432 91.01 14.8213 89.9939 14.8213V15.2488ZM92.6788 13.1286L96.3773 0.558114L95.9672 0.437431L92.2688 13.0079L92.6788 13.1286ZM96.1722 0.283989H91.8538V0.711557H96.1722V0.283989ZM91.6475 0.441972L90.3007 5.42313L90.7133 5.53472L92.0601 0.553573L91.6475 0.441972ZM90.3007 5.42315C89.8731 7.00461 89.5509 8.22897 89.3143 9.3691L89.7329 9.45598C89.9665 8.33001 90.2857 7.11721 90.7133 5.5347L90.3007 5.42315ZM89.7173 9.32213C89.2664 8.35575 88.7726 7.34707 87.7019 5.37685L87.3261 5.58101C88.3933 7.54439 88.8829 8.54529 89.3299 9.50295L89.7173 9.32213ZM87.7032 5.3793L85.8005 1.76637L85.4221 1.9656L87.3248 5.57855L87.7032 5.3793ZM85.8003 1.76583C85.4147 1.03896 85.0151 0.598861 84.5508 0.347228C84.0884 0.0966329 83.5898 0.0488281 83.0459 0.0488281V0.476395C83.571 0.476395 83.981 0.524793 84.347 0.723142C84.7111 0.920455 85.0598 1.28205 85.4226 1.96614L85.8003 1.76583ZM83.0459 0.0488281C82.5123 0.0488281 82.0238 0.0967135 81.5689 0.348073C81.1131 0.600037 80.7193 1.0401 80.3345 1.76583L80.7123 1.96614C81.0755 1.2809 81.4193 0.919279 81.7759 0.722297C82.1333 0.524712 82.532 0.476395 83.0459 0.476395V0.0488281ZM80.335 1.76503L78.4109 5.3566L78.7878 5.5585L80.7119 1.96694L80.335 1.76503ZM78.4103 5.35763C77.4266 7.21814 76.8687 8.31222 76.396 9.32192L76.7834 9.50316C77.2513 8.5033 77.8053 7.41679 78.7882 5.55747L78.4103 5.35763ZM76.7998 9.37361C76.5843 8.20958 76.2829 7.0264 75.8335 5.42129L75.4218 5.53656C75.8703 7.13821 76.1675 8.30664 76.3795 9.45147L76.7998 9.37361ZM75.834 5.42313L74.4871 0.441972L74.0745 0.553573L75.4214 5.53472L75.834 5.42313ZM74.2808 0.283989H69.8555V0.711557H74.2808V0.283989ZM69.6501 0.557149L73.2844 13.1276L73.6953 13.0089L70.061 0.438396L69.6501 0.557149ZM73.2846 13.1278C73.6957 14.5442 74.7625 15.2488 75.9697 15.2488V14.8213C74.9536 14.8213 74.0536 14.2432 73.6951 13.0086L73.2846 13.1278ZM75.9697 15.2488C77.2182 15.2488 78.0515 14.5925 78.5935 13.6214L78.2202 13.413C77.736 14.2804 77.0301 14.8213 75.9697 14.8213V15.2488ZM78.5931 13.6221L80.8805 9.5602L80.5081 9.35039L78.2206 13.4123L78.5931 13.6221ZM80.8805 9.5602C82.119 7.36086 82.7022 6.30332 83.1563 5.26531L82.7646 5.09395C82.3208 6.10826 81.7496 7.1458 80.5081 9.35039L80.8805 9.5602ZM82.7676 5.27201C83.2627 6.3052 83.8431 7.37959 85.0831 9.58158L85.4555 9.37177C84.2156 7.16982 83.6415 6.10638 83.1533 5.08725L82.7676 5.27201ZM85.0833 9.58201L87.3708 13.6225L87.7428 13.4119L85.4553 9.37135L85.0833 9.58201ZM114.245 0.497773H114.459V0.283989H114.245V0.497773ZM110.205 0.497773V0.283989H109.991V0.497773H110.205ZM110.205 8.89946L110.062 9.05856L110.418 9.37861V8.89946H110.205ZM101.439 1.03223L101.296 1.19042L101.296 1.19087L101.297 1.19133L101.439 1.03223ZM97.2493 14.7999H97.0355V15.0137H97.2493V14.7999ZM101.268 14.7999V15.0137H101.482V14.7999H101.268ZM101.268 6.3982L101.411 6.2391L101.055 5.91904V6.3982H101.268ZM110.034 14.2654L110.18 14.1095L110.178 14.1079L110.176 14.1063L110.034 14.2654ZM111.808 15.2488C112.492 15.2488 113.159 15.0375 113.656 14.5551C114.155 14.0709 114.459 13.3372 114.459 12.3414H114.031C114.031 13.2482 113.757 13.8614 113.359 14.2483C112.958 14.6371 112.406 14.8213 111.808 14.8213V15.2488ZM114.459 12.3414V0.497773H114.031V12.3414H114.459ZM114.245 0.283989H110.205V0.711557H114.245V0.283989ZM109.991 0.497773V8.89946H110.418V0.497773H109.991ZM110.347 8.74036L101.582 0.873134L101.297 1.19133L110.062 9.05856L110.347 8.74036ZM101.583 0.874043C101.216 0.540021 100.884 0.331473 100.565 0.207668C100.246 0.0833657 99.9509 0.0488281 99.665 0.0488281V0.476395C99.9135 0.476395 100.153 0.505991 100.411 0.606161C100.669 0.706828 100.958 0.883092 101.296 1.19042L101.583 0.874043ZM99.665 0.0488281C98.992 0.0488281 98.3304 0.254415 97.8357 0.731349C97.3389 1.2104 97.0355 1.93905 97.0355 2.9349H97.4631C97.4631 2.02809 97.7367 1.42059 98.1324 1.03916C98.5303 0.655618 99.0765 0.476395 99.665 0.476395V0.0488281ZM97.0355 2.9349V14.7999H97.4631V2.9349H97.0355ZM97.2493 15.0137H101.268V14.5861H97.2493V15.0137ZM101.482 14.7999V6.3982H101.055V14.7999H101.482ZM101.126 6.55729L109.891 14.4245L110.176 14.1063L101.411 6.2391L101.126 6.55729ZM109.887 14.4214C110.245 14.7564 110.572 14.9658 110.891 15.09C111.212 15.2146 111.512 15.2488 111.808 15.2488V14.8213C111.548 14.8213 111.303 14.7914 111.046 14.6915C110.788 14.5913 110.506 14.4158 110.18 14.1095L109.887 14.4214ZM119.676 0.497773V0.283989H119.57L119.506 0.368565L119.676 0.497773ZM116.855 4.2176L116.684 4.08839L116.424 4.43139H116.855V4.2176ZM121.301 11.1228H121.087V11.3366H121.301V11.1228ZM121.301 5.88511H121.515V5.67133H121.301V5.88511ZM116.855 5.88511V5.67133H116.641V5.88511H116.855ZM116.855 14.7999H116.641V15.0137H116.855V14.7999ZM135.261 7.50987C135.261 3.22578 131.508 0.283989 126.432 0.283989V0.711557C131.361 0.711557 134.834 3.54192 134.834 7.50987H135.261ZM126.432 0.283989H119.676V0.711557H126.432V0.283989ZM119.506 0.368565L116.684 4.08839L117.025 4.34682L119.847 0.62698L119.506 0.368565ZM116.855 4.43139H126.432V4.00382H116.855V4.43139ZM126.432 4.43139C128.751 4.43139 130.451 5.84916 130.451 7.70227H130.879C130.879 5.53624 128.902 4.00382 126.432 4.00382V4.43139ZM130.451 7.70227C130.451 8.66094 130.039 9.45543 129.337 10.015C128.631 10.5775 127.623 10.909 126.432 10.909V11.3366C127.699 11.3366 128.807 10.984 129.604 10.3493C130.403 9.71169 130.879 8.79593 130.879 7.70227H130.451ZM126.432 10.909H121.301V11.3366H126.432V10.909ZM121.515 11.1228V5.88511H121.087V11.1228H121.515ZM121.301 5.67133H116.855V6.0989H121.301V5.67133ZM116.641 5.88511V14.7999H117.068V5.88511H116.641ZM116.855 15.0137H126.432V14.5861H116.855V15.0137ZM126.432 15.0137C131.476 15.0137 135.261 11.8066 135.261 7.50987H134.834C134.834 11.508 131.308 14.5861 126.432 14.5861V15.0137Z" fill="#536079"/>
          </svg>
        </div>
      </div>
    </>
  );
}
