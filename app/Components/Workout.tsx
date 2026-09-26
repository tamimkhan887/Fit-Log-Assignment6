import Image from "next/image";
import { Iworkout } from "../Types/workout.type";
import { GoClock } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarOutline } from "react-icons/md";
import Link from "next/link";
interface WorkoutProps {
    workout: Iworkout
}
const Workout = ({ workout }: WorkoutProps) => {
    return (
        <Link href={`\ ${workout.id}`}>
            <div className="">
                <div >
                    <Image src={workout.image} alt="Workout Type Image" width={392} height={240} className="w-full h-60 object-cover object-[center_25%] rounded-t-3xl"></Image>
                </div>
                <div className="bg-[#33374261] pt-8 px-6 rounded-b-3xl pb-8">
                    <div className="flex gap-2 ">
                        {workout.muscleGroups.map((r: string, idx: number) => <h3 className="text-black font-bold text-[11px] font-inter bg-[#C2F800] rounded-full px-2.5 py-1.5" key={idx}>{r}</h3>)}
                    </div>
                    <h3 className="text-lg font-bold font-oswald mt-4">{workout.name}</h3>
                    <p className="text-xs font-inter text-[#9CA3AF] mt-1">{workout.equipment}</p>
                    <hr className="border border-[#383e4e56] my-6" />
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
        </Link>
    );
};

export default Workout;