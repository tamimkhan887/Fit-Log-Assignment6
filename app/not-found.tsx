import Link from "next/link";

const NotFound = () => {
    return (<main className="min-h-screen flex items-center justify-center bg-[#0B0E13] px-6"> <div className="text-center"> <div className="mb-6"> <span className="text-8xl md:text-9xl font-bold font-oswald text-[#CCFF00]">
        404 </span> </div>
        <h1 className="text-3xl md:text-4xl font-bold font-oswald text-white">
            Page Not Found
        </h1>

        <p className="text-[#8A92A0] mt-3 max-w-md mx-auto">
            The page you are looking for doesnt exist or may have been moved.
        </p>

        <Link
            href="/"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-[#CCFF00] text-black font-semibold hover:bg-[#b8e600] transition-colors"
        >
            Back to Home
        </Link>
    </div>
    </main>

    );
};

export default NotFound;
