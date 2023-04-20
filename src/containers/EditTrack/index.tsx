import { Checkbox, Input, Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import MusicUploadComponent from '../MusicUploadComponent';

export default function EditTrack() {
    const [showMusicModal, setShowMusicModal] = React.useState(false);
    return (
        <div className=' w-full flex flex-col py-20 px-6 items-center font-medium ' >
            <div className=' w-[470px] flex flex-col gap-4 ' >
                <div> 
                    <p className=' text-[25px] font-bold text-white ' >Edit track details</p>
                    <p className=' mt-1 text-[#536079] text-xs font-medium ' >Only tokenize music you own or have permission to distribute. Uploading <span className=' text-[#FFCD43] ' >"samson.mp3" (3:69)</span></p>
                </div>
                <div className=' mt-6 w-full flex gap-4 ' >
                    <div className=' w-fit ' > 
                        <div className=' w-[180px] h-full bg-[#12161F] flex flex-col px-4 pb-4 ' >
                            <button className=' mt-auto w-full rounded-[50px] bg-[#536079] font-semibold !text-[12px] h-[36px] text-white ' >Add artwork </button>
                        </div>
                    </div>
                    <div className=' w-full gap-4 flex flex-col ' > 
                        <Input borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="$MUSIC COIN NAME *" height="50px" />
                        <Input borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="Enter song title *" height="50px" />
                        <Select borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="Choose genre *" height="50px" />
                    </div>
                </div>
                <div className=' w-full ' > 
                    <Textarea borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="Add track description (optional) " height="99px"/>
                </div> 
                <div className=' w-full flex gap-4 ' > 
                    <Select borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="Select mood" height="50px" />
                    <Input borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="Featuring (optional)" height="50px" />
                </div>
                <div className=' mt-6 ' > 
                    <p className=' text-[20px] font-bold text-white ' >Monetization</p>
                    <p className=' mt-1 text-[#536079] text-xs font-medium ' >Determine the percentage of Founder Reward that you wish to receive for each sale of your music coin, as well as the percentage of reward for your coin holders.</p>
                </div>
                <div className=' w-full flex gap-4 mt-2 ' >  
                    <div className=' w-full ' > 
                        <p className=' mb-2 text-sm text-white font-medium ' >Founders Reward (%)</p>
                        <Input borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="10% ownership" height="50px" />
                    </div>
                    <div className=' w-full ' > 
                        <p className=' mb-2 text-sm text-white font-medium ' >Your Track Identifier</p>
                        <Input borderRadius="0px" bgColor="#12161F" fontSize="13px" borderWidth="0px" focusBorderColor='#12161F' placeholder="ISRC code (optional)" height="50px" />
                    </div>
                </div>
                <div className=' w-full flex gap-2  mt-4' >
                    <Checkbox />
                    <p className=' font-normal text-xs text-white ' >Click on checkbox to accept Terms of Service and Policy</p>
                </div>
                <button onClick={()=> setShowMusicModal(true)} className="text-sm only:txt font-semibold py-[16px] mt-4 bg-s-gradient w-[352px] mb-10 outline-none focus:outline-none">TOKENIZE TRACK</button>
            </div>

            {showMusicModal && ( 
                <div  className=" fixed inset-0 flex justify-center items-center md:overflow-y-hidden bg-black bg-opacity-90 z-[70] ">
                    <MusicUploadComponent close={setShowMusicModal} tab={true} />
                </div>
            )}
        </div>
    )
}
