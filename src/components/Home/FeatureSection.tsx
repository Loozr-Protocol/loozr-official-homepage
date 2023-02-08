import React from 'react'

export default function FeatureSection() {
    return ( 
        <> 
            <div className=' w-full bg-[#8369F4] !text-[#0C0F15] lg:pl-12 py-8 lg:py-0 lg:pt-20 relative ' > 
                <div className=" ">
                    <p className="wow fadeIn !text-[#0C0F15] !text-5xl !font-bold " data-wow-delay=".5s">
                        FEATURES 
                    </p>
                <p className=" font-medium !text-[#0C0F15] text-lg" >Loozr empowers creators through various services, which they can utilize via the following features:</p>
                    {/* <h3 className="wow text-[#53607940]" data-splitting>
                        Features!
                    </h3> */}
                </div>
                <div className=' w-full  grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-20 ' >
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Instant Tokenization & Trading</p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Investible music for all. </p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Community-driven ownership </p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Take control of your content, launch your own independent economy, and succeed together. </p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Transparency & smart contracts</p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Decentralizing finance, contracts, and establishing a completely open royalty and streaming accounting system.</p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Secure and scalable </p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Transactions are carried out using the NEAR Protocol, a reliable and secure L1 with sharding support.</p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Launchpad for creators </p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Web3-native crowdinvesting platform that allows you to start, fund, and trade the Next Big Talent.</p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Lightning fast and self-sustainable</p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Instant payouts, better monetization, and directly rewarding artists, fans, and creators.</p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Frictionless user experience </p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Web2 frontend feel, Web3 backend integration — No knowledge of crypto needed.</p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Unlimited music distribution</p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Distribute with one click to over 220+ stores globally, including Tiktok & Youtube. Decentralize your finances and stats on-chain. Keep 100% of your song's royalties and rights.</p>
                    </div>
                    <div className=' w-full ' > 
                        <p className=' font-bold mt-3 text-2xl !text-[#0C0F15] ' >Mining via music streaming</p>
                        <p className=' font-medium mt-2 !leading-normal !text-[#0C0F15] ' >Loozr's <span className=' text-white ' >#Listen2Earn</span> model allows music lovers to earn tokens whenever their favourite music is played.</p>
                    </div>
                </div> 
                <div className=' w-full flex justify-end ' > 
                    <img className='  w-[80%] ' src='/img/Feature.png' alt='' />
                </div>
            </div>
            <div className=' px-12 my-28  ' > 
                <div className=' bg-[#11151D] h-[140px] flex lg:justify-start justify-center pl-[140px] items-center ' >
                    <p className=' font-medium text-xl text-white ' >ROADMAP WORKING PERFECTLY </p>
                </div>
                <div className=' bg-[#11151D] mt-4 h-[140px] flex lg:justify-start justify-center pl-[140px] items-center ' >
                    <p className=' font-medium text-xl text-white ' >“TEAM”  WORKING PERFECTLY </p>
                </div>
            </div>
        </>
    )
}
