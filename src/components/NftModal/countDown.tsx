
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [showTime, setShowTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("10/27/2023 9:00:00 UTC");

        const interval = setInterval(() => {
            const now = new Date()
            const difference = target.getTime() - now.getTime()

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);


            if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
                setShowTime(true);
            }

        }, 1000)

        return () => clearInterval(interval)

    }, [])


    return (

        <div>

            {showTime ? (
                <>
                    <h1>Here&apos;s the NFT</h1>
                </>
            ) : (

                <>
                    <div className="pt-6">
                        <div className="uppercase flex">
                            <div className="flex flex-col items-center p-2.5 lg:p-2 border-t border-[#9EAAC0] mr-2 lg:mr-5 rounded-md w-[50px]">
                                <span className="text-lg pt-4 lg:text-[25px] sm:text-2xl font-black">{days}</span>
                                <span className="text-[12px] text-[#9EAAC0] font-medium pt-4 md:pt-4">Days</span>
                            </div>

                            <div className="flex flex-col items-center p-2.5 lg:p-2 border-t border-[#9EAAC0] mr-2 lg:mr-5 rounded-md w-[50px]">
                                <span className="text-lg pt-4 lg:text-[25px] sm:text-2xl font-black">{hours}</span>
                                <span className="text-[12px] text-[#9EAAC0] font-medium pt-4 md:pt-4">Hours</span>
                            </div>

                            <div className="flex flex-col items-center p-2.5 lg:p-2 border-t border-[#9EAAC0] mr-2 lg:mr-5 rounded-md w-[50px]">
                                <span className="text-lg pt-4 lg:text-[25px] sm:text-2xl font-black">{minutes}</span>
                                <span className="text-[12px]  text-[#9EAAC0] font-medium pt-4 md:pt-4">Minutes</span>
                            </div>

                            <div className="flex flex-col items-center p-2.5 lg:p-2 border-t border-[#9EAAC0] mr-2 ml-2 lg:mr-5 rounded-md w-[50px]">
                                <span className="text-lg pt-4 lg:text-[25px] sm:text-2xl font-black">{seconds}</span>
                                <span className="text-[12px] text-[#9EAAC0] font-medium pt-4 md:pt-4">Seconds</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CountdownTimer