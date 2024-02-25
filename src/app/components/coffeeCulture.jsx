
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const CoffeeCulture = () => {
    return (
        <div className="w-full py-10 px-32 flex flex-col gap-10 grey-bg relative">
            <h2 className="darkgreen-text text-2xl font-bold">Learn more about the world of coffee!</h2>
            <button className="absolute top-72 left-24 rounded-full p-3 z-20 bg-white"
                style={{ boxShadow: '0px 0px 8px rgba(0,0,0,0.6)'}}
            >
                <FaArrowLeftLong className="lightgreen-text" size={18}/>
            </button>
            <button className="absolute top-72 right-24 rounded-full p-3 z-20 bg-white"
                style={{ boxShadow: '0px 0px 8px rgba(0,0,0,0.6)'}}
            >
                <FaArrowRightLong className="lightgreen-text" size={20}/>
            </button>
            <div className="w-full h-full rounded-lg py-6 px-8 gap-32 flex flex-col justify-between relative overflow-hidden dark-culture-bg">
                <div className="coffee-culture-bg h-full w-full absolute top-0 left-0"></div>
                <span className="bg-white w-fit text-xs lightgreen-text relative z-10 rounded py-1 px-2">Coffee Culture</span>
                <div className="flex flex-col gap-9 relative z-10 h-full py-2">
                    <div className="flex flex-col gap-4 text-white">
                        <span className="text-3xl font-bold">How Coffee Stirred Revels & Rebels</span>
                        <span className="text-base">Delighted by the jovial character of coffee, everyone was inspired to bring it home -
                            leading to some of <br/> the most crucial first
                        </span>
                    </div>
                    <button className="bg-white darkgreen-text w-fit text-xs font-bold py-2 px-14 hover:opacity-90 rounded-full darkgreen-text">
                        Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCulture;