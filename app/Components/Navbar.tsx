"use client"
import Image from "next/image";
import logo from "@/public/logo.png"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = <>
        <li className="text-[#C2F800] font-semibold font-inter text-xs py-1.5 px-4 rounded-full bg-[#303f21]">Workouts</li>
        <li className="font-semibold font-inter text-xs py-1.5 px-4">My Plan</li>
    </>
    return (
        <nav className="flex justify-between items-center border-b border-b-[#32363d] px-6 py-6 z-50 sticky top-0 bg-[#090A0D]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex md:hidden text-white" > {isMenuOpen ? (<RxCross2 size={24} />) : (<RxHamburgerMenu size={24} />)} </button>
            <Link href={"/"}>
                <div className="flex gap-2.5 ">
                    <Image src={logo} alt="FitLOG Logo"></Image>
                    <h3 className="text-white font-black text-lg font-oswald">FITLOG</h3>
                </div></Link>
            <ul className="hidden md:flex gap-5">
                {links}
            </ul>
            <div className="flex gap-6">
                <button className=" font-medium text-xs font-inter text-[#9CA3AF]">Plan <span className="ml-2 bg-[#C2F800] px-2 py-1 text-black font-bold font-inter rounded-full">0</span></button>
                <button className="text-[#9CA3AF] font-inter font-medium text-xs">Saved <span className="ml-2 text-[#D1D5DB] text-[11px] font-inter font-medium border px-2 py-1 border-[#2D313B] rounded-full">0</span></button>
            </div>
            {isMenuOpen && (<div className="absolute top-full left-0 w-full bg-[#090A0D] border-b border-[#32363d] md:hidden"> <ul className="flex flex-col gap-2 p-4"> {links} </ul> </div>)}
        </nav>
    );
};

export default Navbar;