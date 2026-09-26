import { Iworkout } from "@/app/Types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FaFire } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

interface ITodaysListProps {
    workout: Iworkout
    handleDelete: (id: (number | string)) => void 
    mark: boolean 
    setMark :Dispatch<SetStateAction<boolean>>
}
const TodaysList = ({ workout, handleDelete , mark , setMark}:ITodaysListProps )=> {
    const handleMark = () =>{
        setMark(true)
        toast.success("Marked Successfully")
    }
    return (
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-0">
            <div className="flex items-center gap-4">
                <div>
                    <Image src={workout.image} alt="workout image" width={120} height={80} className="rounded-xl"></Image>
                </div>
                <div>
                    <h3 className="font-oswald font-bold text-white">{workout.name}</h3>
                    <p className="font-inter  font-semibold text-xs text-[#8A92A0] my-2">{workout.equipment}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <GoClock />
                            <p>{workout.duration} min</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFire />
                            <p>{workout.caloriesBurned} kcal</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdOutlineStarOutline />
                            <p>{workout.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between md:justify-start items-center gap-6">
                <Link href={`/${workout.id}`}>
                    <button className="font-inter text-xs text-white border border-[#374151] rounded-full px-6 py-3">View Details</button>
                </Link>
                <button onClick={()=>handleMark()} className="flex items-center bg-[#CCFF00] px-5 py-2 text-black font-semibold font-inter rounded-2xl text-xs"><IoCheckmarkOutline className={`${mark ? "flex" : "hidden"}`} /><span>Mark as Done</span></button>
                <button onClick={() => handleDelete(String(workout.id))}><RxCross1 size={24} color="#6B7280" /></button>
            </div>
        </div>
    );
};

export default TodaysList;