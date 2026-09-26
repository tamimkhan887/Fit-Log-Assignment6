const page = () => {
    return (
        <div className="px-12 py-10">
            <h3 className="text-[30px] font-oswald font-bold text-white">MY PLAN</h3>
            <p className="text-[#8A92A0] font-inter text-sm">Cap of five lifts for today. Finish them, then load more.</p>
            <div className="flex justify-between items-center bg-[#13161D] px-6 py-8 rounded-2xl mt-6">
                <div>
                    <h3 className="text-[#8A92A0] font-inter text-xs">Exercises</h3>
                    <p className="text-4xl font-bold font-oswald text-[#CCFF00]">2</p>
                </div>
                <div>
                    <h3 className="text-[#8A92A0] font-inter text-xs">Minutes</h3>
                    <p className="text-4xl font-bold font-oswald text-white">23</p>
                </div>
                <div>
                    <h3 className="text-[#8A92A0] font-inter text-xs">Calories</h3>
                    <p className="text-4xl font-bold font-oswald text-white">190</p>
                </div>
            </div>
        </div>
    );
};

export default page;