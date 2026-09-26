"use client"
import { createContext, useState } from "react";

const WorkoutProvider = ({children}:{children: React.ReactNode}) => {
    const WorkoutContext = createContext({});
    const [addWorkout , setAddWorkout] = useState([])
    const [saveWorkout , setSaveWorkout] = useState([])
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