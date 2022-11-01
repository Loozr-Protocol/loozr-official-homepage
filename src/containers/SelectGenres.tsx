import React from 'react'

export default function SelectGenres() {

    const genres = ["Acoustic", "Ambient", "Afro", "Amapiano", "Blues", "Country", "Classical", "Electric", "Emo", "Folk", "Hardcore", "Hip-hop", "Indie", "Jazz", "Latin", "Metal", "Pop", "Pop punk", "Punk", "Raggae", "R&B", "Rock", "Soul", "World"]
    const [selected, setSelected] = React.useState([] as any)

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
        // const clone = [...selected]
        // clone.push(item)
        // setSelected(clone)
    }

    return (
        <div className=' w-full flex py-24 justify-center items-center  ' >
            <div className=' w-auto bg-[#12161F] px-36 mx-10 flex justify-center flex-col items-center py-14' > 
                <p className="font-bold text-4xl md:text-5xl text-white mb-4 md:mb-7">
                    Select your genres
                </p> 
                <p className="text-base md:text-xl text-[#536079] mb-7">
                    <span className="mt-4">
                        Choose your favourite genres 
                    </span>
                </p>
                <div className=' grid grid-cols-4 gap-4 mb-[27px] mt-4 gap-y-6  ' >
                    {genres.slice(0, 4).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div  className=' grid grid-cols-5 gap-4 mb-[27px] gap-y-[27px]'> 
                    {genres.slice(4, 14).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div  className=' grid grid-cols-4 gap-4 mb-[27px] gap-y-[27px]'> 
                    {genres.slice(14, 22).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div  className=' grid grid-cols-2  gap-4 mb-[27px] gap-y-[27px]'> 
                    {genres.slice(22, 24).map((item: any) => {
                        return( 
                            <button key={item} onClick={()=> ClickHandler(item)} className={selected.includes(item) ? ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#8369F4] ' : ' w-[131px] h-[43px] rounded-[35px] items-center flex justify-center bg-[#222A3B] '} >
                                {item}
                            </button>
                        )
                    })}
                </div>

                <button
                    className="py-4 mt-14 text-white disabled:text-muted font-medium text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-[450px] focus:outline-none h-[74px]"
                    // onClick={handleLaunchToken}
                    // disabled={isLoading || !isAccountAvailable}
                >
                    {/* {isLoading ? "Reserving username..." : "Reserve My Name"} */}
                    Continue 
                </button>
            </div>
        </div>
    )
} 