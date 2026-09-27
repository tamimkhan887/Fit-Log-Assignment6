"use client";

import Link from "next/link";
import {
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "../ContextProvider/WorkoutProvider";
import { Iworkout } from "../Types/workout.type";
import TodaysList from "../Components/MyPage/TodaysList";

interface MyPageProps {
    addWorkout: Iworkout[];
    saveWorkout: Iworkout[];
    setAddWorkout: Dispatch<SetStateAction<Iworkout[]>>;
    setSaveWorkout: Dispatch<SetStateAction<Iworkout[]>>;
}

const Page = () => {
    const [toggle, setToggle] = useState<"today" | "saved">("today");

    const [sortBy, setSortBy] = useState<
        "" | "Duration" | "Calories" | "Rating"
    >("");

    const {
        addWorkout,
        saveWorkout,
        setAddWorkout,
        setSaveWorkout,
    } = useContext(WorkoutContext) as MyPageProps;

    const currentWorkout =
        toggle === "today" ? addWorkout : saveWorkout;

    const handleDelete = (id: number | string) => {
        if (toggle === "today") {
            setAddWorkout((prev) =>
                prev.filter(
                    (workout) =>
                        String(workout.id) !== String(id)
                )
            );
        } else {
            setSaveWorkout((prev) =>
                prev.filter(
                    (workout) =>
                        String(workout.id) !== String(id)
                )
            );
        }

        toast.success("Delete Successful");
    };

    const sortedWorkout = [...currentWorkout].sort((a, b) => {
        if (sortBy === "Duration") {
            return (
                Number(b.duration) -
                Number(a.duration)
            );
        }

        if (sortBy === "Calories") {
            return (
                Number(b.caloriesBurned) -
                Number(a.caloriesBurned)
            );
        }

        if (sortBy === "Rating") {
            return (
                Number(b.rating) -
                Number(a.rating)
            );
        }

        return 0;
    });

    const totalCalories = sortedWorkout.reduce(
        (total, workout) =>
            total + Number(workout.caloriesBurned),
        0
    );

    const totalDuration = sortedWorkout.reduce(
        (total, workout) =>
            total + Number(workout.duration),
        0
    );

    return (
        <div className="px-6 md:px-8 lg:px-12 py-4 md:py-7 lg:py-10">
            <h3 className="text-[30px] font-oswald font-bold text-white">
                MY PLAN
            </h3>

            <p className="text-[#8A92A0] font-inter text-sm">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            <div className="flex justify-between items-center bg-[#13161D] px-6 py-8 rounded-2xl mt-6">
                <div className="space-y-2">
                    <h3 className="text-[#8A92A0] font-inter text-xs">
                        Exercises
                    </h3>

                    <p className="text-4xl font-bold font-oswald text-[#CCFF00]">
                        {sortedWorkout.length}
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
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="bg-[#151921] px-2 py-2 flex gap-2 rounded-xl">
                        <button
                            onClick={() =>
                                setToggle("today")
                            }
                            className={`text-xs font-inter px-8 py-2 rounded-xl ${
                                toggle === "today"
                                    ? "font-bold bg-[#1F242D] text-white"
                                    : "text-[#8A92A0]"
                            }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() =>
                                setToggle("saved")
                            }
                            className={`text-xs font-inter px-8 py-2 rounded-xl ${
                                toggle === "saved"
                                    ? "font-bold bg-[#1F242D] text-white"
                                    : "text-[#8A92A0]"
                            }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <h3 className="text-nowrap text-[#8A92A0] font-inter text-xs">
                            Sort By
                        </h3>

                        <select
                            className="select rounded-lg"
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value as
                                        | ""
                                        | "Duration"
                                        | "Calories"
                                        | "Rating"
                                )
                            }
                        >
                            <option value="">
                                Choose Sort
                            </option>

                            <option value="Duration">
                                Duration
                            </option>

                            <option value="Calories">
                                Calories
                            </option>

                            <option value="Rating">
                                Rating
                            </option>
                        </select>
                    </div>
                </div>

                {sortedWorkout.length === 0 && (
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

                {sortedWorkout.length > 0 && (
                    <div className="mt-6 space-y-4">
                        {sortedWorkout.map((workout) => (
                            <TodaysList
                                key={workout.id}
                                workout={workout}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;