import { Spinner } from "@material-tailwind/react";


const CustomSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <Spinner className="h-16 w-16 " color="blue" />
        </div>
    );
};

export default CustomSpinner;