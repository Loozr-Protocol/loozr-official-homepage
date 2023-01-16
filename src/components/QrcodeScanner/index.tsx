import React from 'react'
import CloseIcon from "../../assets/img/close.svg"
import QrReader from 'react-qr-scanner'
import Photo from '../Photo' 
import { getIndividualProfile } from '../../state/user/userActions'

type props ={
    close: Function, 
}

export default function QrcodeScanner({close}: props) { 

    const previewStyle = {
        height: 240,
        width: 320,
    }

    const [data, setData] = React.useState("")
    const [userInfo, setUserInfo] = React.useState({ } as any)

    const handleScan =(item: any)=> {
        console.log(item); 
        setData(item)
    }

    const GetUserInformation =async()=> {
        const request = await getIndividualProfile(data)
        console.log(request)
        setUserInfo(request)
    }

    React.useEffect(()=> {
        if(data){ 
           GetUserInformation()
        }
    }, [data])

    return (
        <div 
          className=" fixed inset-0 flex justify-center items-center md:overflow-y-hidden bg-black bg-opacity-40 z-[70] "
        >
            {!data && ( 
                <div className=" w-full md:w-[360px] md:h-auto relative z-[120] h-screen rounded-2xl bg-[#12161F]">
                    <div className=" w-full flex items-center border-b border-[#222A3B] justify-between py-4 px-6 ">
                        <p className="  font-medium text-white">QR Scanner</p>
                        <button
                            onClick={() => close(false)}
                            className=" font-medium text-xs  w-[16px] outline-none rounded-lg "
                        >
                            <img src={CloseIcon} className=' object-contain ' alt="close" />
                        </button>
                    </div>
                    <div className=' w-full flex flex-col h-full items-center py-8 px-4 ' > 

                        <QrReader
                            // delay={
                            //     delay: 100,
                            //     result: 'No result',
                            // } 
                            style={previewStyle}
                            // onError={this.handleError}
                            onScan={handleScan}
                            />
                    </div>
                </div>
            )}
            {data && ( 
                <div className=" w-full md:w-[360px] md:h-auto relative z-[120] h-screen rounded-2xl bg-[#12161F]">
                    <div className=" w-full flex items-center border-b border-[#222A3B] justify-between py-4 px-6 ">
                        <p className="  font-medium text-white">Preview</p>
                        <button
                            onClick={() => close(false)}
                            className=" font-medium text-xs  w-[16px] outline-none rounded-lg "
                        >
                            <img src={CloseIcon} className=' object-contain ' alt="close" />
                        </button>
                    </div>
                    <div className=' w-full flex flex-col h-full items-center py-8 px-4 ' > 
                        <Photo
                            // alt={userInfo?.accountDomain}
                            // userId={userInfo?.accountId}
                            // src={userInfo?.photo}
                            className="h-[120px] md:h-[120px] text-4xl w-[120px] md:w-[120px] object-cover rounded-full "
                            style={{ border: "8px solid #141922" }}
                        /> 
                        <p className=' mt-4 font-semibold text-white ' >{userInfo?.username}</p>
                        <p className=' font-medium text-[#536079] ' >Select what you’d want</p>
                        <button style={{background: "linear-gradient(180.44deg, #8369F4 27.17%, #F039E2 156.68%)"}} className=' font-semibold mt-12 text-white h-[55px] w-full ' >Send $LZR Coin</button>
                        <button className=' bg-[#141922] font-semibold mt-4 text-white h-[55px] w-full ' >Send $LZR Coin</button>
                    </div>
                </div>
            )}
        </div>
    )
} 