import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ReadBooks from "../../Components/ReadBooks/ReadBooks";
import WishListContainer from "../../Components/WishListContainer/WishListContainer";

const ListedBooks = () => {
    const [selectedList, setSelectedList] = useState('read');
    const [sortBy, setSortBy] = useState('');

    const toggleList = (listType) => {
        setSelectedList(listType);
    };
    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div className="rounded-2xl mt-5 mx-10 h-32 flex justify-center items-center bg-blue-gray-50 text-center font-bold text-2xl">
                <h1>Books</h1>
            </div>

            <div className="flex justify-center mt-3">
                {/* <Button className="bg-green-600">Sort By</Button> */}


                <select name="" id="" onChange={handleSortBy}
                    className="p-4 rounded-2xl text-white bg-[#23BE0A]">

                    <option className="bg-white text-black" value="">Short By</option>
                    <option className="bg-white text-black" value="rating">Rating</option>
                    <option className="bg-white text-black" value="totalPages">Number of pages</option>
                    <option className="bg-white text-black" value="yearOfPublishing">Publisher year</option>

                </select>
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

            <div className="mx-10 border-t-2">
                {
                    selectedList === 'read' &&
                    <ReadBooks sortBy={sortBy} />
                }
                {
                    selectedList === 'wishlist' &&
                    <WishListContainer sortBy={sortBy} />
                }
            </div>
        </div>
    );
};

export default ListedBooks;
