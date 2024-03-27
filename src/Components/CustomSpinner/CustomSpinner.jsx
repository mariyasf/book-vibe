import { Spinner } from "@material-tailwind/react";


const CustomSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <Spinner className="h-16 w-16 " color="#23BE0A" />
        </div>
    );
};

export default CustomSpinner;