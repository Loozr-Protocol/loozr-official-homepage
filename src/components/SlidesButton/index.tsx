import React from 'react'

export default function Index(props: any) { 

    const scroll = (scrolloffset : any ) =>{
        props.position.current.scrollLeft += scrolloffset  
    }; 

    return (
        <div className="flex items-center"> 
          <div onClick={()=> scroll(-props.width)} style={{border:" 2px solid #141922"}} className=" w-7 h-7 cursor-pointer mr-2 rounded-xl flex justify-center items-center " >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33838 1.37012C7.33838 1.37012 1.68541 5.24904 1.68541 7.00039C1.68541 8.75174 7.33838 12.6274 7.33838 12.6274" stroke="#536079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div onClick={()=> scroll(props.width)} style={{border:" 2px solid #141922"}} className=" w-7 h-7 cursor-pointer ml-2 rounded-xl flex justify-center items-center " >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66211 12.6299C1.66211 12.6299 7.31508 8.75096 7.31508 6.99961C7.31508 5.24826 1.66211 1.37259 1.66211 1.37259" stroke="#536079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
    )
} 