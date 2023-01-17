import React from 'react'
import QRCode from 'react-qr-code'
import CloseIcon from "../../assets/img/close.svg"
import Photo from '../Photo'

type props ={
    close: Function,
    userInfo: any
}

export default function QrcodeModal({close, userInfo}: props) {
    return (
        <div 
          className=" fixed inset-0 flex justify-center md:items-center md:overflow-y-hidden bg-black bg-opacity-40 z-[70] "
        >
            <div className=" w-full md:w-[360px] md:h-auto relative z-[120] h-screen rounded-2xl bg-[#12161F]">
                <div className=" w-full flex items-center border-b border-[#222A3B] justify-between py-4 px-6 ">
                    <p className="  font-medium text-white">QR Code</p>
                    <button
                        onClick={() => close(false)}
                        className=" font-medium text-xs  w-[16px] outline-none rounded-lg "
                    >
                        <img src={CloseIcon} className=' object-contain ' alt="close" />
                    </button>
                </div>
                <div className=' w-full flex flex-col items-center py-8 px-4 ' > 
                    <Photo
                        alt={userInfo?.accountDomain}
                        userId={userInfo?.accountId}
                        src={userInfo?.photo}
                        className="h-[80px] md:h-[80px] text-4xl w-[80px] md:w-[80px] object-cover rounded-full "
                        style={{ border: "8px solid #141922" }}
                    /> 
                    <p className=' mt-4 font-semibold text-xl text-white ' >{userInfo?.username}</p>
                    <p className=' font-medium text-[#536079] ' >Web3 QR Account</p>
                    <div className=' w-fit h-fit p-[12px] my-2 bg-white rounded-lg ' > 
                        <QRCode 
                            className=' w-full h-[184px] '
                            value={userInfo?.accountDomain+""}
                            viewBox={`0 0 256 256`}
                            />
                    </div>
                    <p className=' text-center font-medium px-[12px] leading-[20px] text-[14px] mt-2 text-[#536079] ' >Your friends can scan this code to visit your Loozr profile and send you $LZR coins.</p>
                    <button style={{background: "linear-gradient(180.44deg, #8369F4 27.17%, #F039E2 156.68%)"}} className=' font-semibold mt-8 mb-4 text-white h-[55px] w-full ' >Save QR Code</button>
                </div>
            </div>
        </div>
    )
} 