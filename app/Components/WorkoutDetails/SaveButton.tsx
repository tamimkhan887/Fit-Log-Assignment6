"use client"

import { WorkoutContext } from "@/app/ContextProvider/WorkoutProvider";
import { Iworkout } from "@/app/Types/workout.type";
import { Dispatch, SetStateAction, useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

interface SaveButtonProps {
    saveWorkout: Iworkout[]
    setSaveWorkout: Dispatch<SetStateAction<Iworkout[]>>
}

const SaveButton = ({ workout }: { workout: Iworkout }) => {
    const { saveWorkout, setSaveWorkout } = useContext(WorkoutContext) as SaveButtonProps;
    const handleSaveWorkout = (w: Iworkout) => {
        const exists = saveWorkout.some(workout => workout.id === w.id);
        if (exists) {
            toast.error("Workout is already saved");
            return;
        }
        const newSaveWorkout = [...saveWorkout, w];
        setSaveWorkout(newSaveWorkout);
        toast.success("Workout saved successfully");
    };
    return (
        <button onClick={() => handleSaveWorkout(workout)}
            className="rounded-xl border border-[#30343d] bg-transparent px-5 md:px-7 py-2 md:py-3 text-sm font-medium      font-inter text-[E5E7EB] hover:bg-[#191c22] flex items-center gap-1 md:gap-2"
        >
            <span><FaRegBookmark color="#E5E7EB" size={16} /></span>
            Save for later
        </button>
    );
};

export default SaveButton;