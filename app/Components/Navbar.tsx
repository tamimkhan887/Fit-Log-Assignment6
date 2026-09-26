import Image from "next/image";
import logo from "@/public/logo.png"
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center border-b border-b-[#32363d] px-6 py-6">
            <div className="flex gap-2.5 ">
                <Image src={logo} alt="FitLOG Logo"></Image>
                <h3 className="text-white font-black text-lg font-oswald">FITLOG</h3>
            </div>
            <ul className="flex gap-5">
                <li className="text-[#C2F800] font-semibold font-inter text-xs py-1.5 px-4 rounded-full bg-[#303f21]">Workouts</li>
                <li className="font-semibold font-inter text-xs py-1.5 px-4">My Plan</li>
            </ul>
            <div className="flex gap-6">
                <button className=" font-medium text-xs font-inter text-[#9CA3AF]">Plan <span className="ml-2 bg-[#C2F800] px-2 py-1 text-black font-bold font-inter rounded-full">0</span></button>
                <button className="text-[#9CA3AF] font-inter font-medium text-xs">Saved <span className="ml-2 text-[#D1D5DB] text-[11px] font-inter font-medium border px-2 py-1 border-[#2D313B] rounded-full">0</span></button>
            </div>
        </nav>
    );
};

export default Navbar;