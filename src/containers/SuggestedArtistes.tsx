import React from 'react'

export default function SuggestedArtistes() {
    return (
        <div className=' w-full flex py-24 justify-center items-center  ' >
            <div className=' w-[436px] rounded-2xl bg-[#12161F]' >
                <div className=' w-full flex items-center border-b border-[#222A3B] justify-between py-8 px-9 ' >
                    <p className="font-bold text-xl text-white">
                        Select your genres
                    </p> 
                    <button className=' font-semibold bg-[#8369F4] w-[99px] h-9 rounded-lg ' >Done</button>
                </div>
                <div className=' w-full px-9 py-10 h-[650px] overflow-y-auto ' >
                    <div className=' w-full flex justify-between my-3 items-center ' > 
                        <div className=' w-16 h-16 rounded-full bg-red-600 border-[6px] border-[#222A3B] ' />
                        <div className=' ml-6 ' >
                            <div className=' flex -mt-1 items-center ' > 
                                <p className=' text-[17px] font-semibold ' >Nathan Jose</p>
                            </div>
                            <div className=' flex -mt-1 items-center ' > 
                                <p className=' text-[12px] font-semibold text-[#536079] ' >$HARTY</p>
                                <div className=' w-1 h-1 rounded-full bg-[#536079] mx-3 ' />
                                <p className=' text-[12px] font-semibold text-[#536079] ' >$3,001.99</p>
                            </div>
                        </div> 
                        <p className=' text-[14px] ml-auto font-bold text-[#8369F4] cursor-pointer ' >Follow</p>
                    </div>
                    <div className=' w-full flex justify-between my-3 items-center ' > 
                        <div className=' w-16 h-16 rounded-full bg-red-600 border-[6px] border-[#222A3B] ' />
                        <div className=' ml-6 ' >
                            <div className=' flex -mt-1 items-center ' > 
                                <p className=' text-[17px] font-semibold ' >Nathan Jose</p>
                            </div>
                            <div className=' flex -mt-1 items-center ' > 
                                <p className=' text-[12px] font-semibold text-[#536079] ' >$HARTY</p>
                                <div className=' w-1 h-1 rounded-full bg-[#536079] mx-3 ' />
                                <p className=' text-[12px] font-semibold text-[#536079] ' >$3,001.99</p>
                            </div>
                        </div> 
                        <p className=' text-[14px] ml-auto font-bold text-[#536079] cursor-pointer ' >Following</p>
                    </div>
                </div>
            </div> 
        </div>
    )
} 