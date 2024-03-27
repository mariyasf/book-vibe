import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { MdGroup } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const ReadBookListCard = ({ readBook }) => {
    const { bookId, bookName, author, image, category,
        tags, rating, publisher, yearOfPublishing, totalPages } = readBook;

    return (
        <div>
            <Card className="p-5 lg:flex lg:flex-row mb-4">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="lg:w-2/5 m-0 shrink-0"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-[400px] w-[400px] mx-auto rounded-xl"
                    />
                </CardHeader>

                <CardBody>
                    <Typography variant="h4" className="mb-4 uppercase text-black">
                        {bookName}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        By: {author}
                    </Typography>

                    {Array.isArray(tags) && tags.length > 0 && (
                        <Typography className="mb-4 pb-4 flex flex-col lg:flex-row gap-5">
                            <div className="flex space-x-2">
                                <span className="text-black font-bold">Tags:</span>

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
                            <div className="flex  items-center text-center gap-2">
                                <IoLocationSharp />
                                Year of Publishing: {yearOfPublishing}
                            </div>
                        </Typography>
                    )}
                    <Typography className="flex flex-col lg:flex-row gap-5 border-b-2 pb-4">
                        <div className="flex items-center text-center gap-2">
                            <MdGroup />
                            Publisher: {publisher}
                        </div>
                        <div className="flex gap-2 items-center text-center ">
                            <IoDocumentTextOutline />
                            Pages: {totalPages}
                        </div>
                    </Typography>

                    <Typography className="flex flex-col lg:flex-row mt-4 gap-5 border-b-2 pb-4">
                        <div className="bg-[#328EFF26] p-4 rounded-3xl text-[#328EFF]">
                            Category: {category}
                        </div>
                        <div className="bg-[#FFAC3326]  p-4 rounded-3xl text-[#FFAC33]">
                            Rating:  {rating}
                        </div>
                        <Link to={`/bookDetails/${bookId}`}>
                            <Button className="bg-[#23BE0A] w-full" >View Details</Button>

                        </Link>
                    </Typography>

                </CardBody>
            </Card>
        </div>
    );
};

export default ReadBookListCard;