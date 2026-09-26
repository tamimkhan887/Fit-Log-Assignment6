import { Iworkout } from "@/app/Types/workout.type";

const TodaysList = ({workout}:{workout:Iworkout}) => {
    return (
        <div
            key={workout.id}
            className="bg-[#13161D] p-5 rounded-xl"
        >
            <h3 className="font-oswald font-bold text-lg">
                {workout.name}
            </h3>

            <div className="flex gap-6 mt-2 text-[#8A92A0] text-xs font-inter">
                <span>
                    {workout.duration} min
                </span>

                <span>
                    {workout.caloriesBurned} calories
                </span>

                <span>
                    {workout.difficulty}
                </span>
            </div>
        </div>
    );
};

export default TodaysList;