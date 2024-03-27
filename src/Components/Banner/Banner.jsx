import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="space-y-6 p-10 lg:p-20 lg:flex gap-10 justify-center text-center lg:text-left items-center mt-10 mx-10 rounded-xl  lg:h-[450px] bg-blue-gray-100">
            <div className="space-y-6">
                <h1 className="text-4xl font-semibold mb-4">Books to freshen up your bookshelf</h1>
                <Link to={"/listedBooks"}>
                    <Button size="lg" className="bg-[#23BE0A]">View The List</Button>

                </Link>
            </div>
            <div >
                <img className="h-[400px] rounded-2xl" src="images/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;