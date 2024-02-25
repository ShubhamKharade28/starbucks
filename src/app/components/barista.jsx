import Image from 'next/image';
import milkshakeImg from '@/app/images/milkshake.png';
import vegImg from '@/app/images/veg.png';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Barista = () => {
    return (
        <div className="flex flex-col px-28 py-8 grey-bg w-full">
            <div className="w-full flex justify-between items-center py-3 px-4">
                <span className="darkgreen-text text-2xl font-bold">Barista Recommends</span>
                <span className="lightgreen-text text-sm font-bold">View Menu</span>
            </div>
            <div className="flex gap-8 items-center py-4 relative px-8">
                <button className="absolute top-28 left-0 rounded-full p-3 z-10 bg-white"
                    style={{ boxShadow: '0px 0px 7px rgba(0,0,0,0.5)'}}
                >
                    <FaArrowLeftLong className="lightgreen-text" size={18}/>
                </button>
                <button className="absolute top-28 right-0 rounded-full p-3 z-10 bg-white"
                    style={{ boxShadow: '0px 0px 7px rgba(0,0,0,0.5)'}}
                >
                    <FaArrowRightLong className="lightgreen-text" size={20}/>
                </button>

                <div className="flex flex-col p-5 px-7 gap-4 bg-white rounded-lg w-76"
                    style={{
                        border: '0.5px solid rgba(0,0,0,0.2)',
                        boxShadow: '0px 0px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <div className="flex justify-between gap-3 items-end">
                        <div className="rounded-lg h-20 w-20 overflow-hidden">
                            <Image src={milkshakeImg} className="h-full w-full"/>
                        </div>
                        <div className="flex flex-col h-full gap-1 items-start justify-between">
                            <span className="h-3 w-3 overflow-hidden">
                                <Image src={vegImg} className="h-full w-full"/>
                            </span>
                            <span className="font-bold text-sm">Strawberry Milkshake</span>
                            <span className="text-gray-700 text-sm" 
                                style={{
                                    fontSize: '0.6rem',
                                    lineHeight: '1.13rem'
                            }}>TALL(Tall Strawberry milkshake) .PER SERVE(354ml)<br/>-569 KCal</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">&#x20B9; 367.<span className="text-sm">50</span></span>
                        <button className="px-4 py-2 text-sm font-bold text-white rounded-full" 
                        style={{
                            background: '#007549',
                            boxShadow: '1px 1px 10px rgba(0,0,0,0.4)'
                        }}>Add item</button>
                    </div>
                </div>

                <div className="flex flex-col p-5 gap-4 bg-white rounded-lg w-76 px-7"
                    style={{
                        border: '0.5px solid rgba(0,0,0,0.2)',
                        boxShadow: '0px 0px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <div className="flex gap-3 items-end">
                        <div className="rounded-lg h-20 w-20 overflow-hidden">
                            <Image src={milkshakeImg} className="h-full w-full"/>
                        </div>
                        <div className="flex flex-col h-full gap-1 items-start justify-start">
                            <span className="h-3 w-3 overflow-hidden">
                                <Image src={vegImg} className="h-full w-full"/>
                            </span>
                            <span className="font-bold text-sm">Vanilla Milkshake</span>
                            <span className="text-gray-700 text-sm" 
                                style={{
                                    fontSize: '0.6rem',
                                    lineHeight: '1.13rem'
                            }}>TALL(354 ML).PER SERVE(354ml)-569 KCal</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">&#x20B9; 367.<span className="text-sm">50</span></span>
                        <button className="px-4 py-2 text-sm font-bold text-white rounded-full" 
                        style={{
                            background: '#007549',
                            boxShadow: '1px 1px 10px rgba(0,0,0,0.4)',
                        }}
                        >Add item</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Barista;

// grey color: #ecebe9
// green btn : #007549