import React from 'react'
import CloseIcon from "../../assets/img/close.svg"
// import QrReader from 'react-qr-scanner'
import Photo from '../Photo' 
import { getIndividualProfile } from '../../state/user/userActions'
import { useDispatch, useSelector } from 'react-redux' 
import User from '../../config/constants/models/user'
import { AppState } from '../../state/store'
import { useLinkClickHandler, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';

type props ={
    close: Function, 
}

export default function QrcodeScanner({close}: props) { 

    const previewStyle = {
        height: 240,
        width: 900,
    }

    const currentProfileFromState = useSelector(
        (state: AppState) => state.user.currentProfile
      );
    const dispatch = useDispatch();
    const [data, setData] = React.useState("")
    const [result, setResult] = React.useState("Scanning...")
    const push = useNavigate(); 
    const [currentProfile, setCurrentProfile] = React.useState<User>();
    const user = useSelector((state: AppState) => state.user.userInfo);

    const handleScan =(item: any)=> { 
        console.log(item);
        if(item){ 
            setData(item?.text)
            setResult(item?.result)
        }
    }

    const handleError =(err: any)=> { 
        console.log(err); 
    }

    const GetUserInformation =async()=> { 
        dispatch(getIndividualProfile(data));
        setCurrentProfile(user);
    }

    React.useEffect(()=> {
        if(data){ 
           GetUserInformation()
        }
    }, [data]) 

    React.useEffect(() => {
        setCurrentProfile(currentProfileFromState);
    }, [currentProfileFromState]); 

    const closeHandler =()=> {
        push("/"+currentProfile?.accountDomain)
        close(false)
    }
    

    return (
        <div 
          className=" fixed inset-0 flex justify-center md:items-center md:overflow-y-hidden bg-black bg-opacity-40 z-[70] "
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

                        {/* <QrReader
                            delay={ 50 } 
                            facingMode="rear"
                            legacyMode={true}
                            // style={previewStyle}
                            onError={handleError}
                            onScan={handleScan}
                            /> */}

                        <QrReader  
                            scanDelay={0}
                            containerStyle={{width: '90vw' }}
                            onResult={(result: any, error) => {
                                if (!!result) {
                                    setData(result?.text)
                                    console.log(result?.text)
                                }

                                if (!!error) {
                                    console.info(error)
                                }
                            } }
                            className=' w-[90vw] md:w-full' constraints={{
                                facingMode:"environment"
                            }}                          
                        />
                            <p className=' font-medium text-sm mt-1 ' >{result}</p>
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
                            alt={currentProfile?.accountDomain}
                            userId={currentProfile?.accountId}
                            src={currentProfile?.photo}
                            className="h-[120px] md:h-[120px] text-4xl w-[120px] md:w-[120px] object-cover rounded-full "
                            style={{ border: "8px solid #141922" }}
                        /> 
                        <p className=' mt-4 font-semibold text-white ' >{currentProfile?.username}</p>
                        <p className=' font-medium text-[#536079] ' >Select what you’d want</p>
                        <button style={{background: "linear-gradient(180.44deg, #8369F4 27.17%, #F039E2 156.68%)"}} className=' font-semibold mt-12 text-white h-[55px] w-full ' >Send $LZR Coin</button>
                        <button onClick={()=> closeHandler()} className=' bg-[#141922] font-semibold mt-4 text-white h-[55px] w-full ' >View profile</button>
                    </div>
                </div>
            )}
        </div>
    )
} 