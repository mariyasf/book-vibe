import { Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <div className="space-y-6 p-20 lg:flex gap-10 justify-center text-center lg:text-left items-center mt-10 mx-10 rounded-xl  lg:h-[450px] bg-blue-gray-100">
            <div className="space-y-6">
                <h1 className="text-4xl font-semibold">Books to freshen up your bookshelf</h1>
                <Button size="lg" className="bg-green-600">View The List</Button>
            </div>
            <div >
                <img className="h-[400px] rounded-2xl" src="/public/images/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;