"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import GreyLeafRight from '@/app/images/greyleafright.svg';

export const OffercardPopup = ({ cardInfo, setPopup }) => {
	const { src, title, desc, cals, description, price } = cardInfo;
	return (
		<div className="w-screen fixed h-full top-0 left-0 flex justify-center items-center offer-card-popup z-40"
			onClick={() => setPopup(false)}
		>
			<div className="absolute w-screen h-full top-0 left-0 bg-black opacity-60 z-40"></div>
			<motion.div className="flex flex-col rounded-2xl z-50 w-5/12 bg-white overflow-hidden"
				style={{ boxShadow: '0px 4px 15px rgba(0,0,0,1)' }}
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				transition={{ duration: 200, type: "spring", damping: 15 }}
			>
				<Image src={src} objectFit="cover" />
				<div className="flex flex-col py-7 pl-4 pr-7 gap-7 h-80 relative" onClick={() => { }}>
					<Image src={GreyLeafRight} className="top-0 right-0 absolute" />
					<div className="flex flex-col gap-1">
						<span className="text-xl font-bold">{title}</span>
						<span className="opacity-70 text-xs">{cals}</span>
						<span className="opacity-70 font-light text-xs">{description}</span>
					</div>
					<div className="flex flex-col gap-5">
						<span className="text-sm font-light opacity-90">{desc}</span>
						<span className="font-semibold">&#x20B9; {price}</span>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
