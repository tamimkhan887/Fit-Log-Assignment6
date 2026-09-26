"use client"
import { createContext, useState } from "react";
import { Iworkout } from "../Types/workout.type";
export const WorkoutContext = createContext({});
const WorkoutProvider = ({children}:{children: React.ReactNode}) => {
    const [addWorkout , setAddWorkout] = useState<Iworkout[]>([])
    const [saveWorkout , setSaveWorkout] = useState<Iworkout[]>([])
    const sharedData = {
        addWorkout ,
        saveWorkout,
        setAddWorkout,
        setSaveWorkout
    }
    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;