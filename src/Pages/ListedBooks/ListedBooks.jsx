import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ReadBooks from "../../Components/ReadBooks/ReadBooks";
import WishlistCard from "../../Components/Wishlist/WishlistCard";

const ListedBooks = () => {
    const [selectedList, setSelectedList] = useState('read');

    const toggleList = (listType) => {
        setSelectedList(listType);
    };

    return (
        <div>
            <div className="mt-5 mx-10 h-32 flex justify-center items-center bg-blue-gray-50 text-center font-bold text-2xl">
                <h1>Books</h1>
            </div>

            <div className="flex justify-center mt-3">
                <Button className="bg-green-600">Sort By</Button>
            </div>

            <div className="flex justify-left mx-10 mt-20">
                <Button
                    onClick={() => toggleList('read')}
                    variant={selectedList === 'read' ? 'contained' : 'outlined'}
                    className={`mr-3 ${selectedList === 'read' ? 'bg-blue-400 border-black border-t-2 border-l-2 border-r-2' : ''}`}>
                    Read Books
                </Button>

                <Button
                    onClick={() => toggleList('wishlist')}
                    variant={selectedList === 'wishlist' ? 'contained' : 'outlined'}
                    className={`mr-3 ${selectedList === 'wishlist' ? 'bg-blue-400  border-black border-b-2 border-l-2 border-r-2' : ''}`}>
                    Wishlist Books
                </Button>
            </div>

            <div className="mt-3 mx-10">
                {
                    selectedList === 'read' &&
                    <ReadBooks />
                }
                {
                    selectedList === 'wishlist' &&
                    <WishlistCard />
                }
            </div>
        </div>
    );
};

export default ListedBooks;
