import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelectGenreCallback } from '../state/user/hooks/useAccount'
import { toastHttpError } from '../utils/httpHelper'
import Confetti from "../assets/svg/confetti.svg";
import Check from "../assets/svg/check.svg";
import ConnectTwitter from "../assets/svg/connectTwitter.svg";
import { RiTwitterXLine } from "react-icons/ri"

export default function SubmitTwitter() {

    const [selected, setSelected] = React.useState([] as any)
    const [isLoading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false)
    const { handleSelectGenre } = useSelectGenreCallback();

    const navigate = useNavigate()


    const handleSubmit = async () => {
        setLoading(true);
        try {
            const result = await handleSelectGenre({ genres: selected });
            setLoading(false);
            setShowModal(true)
        } catch (err: any) {
            setLoading(false);
            toastHttpError(err);
        }
    };

    const submit = () => {
        navigate("/feeds")
        setShowModal(false)
    }

    return (
        <div className=' w-full flex justify-center items-center' >
            {/* <div className='max-w-[700px] px-6 md:px-36 mx-0 md:mx-10 flex justify-center flex-col items-center py-24'>
                <img src={ConnectTwitter} alt="" className="w-[140px] mb-6" />
                <p className="font-bold text-xl md:text-[28px] text-white mb-8">
                    Connect X Account
                </p>
                <p className="text-base text-center font-medium mb-5">
                    Connect your X (formerly Twitter) account to Loozr for a unified experience.
                </p>
                <button onClick={() => handleSubmit()} className="mt-12 text-white disabled:text-muted font-medium text-base rounded-[12px] bg-gradient-ld disabled:bg-dark-800 mb-11 w-full md:w-[230px] focus:outline-none h-[48px]">
                    {isLoading ? "connecting..." : "Click to connect"}
                </button>
            </div> */}
            <div className='max-w-[700px] px-6 md:px-36 mx-0 md:mx-10 flex justify-center flex-col items-center py-24'>
                <div className='flex gap-4 items-center mb-8 md:mb-7'>
                    <p className="font-bold text-xl md:text-[28px] text-white">
                        Success!
                    </p>
                    <img src={Confetti} alt="" className="" />
                </div>
                <div className='flex items-center gap-6 p-3 rounded-[16px] bg-dark-800 w-[280px] mb-6'>
                    <img src={Check} alt="" className="w-10" />
                    <p className='text-base font-semibold text-white'>Username</p>
                </div>
                <div className='flex flex-col gap-4 items-left'>
                    <div className="flex gap-4 items-center">
                        <img src={Check} alt="" className="w-5" />
                        <p className='text-xs text-white'>Account successfully created!</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={Check} alt="" className="w-5" />
                        <p className='text-xs text-white'>Web3 ID generated.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={Check} alt="" className="w-5" />
                        <p className='text-xs text-white'>Wallet activated.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={Check} alt="" className="w-5" />
                        <p className='text-xs text-white'>QR code available for secure access.</p>
                    </div>
                </div>
                <button onClick={() => handleSubmit()} className="mt-12 text-white disabled:text-muted font-medium text-base rounded-full bg-gradient-ld disabled:bg-dark-800 mb-10 w-full md:w-[230px] focus:outline-none h-[48px]" >
                    {isLoading ? "Loading..." : "Continue"}
                </button>
                <div className='flex gap-4 items-center'>
                    <RiTwitterXLine size={25} />
                    <p className='text-xs text-white'>Share profile on X</p>
                </div>
            </div>
        </div>
    )
} 