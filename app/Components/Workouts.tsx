import { Iworkout } from "../Types/workout.type";
import Workout from "./Workout";

const getWorkOutData = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog")
    const data = await res.json()
    return data;
}



const Workouts = async () => {
    const workouts = await getWorkOutData();
    return (
        <div id="library" className="my-16 mx-6 ">
            <div>
                <h3 className="text-white font-oswald font-bold text-3xl">THE LIBRARY</h3>
                <p className="text-[#9CA3AF] font-inter text-sm">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    workouts.map((workout: Iworkout) => <Workout key={workout.id} workout={workout}></Workout>)
                }
            </div>
        </div>
    );
};

export default Workouts;