import { motion } from 'framer-motion'
import React from 'react'

export default function FAQ() {

    const [tab, setTab] = React.useState(0)
    
    const clickHandler =(item: number)=> {
        if(tab === item) { 
            setTab(-1)
        } else { 
            setTab(item)
        }
    }

    return (
        <div className=' w-full px-12 flex pb-40 flex-col items-center ' >
            <div className="sec-head custom-font text-center">
                <h6 id="gradenttext" className="wow fadeIn !font-bold " data-wow-delay=".5s">
                    NEED HELP WITH ANSWERS?
                </h6>
                <h3 className="wow" data-splitting>
                    FREQUENTLY ASKED!
                </h3>
                <span className="tbg">Answers</span>
            </div>
            <div className=' w-full flex mt-6 ' >
                <div className=' w-full flex justify-center pr-10 ' >
                    <p className=' max-w-[450px] text-white font-medium  ' >Haven’t found what you’re looking for?
                        Try emailing <span  id="gradenttext" >support@loozr.io</span> — we’re here to help.</p>
                </div>
                <div className=' w-full flex justify-center pl-10 text-white ' >
                    <div className=' w-[600px] ' >
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >What is Loozr? </p>
                                <svg onClick={()=> clickHandler(0)} className={tab === 0 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 0 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 ' >Token-powered creator economy platform that allows anyone to invest in and profit from music and content creators' success per second.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >How do I get my LNS?</p>
                                <svg onClick={()=> clickHandler(1)} className={tab === 1 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 1 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 ' >Token-powered creator economy platform that allows anyone to invest in and profit from music and content creators' success per second.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >How do I become an artists? </p>
                                <svg onClick={()=> clickHandler(2)} className={tab === 2 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 2 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 ' >Token-powered creator economy platform that allows anyone to invest in and profit from music and content creators' success per second.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >How to invest in an artist? </p>
                                <svg onClick={()=> clickHandler(3)} className={tab === 3 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 3 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 ' >Token-powered creator economy platform that allows anyone to invest in and profit from music and content creators' success per second.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >Is Loozr limited to only musicians? </p>
                                <svg onClick={()=> clickHandler(4)} className={tab === 4 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 4 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 ' >Token-powered creator economy platform that allows anyone to invest in and profit from music and content creators' success per second.</motion.p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 