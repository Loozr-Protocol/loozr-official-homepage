import React from 'react'
import { useNavigate } from 'react-router-dom'
import SuggestedUser from "../components/SuggestedUser"
import { useSelectGenreCallback } from '../state/user/hooks/useAccount'
import { toastHttpError } from '../utils/httpHelper'
import Confetti from "../assets/svg/confetti.svg";
import Check from "../assets/svg/check.svg";
import { RiTwitterXLine } from 'react-icons/ri'

export default function SubmitTwitter() {

    const [selected, setSelected] = React.useState([] as any)
    const [isLoading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false)
    const { handleSelectGenre } = useSelectGenreCallback();

    const navigate = useNavigate()

    const ClickHandler = (item: any) => {
        if (selected.includes(item)) {
            const clone = [...selected];
            const index = clone.indexOf(item);
            clone.splice(index, 1);
            setSelected(clone);
        } else {
            const clone = [...selected, item];
            setSelected(clone);
        }
    }

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
        navigate("/explore")
        setShowModal(false)
    }

    return (
        <div className=' w-full flex justify-center items-center  ' >
            <div className='max-w-[700px] px-6 md:px-36 mx-0 md:mx-10 flex justify-center flex-col items-center py-24'>
                <img src={Check} alt="" className="w-16 mb-6" />
                <div className='flex gap-4 items-center mb-6 md:mb-7'>
                    <p className="font-bold text-xl md:text-[28px] text-white">
                        Success!
                    </p>
                    <img src={Confetti} alt="" className="" />
                </div>
                <p className="text-xs text-center font-medium text-[#536079] mb-5">
                    <span className="">
                        Successfully create your domain name, your wallet's, profile's, or brand's face. Effortlessly manage tokens with this unique identifier.
                    </span>
                </p>
                <button
                    onClick={() => handleSubmit()}
                    className="  mt-8 text-[#62C0FF] flex gap-3 items-center justify-center font-medium text-base rounded-full bg-dark-600 w-full md:w-[230px] focus:outline-none h-[48px]"
                ><RiTwitterXLine size={25} />  Share a tweet!</button>
                <button
                    onClick={() => handleSubmit()}
                    className="  mt-6 text-white disabled:text-muted font-medium text-base rounded-full bg-gradient-ld disabled:bg-dark-800 mb-11 w-full md:w-[230px] focus:outline-none h-[48px]"
                >
                    {isLoading ? "Loading..." : "Continue"}
                </button>
            </div>


        </div>
    )
} 