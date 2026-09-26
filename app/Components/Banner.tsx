import Image from "next/image";
import banner from "@/public/banner.png"
const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#222630] p-4 md:p-14 mt-12 mx-6 rounded-2xl">
            <div className="space-y-4">
                <p className="text-[#C2F800] font-inter text-[11px] font-bold">WORKOUT LIBRARY</p>
                <h3 className="text-white font-extrabold font-oswald text-3xl md:text-6xl">TRAIN WITH INTENT. LOG <br /> EVERY SET.</h3>
                <p className="text-[#9CA3AF] font-inter ">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today plan, and watch the weeks work add up.</p>
                <button className="bg-[#C2F800] py-3 px-6 rounded-md text-black font-inter font-bold"><a href="#library">BROWSE WORKOUTS</a></button>
            </div>
            <div>
                <Image src={banner} alt="workout banner" loading="eager"></Image>
            </div>
        </div>
    );
};

export default Banner;