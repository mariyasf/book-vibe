import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useBookListData from "../../Hooks/useBooksListData";
import { useParams } from "react-router-dom";
import { saveToLocalStorage } from "../../utils/localStorage";
import { ToastContainer } from "react-toastify";

const BookDetails = () => {
    const { data, loading } = useBookListData();
    const { bookId } = useParams();
    const [singleData, setSingleData] = useState({});

    const handleReadButton = () => {
        saveToLocalStorage(singleData, "BookList");
    }
    const handleWishListButton = () => {
        saveToLocalStorage(singleData, "WishList");
    }

    useEffect(() => {
        if (data) {
            const dataItem = data.find(item => item.bookId === +bookId);
            setSingleData(dataItem || {});
        }
    }, [data, bookId]);

    console.log(bookId, singleData);

    const { bookName, author, image, category, review, tags, rating, publisher, yearOfPublishing, totalPages } = singleData;

    return (
        <div className="my-10 mx-20">
            <ToastContainer />
            <Card className="p-4 w-full flex-col lg:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-full lg:w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="w-full object-cover"
                    />
                </CardHeader>

                <CardBody>
                    <Typography variant="h3" className="mb-4 pb-4 uppercase text-black border-b-2">
                        {bookName}
                    </Typography>

                    <Typography variant="h5" color="blue-gray" className="pb-4 mb-2 border-b-2">
                        By: {author}
                    </Typography>

                    <Typography variant="h5" color="blue-gray" className="pb-4 mb-2 border-b-2">
                        {category}
                    </Typography>

                    <Typography color="gray" className="font-normal py-4">
                        <span className="text-black font-bold">Review: </span>
                        {review}
                    </Typography>

                    {Array.isArray(tags) && tags.length > 0 && (
                        <Typography className="mb-4 border-b-2 pb-4">
                            <div className="flex space-x-2">
                                <span className="text-black font-bold">Tags:</span>

                                {tags.map((tag, index) => (
                                    <Typography
                                        key={index}
                                        color="gray"
                                        className="font-bold text-sm text-green-500 bg-gray-200 rounded px-2 py-1"
                                    >
                                        {tag}
                                    </Typography>
                                ))}
                            </div>
                        </Typography>
                    )}

                    <Typography>
                        <ul className="space-y-2">
                            <li>Number of Pages: <span className="font-bold">{totalPages}</span></li>
                            <li>Publisher: <span className="font-bold"> {publisher}</span> </li>
                            <li>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span> </li>
                            <li>Rating: <span className="font-bold">{rating} </span></li>
                        </ul>
                    </Typography>

                    <Typography className="flex gap-5 mt-4">

                        <Button onClick={handleReadButton} variant="outlined" color="blue">Read</Button>
                        <Button onClick={handleWishListButton} size="lg" className="bg-[#50B1C9]">Wishlist</Button>
                    </Typography>

                </CardBody>
            </Card>
        </div>
    );
};

export default BookDetails;
