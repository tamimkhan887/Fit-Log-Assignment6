import { Iworkout } from "../Types/workout.type";

const getWorkoutdata = async(): Promise<Iworkout[]>=>{
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = res.json();
    return data ;
}
const page = async({ params }: { params: Promise<{ workoutslug: string }> }) => {
    const {workoutslug} =await params
    const workouts = await getWorkoutdata() ;
    const workout = workouts.find(workout => workout.id === parseInt(workoutslug))
    console.log(workout)
    
    return (
        <div>
            meaw
        </div>
    );
};

export default page;