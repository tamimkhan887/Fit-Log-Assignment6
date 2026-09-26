import { Iworkout } from "@/app/Types/workout.type";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const TodaysList = ({ workout }: { workout: Iworkout }) => {
    return (
        <div className="flex justify-between items-center">
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
            <div className="flex items-center gap-6">
                <button className="font-inter text-xs text-white border border-[#374151] rounded-full px-6 py-3">View Details</button>
                <button className="flex items-center"><IoCheckmarkOutline /><span>Mark as Done</span></button>
                <button><RxCross1 size={24} color="#6B7280"/></button>
            </div>
        </div>
    );
};

export default TodaysList;