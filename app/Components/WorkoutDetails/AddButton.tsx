"use client"
import { WorkoutContext } from "@/app/ContextProvider/WorkoutProvider";
import { Iworkout } from "@/app/Types/workout.type";
import { Dispatch, SetStateAction, useContext } from "react";
import { IoTodayOutline } from "react-icons/io5";
import { toast } from "react-toastify";
interface AddButtonProps {
    addWorkout: Iworkout[]
    setAddWorkout: Dispatch<SetStateAction<Iworkout[]>>
}
const AddButton = ({workout}:{workout : Iworkout}) => {
    const { addWorkout , setAddWorkout } = useContext(WorkoutContext) as AddButtonProps;
    const handleAddWorkout = (w: Iworkout) => {
        const exists = addWorkout.some(workout => workout.id === w.id);
        if (exists) {
            toast.error("Workout is already added to today's plan");
            return;
        }
        const newAddWorkout = [...addWorkout, w];
        setAddWorkout(newAddWorkout);
        toast.success("Workout is added to today's plan");
    };
    return (
        <button onClick={()=>handleAddWorkout(workout)} className="rounded-xl px-5 md:px-7 py-2 md:py-3 text-sm text-[#0F1115] bg-[#d5ff45] flex items-center font-inter font-semibold gap-1 md:gap-2">
            <span><IoTodayOutline color="#0F1115" size={16} /></span>
            Add to today&apos;s plan
        </button>
    );
};

export default AddButton;