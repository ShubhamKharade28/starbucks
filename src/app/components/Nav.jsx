"use client";
import logo from '../images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";

const Nav = () => {
	let page = 'home';
	return (
		<nav className="w-full flex z-40 justify-evenly items-center px-10 text-lg bg-white fixed onscroll-shadow"
			style={{
				boxShadow: '0px 1px 5px rgba(50,50,50,0.7)',
			}}
		>
			<div className="flex items-center gap-12">
				<Image src={logo} className=" w-11"/>
				<div className="flex gap-9 star-nav">
					<Link href="/starbucks" data-iscurr={page=='home'?"true":"false"}>Home</Link>
					<Link href="/starbucks">Gift</Link>
					<Link href="/starbucks">Order</Link>
					<Link href="/starbucks">Pay</Link>
					<Link href="/starbucks">Store</Link>
				</div>
			</div>
			<div className="search-bar flex gap-3 items-center rounded-full px-3 py-2" 
				style={{
					boxShadow: '0.5px 0.5px 2px rgb(100,100,100)',
				}}>
				<CiSearch />
				<input placeholder='Looking for something specific?' 
				className="text-sm bg-transparent outline-none w-60"/>
			</div>
			<CgProfile size={30} color={'#1e3932'} opacity={0.7}/>
		</nav>
	)
}

export default Nav;