import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const BookCard = ({ book }) => {

    const { bookId, bookName, author, image, category, tags, rating } = book || {};

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <Card className="w-full max-w-[26rem] shadow-xl cursor-pointer">
                <CardHeader floated={false} color="blue-gray">
                    <img
                        className="h-[400px] w-full"
                        src={image}
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

                </CardHeader>
                <CardBody className="space-y-4">

                    <div className="flex space-x-2">
                        {tags.map((tag, index) => (
                            <Typography
                                key={index}
                                color="gray"
                                className="font-bold text-sm text-[#23BE0A] bg-gray-200 rounded px-2 py-1"
                            >
                                #{tag}
                            </Typography>
                        ))}
                    </div>

                    <Typography className="font-bold text-2xl text-black">
                        {bookName}
                    </Typography>
                    <Typography color="gray" className="font-bold">
                        By: {author}
                    </Typography>



                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            {category}
                        </Typography>


                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            {rating}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        </Typography>
                    </div>
                </CardBody>

            </Card>

        </Link>
    );
};

export default BookCard;