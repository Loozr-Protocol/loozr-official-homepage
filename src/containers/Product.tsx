import React from 'react'
import "../mystyle.scss";

export default function Product() {
    return (
        <div className=' w-full h-full flex justify-center flex-col px-20 py-8 lg:py-32 relative ' >
            <div className="sec-head  ">
                <h6 id="gradenttext" className="wow fadeIn !mx-auto !text-center leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
                    FLAGSHIP SOLUTIONS
                </h6>
                <h3 className="wow !font-bold !text-white mt-8 !leading-[1.1] !text-4xl" data-splitting>
                    LOOZR PRODUCTS!
                </h3>
                <span className="tbg !absolute !left-auto !right-auto ">Product!</span>
            </div>
            <p className="  text-[15px] mx-auto text-center !font-medium -mt-14 mb-10 text-white lg:max-w-3xl " >Revolutionizing the music industry with 5 self-sustaining standalone solutions that bridge economic and entertainment services in the music industry.</p>
            <button className=' h-[50px] w-fit mx-auto px-9 rounded-full border !border-[#12161e] text-white mt-5 ' >Learn more</button>
            <ul className="timeline">
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail !text-xl !font-semibold !px-12 flex justify-center items-center ">1. MUSIC TOKEN LAUNCHPAD</p>
                        <p className=' text-2xl !font-bold ' >World’s first tokenized, collaborative and investible songs.</p>
                        <div className=' flex  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Trade2Earn music tokens you love.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Realtime fractional ownership of royalty shares on-chain.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Turn your fans from spectators to influencers, stakeholders, record labels and investors.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >No Web3 knowledge necessary, 5 seconds no-code launchpad.</p>
                        </div>
                            <img className=' w-full mt-4 ' alt='' src='/img/product.png' />
                    </div>
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail !text-xl !font-semibold !px-12 flex justify-center items-center ">MUSIC</p>
                        <p className=' text-2xl !font-bold ' >World</p>
                        <div className=' flex  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Trade2Earn</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Realtime</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Turn</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >No</p>
                        </div>
                            <img className=' w-full mt-4 ' alt='' src='/img/product.png' />
                    </div>
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail !text-xl !font-semibold !px-12 flex justify-center items-center ">2. AUDIO/VIDEO STREAMING </p>
                        <p className=' text-2xl !font-bold ' >Inventing an incentive-based experience for streaming video/audio contents.</p>
                        <div className=' flex  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >The new Listen2Earn model.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Real time royalty payouts in $LZR tokens.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Shared streaming revenue with token holders (fans) - reward your listeners.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Immutable and transparent streaming stats.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >No Ads!</p>
                        </div>
                            <img className=' w-full mt-4 ' alt='' src='/img/product.png' />
                    </div> 
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail !text-xl !font-semibold !px-12 flex justify-center items-center ">3. MUSIC NFT MARKETPLACE</p>
                        <p className=' text-2xl !font-bold ' >Next generation of interoperable music NFTs at its finest - Music NFT Player.</p>
                        <div className=' flex  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >With the opportunity to profit from both streams & music trading, Loozr is the ultimate Music NFT bid/sales platform.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Launch, purchase, sell, and interconnect all of your Music NFTs from other platforms, which can then be streamed and commercialised.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Collectors can liquify their favourite Music NFTs to generate streaming income and potential future sales.</p>
                        </div> 
                            <img className=' w-full mt-4 ' alt='' src='/img/product.png' />
                    </div> 
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail !text-xl !font-semibold !px-12 flex justify-center items-center ">4. SOCIALFI</p>
                        <p className=' text-2xl !font-bold ' >Diversifying revenue streams for music and content creators - Crypto for Communities.</p>
                        <div className=' flex  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >The new Fan2Earn model.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Launch your own coin, independent economy, and grow with your community - all on your own terms. </p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Turn your fans from spectators into influencers and stakeholders.</p>
                        </div> 
                            <img className=' w-full mt-4 ' alt='' src='/img/product.png' />
                    </div> 
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail !text-xl !font-semibold !px-12 flex justify-center items-center ">MUSIC</p>
                        <p className=' text-2xl !font-bold ' >5. LOOZRVERSE</p>
                        <div className=' flex  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >First-ever location-based immersive Metaverse (AR/VR) with gamified, incentivized and interactive experiences for businesses, events, and creators.</p>
                        </div>
                        <div className=' flex -mt-3  ' >
                            <div className=' w-fit mr-3 mt-[11px] ' >
                                <div className=' w-[5px] h-[5px] rounded-full bg-white ' />
                            </div>
                            <p className=' !font-medium text-base ' >Unleash imagination, hang out with celebrities, friends, fans, experience music, festivals, concerts and immerse yourself in the virtual world.</p>
                        </div> 
                        <button style={{background: "linear-gradient(237.71deg, #8369F4 24.07%, #F039E2 116.61%)"}} className=' h-[50px] w-fit flex justify-center items-center px-9 rounded-full text-white mt-5 ' >
                            <svg className=' mr-3 ' width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0912 8.18242C17.958 8.29043 15.6074 9.67537 15.6074 12.7549C15.6074 16.3168 18.5985 17.577 18.688 17.6082C18.6742 17.685 18.2128 19.3339 17.111 21.0141C16.1285 22.4926 15.1024 23.9688 13.5414 23.9688C11.9804 23.9688 11.5787 23.0207 9.77671 23.0207C8.02062 23.0207 7.39624 24 5.96841 24C4.54058 24 3.54432 22.6319 2.39884 20.9517C1.07202 18.9787 0 15.9136 0 13.0045C0 8.33843 2.90156 5.86379 5.75722 5.86379C7.27457 5.86379 8.53942 6.90549 9.49207 6.90549C10.3988 6.90549 11.8129 5.80138 13.5391 5.80138C14.1933 5.80138 16.544 5.86379 18.0912 8.18242ZM12.7196 3.82598C13.4335 2.94029 13.9385 1.71137 13.9385 0.482448C13.9385 0.312031 13.9248 0.139214 13.8949 0C12.7334 0.0456046 11.3515 0.808881 10.5182 1.81938C9.86394 2.59706 9.25333 3.82598 9.25333 5.07171C9.25333 5.25893 9.28317 5.44614 9.29694 5.50615C9.3704 5.52055 9.48977 5.53735 9.60914 5.53735C10.6513 5.53735 11.9621 4.80768 12.7196 3.82598Z" fill="white"/>
                            </svg>
                            iOS Demo
                        </button>
                            <img className=' w-full mt-4 ' alt='' src='/img/producthouse.png' />
                    </div>
                </li> 
            </ul>  
        </div>
    )
} 