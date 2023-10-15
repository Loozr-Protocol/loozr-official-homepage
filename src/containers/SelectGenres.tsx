import React from 'react'
import { useNavigate } from 'react-router-dom'
import SuggestedUser from "../components/SuggestedUser" 
import { useSelectGenreCallback } from '../state/user/hooks/useAccount'
import { toastHttpError } from '../utils/httpHelper'

export default function SelectGenres() {

    const genres = ["Acoustic", "Ambient", "Afro", "Amapiano", "Blues", "Country", "Classical", "Electric", "Emo", "Folk", "Hardcore", "Hip-hop", "Indie", "Jazz", "Latin", "Metal", "Pop", "Pop punk", "Punk", "Raggae", "R&B", "Rock", "Soul", "World"]
    const [selected, setSelected] = React.useState([] as any)
    const [isLoading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false)
    const { handleSelectGenre } = useSelectGenreCallback(); 

    const navigate = useNavigate()

    const ClickHandler =(item: any)=> {
        if (selected.includes(item)) {
            const clone = [...selected];
            const index = clone.indexOf(item); 
            clone.splice(index, 1); 
            setSelected(clone); 
        }else{ 
          const clone = [...selected, item];
          setSelected(clone); 
        } 
    } 

    const handleSubmit = async () => { 
        setLoading(true);
        try {
            const result = await handleSelectGenre({genres : selected});
            setLoading(false); 
            setShowModal(true)
        } catch (err: any) {
            setLoading(false);
            toastHttpError(err);
        }
    };  

    const submit =()=> {
        navigate("/explore")
        setShowModal(false)
    }

    return (
        <div className=' w-full flex justify-center items-center  ' >
            <div className=' w-full bg-[#12161F] px-6 md:px-36 mx-0 md:mx-10 flex justify-center flex-col items-center py-14' > 
                <p className="font-bold text-2xl md:text-[35px] text-white mb-2 md:mb-7">
                    Select your genres
                </p> 
                <p className="text-base font-medium text-[#536079] mb-5">
                    <span className="">
                        Choose your favorite genres 
                    </span>
                </p>
                <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 mb-[27px] mt-4 gap-y-6  ' >
                    {genres.slice(0, 4).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[110px] h-[35px] text-[13px]  rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[110px] h-[35px] text-[13px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div  className=' grid grid-cols-2 md:grid-cols-5 gap-4 mb-[27px] gap-y-[27px]'> 
                    {genres.slice(4, 14).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[110px] h-[35px] text-[13px]  rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[110px] h-[35px] text-[13px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div  className=' grid grid-cols-2 md:grid-cols-4 gap-4 mb-[27px] gap-y-[27px]'> 
                    {genres.slice(14, 22).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[110px] h-[35px] text-[13px]  rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[110px] h-[35px] text-[13px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div  className=' grid grid-cols-2  gap-4 mb-[27px] gap-y-[27px]'> 
                    {genres.slice(22, 24).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[110px] h-[35px] text-[13px]  rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[110px] h-[35px] text-[13px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>

                <button
                    onClick={()=> handleSubmit()}
                    disabled={selected.length === 0 ? true : false}
                        className="  mt-14 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full md:w-[380px] focus:outline-none h-[55px]" 
                    >
                    {isLoading ? "Loading..." : "Continue"} 
                </button>
            </div>

            {showModal && (
                <div className=" fixed inset-0 flex justify-center items-center md:overflow-y-hidden bg-black bg-opacity-90 z-[70] " > 
                    <div className=' w-full md:w-[360px] md:h-auto relative z-[80] h-screen rounded-2xl bg-[#12161F]' >
                        <div className=' w-full flex items-center border-b border-[#222A3B] justify-between py-4 px-6 ' >
                            <p className="  font-medium text-white">
                                Suggested Users for you
                            </p> 
                            <button onClick={()=> submit()} className=' font-medium text-xs bg-[#8369F4] w-[65px] h-7 rounded-lg ' >Done</button>
                        </div>
                        <SuggestedUser />
                    </div> 
                </div>
            )}
        </div>
    )
} 