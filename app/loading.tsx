import { BeatLoader } from "react-spinners";
const loading = () => {
    return (
        <div className="max-h-screen flex justify-center items-center ">
            <BeatLoader color="#36d7b7" />
        </div>
    );
};

export default loading;