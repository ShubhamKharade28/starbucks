import Image from 'next/image';
import holidayImg from '@/app/images/holiday_delights.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const HolidayDelight = () => {
    return (

        <div className="relative mx-7 px-7">
            <button className="absolute top-28 left-0 rounded-full p-3 z-20 bg-white"
                style={{ boxShadow: '0px 0px 8px rgba(0,0,0,0.6)'}}
            >
                <FaArrowLeftLong className="lightgreen-text" size={18}/>
            </button>
            <button className="absolute top-28 right-0 rounded-full p-3 z-20 bg-white"
                style={{ boxShadow: '0px 0px 8px rgba(0,0,0,0.6)'}}
            >
                <FaArrowRightLong className="lightgreen-text" size={20}/>
            </button>
            <div className="flex relative rounded-lg overflow-hidden"
                style={{
                    background: '#d40032',
                }}
            >
                <div className="h-full py-2">
                    <Image src={holidayImg} className="my-audo h-52 w-auto" />
                </div>
                <div className="flex justify-between px-14 py-7 items-end gap-20" style={{color: '#ffe4f8'}}>
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-extrabold">Holiday Delights</span>
                            <span className="font-semibold text-sm">This is the time for Holiday Cheers!
                            And Starbucks Rewards is here to give you more than just the <br/> holiday vibes.</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm">Purchases From</span>
                            <span className="font-bold">&#x20B9; 4000.<span className="text-sm">00</span></span>
                        </div>
                    </div>
                    <button className="rounded-full py-3 px-12 font-bold text-sm"
                        style={{background: '#007549'}}
                    >Know more</button>
                </div>
            </div>
        </div>
    )
}

export default HolidayDelight;

// dark pink : #d40032
// rupees : &#x20B9; 
// dark green : #007549