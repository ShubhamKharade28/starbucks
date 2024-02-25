"use client";
import Nav from "./components/Nav";
import './starbucks.css';
import Link from 'next/link';
import Curations from "./components/curations";
import Barista from "./components/barista";
import HolidayDelight from "./components/holiday";
import LatestOfferings from "./components/latest";
import CoffeeCulture from "./components/coffeeCulture";
import Footer from "./components/footer";
import {useState} from 'react';
import { OffercardPopup } from "./components/OffercardPopup";

const StarbucksHome = () => {
	const [popup, setPopup] = useState(false);
	const [cardInfo, setCardInfo] = useState('');

	return (
		<main className="w-screen starbucks bg-white relative">
			<Nav/>
			<div className="w-full flex justify-between items-center text-white pb-6 pt-28 px-40"
				style={{
					background: '#1e3932',
					boxShadow: '0px 0px 5px rgba(50,50,50,0.5)',
				}}>
				<span className="text-2xl font-light">Joyous Bells: Celebrating Christmas Cheer.</span>
				<Link href="#" className="rounded-full px-4 py-2 text-sm font-semibold"
					style={{
						border: '1px solid white',
					}}
				>Know more</Link>
			</div>
			<Curations />
			<Barista />
			<div className="w-full flex flex-col gap-10 px-20 py-20">
				<HolidayDelight />
				<LatestOfferings setPopup={setPopup} setCardInfo={setCardInfo}/>
			</div>
			{popup && <OffercardPopup cardInfo={cardInfo} setPopup={setPopup}/>}
			<CoffeeCulture />
			<Footer />
		</main>
	)
}

export default StarbucksHome;