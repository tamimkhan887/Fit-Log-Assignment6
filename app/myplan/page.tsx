"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { WorkoutContext } from "../ContextProvider/WorkoutProvider";
import { Iworkout } from "../Types/workout.type";
import TodaysList from "../Components/MyPage/TodaysList";

interface MyPageProps {
    addWorkout: Iworkout[];
    saveWorkout: Iworkout[];
}

const Page = () => {
    const [toggle, setToggle] = useState<"today" | "saved">("today");

    const { addWorkout, saveWorkout } = useContext(WorkoutContext) as MyPageProps;

    // Select data based on toggle
    const currentWorkout = toggle === "today" ? addWorkout : saveWorkout;

    const totalCalories = currentWorkout.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const totalDuration = currentWorkout.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    return (
        <div className="px-12 py-10">
            <h3 className="text-[30px] font-oswald font-bold text-white">
                MY PLAN
            </h3>

            <p className="text-[#8A92A0] font-inter text-sm">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            {/* Stats */}
            <div className="flex justify-between items-center bg-[#13161D] px-6 py-8 rounded-2xl mt-6">

                <div className="space-y-2">
                    <h3 className="text-[#8A92A0] font-inter text-xs">
                        Exercises
                    </h3>

                    <p className="text-4xl font-bold font-oswald text-[#CCFF00]">
                        {currentWorkout.length}
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-[#8A92A0] font-inter text-xs">
                        Minutes
                    </h3>

                    <p className="text-4xl font-bold font-oswald text-white">
                        {totalDuration}
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-[#8A92A0] font-inter text-xs">
                        Calories
                    </h3>

                    <p className="text-4xl font-bold font-oswald text-white">
                        {totalCalories}
                    </p>
                </div>

            </div>

            <div className="my-6">
                <div className="flex justify-between items-center">

                    <div className="bg-[#151921] px-2 py-2 flex gap-2 rounded-xl">

                        <button
                            onClick={() => setToggle("today")}
                            className={`text-xs font-inter px-8 py-2 rounded-xl ${
                                toggle === "today"
                                    ? "font-bold bg-[#1F242D] text-white"
                                    : "text-[#8A92A0]"
                            }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() => setToggle("saved")}
                            className={`text-xs font-inter px-8 py-2 rounded-xl ${
                                toggle === "saved"
                                    ? "font-bold bg-[#1F242D] text-white"
                                    : "text-[#8A92A0]"
                            }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-4">
                        <h3 className="text-nowrap text-[#8A92A0] font-inter text-xs">
                            Sort By
                        </h3>

                        <select
                            defaultValue="Duration"
                            className="select rounded-lg"
                        >
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>

                </div>

                {/* Empty State */}
                {currentWorkout.length === 0 && (
                    <div className="bg-[#11131780] flex flex-col justify-center items-center py-24 mt-6 rounded-xl">

                        <h3 className="font-oswald font-bold text-xl">
                            NOTHING HERE YET
                        </h3>

                        <p className="text-[#A1A1AA] font-inter text-xs">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link href="/">
                            <button className="mt-6 bg-[#C2F10D] px-6 py-2.5 font-inter font-semibold text-xs text-black rounded-full">
                                Go to workouts
                            </button>
                        </Link>

                    </div>
                )}

                {currentWorkout.length > 0 && (
                    <div className="mt-6 space-y-4">
                        {currentWorkout.map((workout) => (
                            <TodaysList key={workout.id} workout={workout}></TodaysList>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Page;
