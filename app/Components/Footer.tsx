import logo from "@/public/logo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="border border-[#1A1D24] mt-16 bg-[#090A0D] py-10 px-6 flex justify-between items-center">
            <div className="flex items-center gap-2.5 ">
                <Image src={logo} alt="FitLOG Logo"></Image>
                <h3 className="text-white font-bold text-xs font-oswald">FITLOG</h3>
            </div>
            <div>
                <h3 className="text-[#6B7280] font-inter text-xs">© 2026 FitLog — Workout Library. Train hard, log honest.</h3>
            </div>
        </div>
    );
};

export default Footer;