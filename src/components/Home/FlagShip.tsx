import React from 'react'

export default function FlagShip() {
    return (
        <> 
            <div className=' w-full pt-24 px-6 md:px-20 !bg-[#0c0f15] items-start ' > 
                <div className="sec-head text-left relative "> 
                    <h6 id="gradenttext" className="wow !tracking-[0.4em] fadeIn txt !font-medium !text-[14px] " data-wow-delay=".5s">
                        5 FLAGSHIP SOLUTIONS
                    </h6>
                    <p className=" txt !font-black  !text-left !text-white mt-4 !leading-[1.1] !text-4xl">
                        LOOZR PRODUCTS
                    </p>
                    <span className="tbg !left-[9.5vw] !top-1">Product</span>
                </div>
                <p className="wow txt !text-[14.6px] text-left !leading-normal text-white !font-normal -mt-14 mb-10 lg:max-w-2xl " >Revolutionizing the music industry with 5 self-sustaining standalone solutions that bridge economic and entertainment services in the music industry.</p>
                <button className=' h-[50px] px-9 rounded-full border !border-[#12161e] text-white mt-5 ' >Learn more</button>
                <div className=' w-full grid grid-cols-1 lg:grid-cols-4 gap-9 gap-y-3 mt-8 mb-20 ' >
                    <div className=' w-full ' >
                        <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                            <img className=' w-[65%] ' src='/img/flag/1.png' alt='' />
                        </div>
                        <p className=' txt font-bold mt-3 text-[20px] text-white !leading-tight ' >Music Token Launchpad</p>
                        <p className='wow txt !text-[14.7px] text-[#9EAAC0] !font-normal mt-1 !leading-normal ' >World’s first tokenized, collaborative and investible songs.</p>
                    </div>
                    <div className=' w-full ' >
                        <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                            <img className=' w-[65%] ' src='/img/flag/2.png' alt='' />
                        </div>
                        <p className=' txt font-bold mt-3 text-[20px] text-white !leading-tight ' >Audio/Video Streaming</p>
                        <p className='wow txt !text-[14.7px] text-[#9EAAC0] !font-normal mt-1 !leading-normal ' >Inventing an incentive-based experience for streaming video/audio contents.</p>
                    </div>
                    <div className=' w-full ' >
                        <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                            <img className=' w-[65%] ' src='/img/flag/3.png' alt='' />
                        </div>
                        <p className=' txt font-bold mt-3 text-[20px] text-white !leading-tight ' >Music NFT Marketplace</p>
                        <p className='wow txt !text-[14.7px] text-[#9EAAC0] !font-normal mt-1 !leading-normal ' >Next generation of interoperable music NFTs at its finest - Music NFT Player.</p>
                    </div>
                    <div className=' w-full ' >
                        <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                            <img className=' w-[65%] ' src='/img/flag/4.png' alt='' />
                        </div>
                        <p className=' txt font-bold mt-3 text-[20px] text-white !leading-tight ' >SocialFi</p>
                        <p className='wow txt !text-[14.7px] text-[#9EAAC0] !font-normal mt-1 !leading-normal ' >Diversifying revenue streams for music and content creators - Crypto for Communities.</p>
                    </div>
                    <div className=' w-full ' >
                        <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                            <img className=' w-[65%] ' src='/img/flag/5.png' alt='' />
                        </div>
                        <p className=' txt font-bold mt-3 text-[20px] text-white !leading-tight ' >LOOZRverse</p>
                        <p className='wow txt !text-[14.7px] text-[#9EAAC0] !font-normal mt-1 !leading-normal ' >First-ever location-based immersive Metaverse (AR/VR) with gamified, incentivized and interactive experiences for businesses, events, and creators.</p>
                    </div>
                </div>
            </div> 
            {/* <div className='  w-full justify-center !pb-40 px-6 md:px-20 ' >
                <div className=' bg-[#11151D] h-[180px] w-full pl-12 flex justify-center items-center ' >
                    <p className=' txt !font-medium text-xl w-full text-white ' >“HOW IT WORKS” WORKING PERFECTLY HERE </p>
                </div>
            </div> */}
        </>
    )
} 