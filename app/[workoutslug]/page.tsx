import Image from "next/image";
import { notFound } from "next/navigation";
import { Iworkout } from "../Types/workout.type";
import AddButton from "../Components/WorkoutDetails/AddButton";
import SaveButton from "../Components/WorkoutDetails/SaveButton";

const getWorkoutdata = async (): Promise<Iworkout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data: Iworkout[] = await res.json();
    return data;
};

const SingleWorkoutShow = async ({ params, }: { params: Promise<{ workoutslug: string }>; }) => {
    const { workoutslug } = await params;
    const workouts = await getWorkoutdata();
    const workout = workouts.find(
        (workout) => workout.id === parseInt(workoutslug)
    );
    if (!workout) {
        return notFound();
    }
    return (
        <div className="bg-[#090A0D] py-12">
            <div className="p-3 sm:p-5 lg:p-6 ">
                <div className="flex justify-center flex-col gap-14 lg:flex-row">

                    <div>
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={588}
                            height={773}
                            className="rounded-2xl w-full"
                        />
                    </div>

                    <div className="flex flex-col">
                        <div>
                            <h1 className="font-oswald text-4xl font-bold uppercase">
                                {workout.name}
                            </h1>

                            <p className="mt-2 text-[#9CA3AF] font-inter">
                                {workout.description}
                            </p>
                        </div>

                        <div className="mt-5 flex gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#CCFF00] px-3.5 py-1 text-xs font-inter font-semibold text-[#0F1115]"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="mt-7 rounded-lg border border-[#242831] bg-[#151922]">

                            <div className="flex items-center justify-between border-b border-[#242831] px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Equipment
                                </span>

                                <span className="text-sm font-inter font-medium text-[#E5E7EB]">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#242831] px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Difficulty
                                </span>

                                <span className="text-sm font-inter font-medium text-[#E5E7EB]">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#242831] px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Sets
                                </span>

                                <span className="text-sm font-inter font-medium text-[#E5E7EB]">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#242831] px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Reps
                                </span>

                                <span className="text-sm font-inter font-medium text-[#E5E7EB]">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#242831] px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Duration
                                </span>

                                <span className="text-sm font-inter font-medium text-[rgb(229,231,235)]">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#242831] px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Calories
                                </span>

                                <span className="text-sm font-inter font-medium text-[#E5E7EB]">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between px-3 py-2.5">
                                <span className="text-xs font-bold uppercase text-[#9CA3AF] font-inter">
                                    Rating
                                </span>

                                <span className="text-sm font-inter font-medium text-[#E5E7EB]">
                                    {workout.rating}
                                </span>
                            </div>

                        </div>

                        <div className="mt-8">
                            <h2 className="font-inter font-extrabold uppercase text-white">
                                Instructions
                            </h2>

                            <ol className="mt-2 space-y-1.5">
                                {workout.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 text-sm font-inter text-[#D1D5DB]"
                                    >
                                        <span className="text-sm font-inter text-[#9CA3AF]">
                                            {index + 1}.
                                        </span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-6 flex gap-2 justify-between md:justify-start">
                            <AddButton workout={workout}></AddButton>
                            <SaveButton workout={workout}></SaveButton>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleWorkoutShow;