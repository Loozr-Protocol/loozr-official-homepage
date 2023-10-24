import React from 'react'
import Arrow from "../assets/Arrow.svg";
import Heart from "../assets/Heart.svg";
import Chart from "../assets/Chart.svg";


export default function HowItWorks() {
    return (
        <>
            <div className=" w-full  md:px-0 px-6 " >
                <p className="txt font-medium text-base md:text-[17px] text-white mb-6">
                    How does Loozr work?
                </p>
                <div className="grid gap-5 lg:gap-10 pb-44 md:pb-28 ">
                    <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
                        <div className="bg-dark-700 py-7 px-7">
                            <img src={Arrow} alt="" className="w-10 h-10 mb-[19px]" />
                            <p className="txt font-medium text-sm text-white mb-2.5">
                                Launch Your Own Coin
                            </p>
                            <p className="txt text-muted text-xs font-normal">
                                Get tokenised by creating your Profile, adding your Songs &
                                Playlists, EPs, Albums, etc.
                            </p>
                        </div>
                        <div className="bg-dark-700 py-7 px-7">
                            <img src={Chart} alt="" className="w-10 h-10 mb-[19px]" />
                            <p className="txt font-medium text-sm text-white mb-2.5">
                                Buy, Sell & Trade
                            </p>
                            <p className="txt text-muted text-xs font-normal">
                                Fans can stream and trade artiste profiles & songs with Loozr
                                coins & explore the Metaverse music world.
                            </p>
                        </div>
                    </div>
                    <div className="bg-dark-700 py-7 px-7 md:w-full">
                        <img src={Heart} alt="" className="w-10 h-10 mb-[19px]" />
                        <p className="txt font-medium text-sm text-white mb-2.5">
                            Collective Wins!
                        </p>
                        <p className="txt text-muted text-xs font-normal">
                            When fans invest in a token, like Bitcoin, the price of that token
                            price rises. Artistes receive a percentage incentive from these
                            trades in addition to their streaming money which they split with
                            their token holders.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
