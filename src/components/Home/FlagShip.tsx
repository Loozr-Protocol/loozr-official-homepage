import React from 'react'

export default function FlagShip() {
    return (
        <div className=' w-full px-20 py-8 lg:py-20 relative ' > 
            <div className="sec-head custom-font ">
                <h6 id="gradenttext" className="wow fadeIn !font-bold " data-wow-delay=".5s">
                    5 FLAGSHIP SOLUTIONS
                </h6>
                <h3 className="wow" data-splitting>
                    LOOZR PRODUCTS!
                </h3>
                <span className="tbg lg:first-letter:absolute right-0">Product!</span>
            </div>
            <p className=" font-medium text-lg -mt-14 mb-10 text-white lg:max-w-3xl " >Revolutionizing the music industry with 5 self-sustaining standalone solutions that bridge economic and entertainment services in the music industry.</p>
            <button className=' h-[50px] px-9 rounded-full border !border-[#12161e] text-white mt-5 ' >Learn more</button>
            <div className=' w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 mb-20 ' >
                <div className=' w-full ' >
                    <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                        <img className=' w-[80%] ' src='/img/flag/1.png' alt='' />
                    </div>
                    <p className=' font-bold mt-3 text-2xl text-white ' >Music Token Launchpad</p>
                    <p className=' font-medium mt-2 !leading-normal ' >World’s first tokenized, collaborative and investible songs.</p>
                </div>
                <div className=' w-full ' >
                    <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                        <img className=' w-[80%] ' src='/img/flag/2.png' alt='' />
                    </div>
                    <p className=' font-bold mt-3 text-2xl text-white ' >Audio/Video Streaming</p>
                    <p className=' font-medium mt-2 !leading-normal ' >Inventing an incentive-based experience for streaming video/audio contents.</p>
                </div>
                <div className=' w-full ' >
                    <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                        <img className=' w-[80%] ' src='/img/flag/3.png' alt='' />
                    </div>
                    <p className=' font-bold mt-3 text-2xl text-white ' >Music NFT Marketplace</p>
                    <p className=' font-medium mt-2 !leading-normal ' >Next generation of interoperable music NFTs at its finest - Music NFT Player.</p>
                </div>
                <div className=' w-full ' >
                    <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                        <img className=' w-[80%] ' src='/img/flag/4.png' alt='' />
                    </div>
                    <p className=' font-bold mt-3 text-2xl text-white ' >SocialFi</p>
                    <p className=' font-medium mt-2 !leading-normal ' >Diversifying revenue streams for music and content creators - Crypto for Communities.</p>
                </div>
                <div className=' w-full ' >
                    <div className=' w-[110px] h-[100px] flex justify-center items-center ' >
                        <img className=' w-[80%] ' src='/img/flag/5.png' alt='' />
                    </div>
                    <p className=' font-bold mt-3 text-2xl text-white ' >LOOZRverse</p>
                    <p className=' font-medium mt-2 !leading-normal ' >First-ever location-based immersive Metaverse (AR/VR) with gamified, incentivized and interactive experiences for businesses, events, and creators.</p>
                </div>
            </div>
            <div className=' bg-[#11151D] h-[180px] flex justify-center items-center ' >
                <p className=' font-medium text-xl text-white ' >“HOW IT WORKS” WORKING PERFECTLY HERE </p>
            </div>
        </div>
    )
} 