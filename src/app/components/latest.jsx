"use client";
import Image from 'next/image';
import vegImg from '@/app/images/veg.png';
import offercards from '@/app/utils/offercards';
import { useHorinzontalScroll } from '@/app/utils/useHorizontalScroll';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const LatestOfferings = ({setPopup, setCardInfo}) => {
    const scrollRef = useHorinzontalScroll();
    return (
        <div className="flex flex-col gap-5 px-16 prevent-select relative">
            <button className="absolute top-64 left-12 rounded-full p-3 z-20 bg-white"
                style={{ boxShadow: '0px 0px 8px rgba(0,0,0,0.6)'}}
            >
                <FaArrowLeftLong className="lightgreen-text" size={18}/>
            </button>
            <button className="absolute top-64 right-10 rounded-full p-3 z-20 bg-white"
                style={{ boxShadow: '0px 0px 8px rgba(0,0,0,0.6)'}}
            >
                <FaArrowRightLong className="lightgreen-text" size={20}/>
            </button>

            <h2 className="darkgreen-text text-2xl font-bold">Latest Offerings</h2>
            <div className="flex gap-8 overflow-x-scroll py-5 px-6 scroll-smooth hidden-scroll"
                ref={scrollRef}
            > 
                {/* hide scrollbar */}
            {
                offercards.map((item) => {
                    const { src, title, desc, description, cals, price } = item;
                    return (
                        <OfferCard 
                            src={src}
                            title={title}
                            desc={desc}
                            description={description}
                            cals={cals}
                            price={price} 
                            key={title}
                            setPopup={setPopup}
                            setCardInfo={setCardInfo}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

const OfferCard = ({src,title,cals,description,desc,price,setPopup,setCardInfo}) => {
    const shortDesc = desc.slice(0,100);

    return (
        <div className="flex flex-col w-min rounded-xl lightgrey-bg grey-boxshadow"
            onClick={() => {
                setCardInfo({
                    src,title,cals,description,desc,price
                });
                setPopup(true);
            }}
        >
            <div className="w-80 h-40 flex items-center justify-center rounded-t-xl overflow-hidden">
                <Image src={src} className='h-full w-full object-cover'/>
            </div>
            <div className="flex flex-col w-full py-2 h-56 px-5 justify-around gap-5">
                <div className="flex flex-col gap-0.5">
                    <Image src={vegImg} width={15} height={15}/>
                    <span className="text font-bold opacity-80">{title}</span>
                    <span className="text-xs font-extralight opacity-80">{cals}</span>
                    <span className="text-xs font-extralight opacity-70">{description}</span>
                </div>
                <div className="text-xs font-extralight opacity-80">{shortDesc}...</div>
                <div className="flex justify-between w-full">
                    <span className="font-bold"> &#x20B9; {price.slice(0,3)} 
                        <span className="text-sm">{price.slice(3)}</span>
                    </span>
                    <button className="hover-darkgreen text-sm font-bold py-1 px-4 rounded-full text-white">Add Item</button>
                </div>
            </div>
        </div>
    )
}

export default LatestOfferings;