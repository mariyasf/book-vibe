import { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import WishListDefaultCard from "../WishListDefaultCard/WishListDefaultCard";

const WishListContainer = ({ sortBy }) => {
    const { localData } = useLocalStorage({ dataFormat: "WishList" });

    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        if (localData && localData.length > 0) {
            let sortedBooks = [...localData];

            if (sortBy === "rating") {
                sortedBooks.sort((a, b) => b.rating - a.rating);
            }
            else if (sortBy === "totalPages") {
                sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
            }
            else if (sortBy === "yearOfPublishing") {
                sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            }

            setSortedData(sortedBooks);
        }
    }, [localData, sortBy]);


    if (!sortedData || sortedData.length === 0) {
        return (
            <div className='w-full mx-auto flex justify-center items-center'>
                <img className='h-[450px]' src="https://www.anychart.com/_core/img/features/anystock/no-data-label.svg" alt="" />
            </div>


        );
    }


    return (
        <div>
            {/* <h1>ReadBooks: {localData.length}</h1> */}
            {
                sortedData.map(wishBook =>
                    <WishListDefaultCard
                        key={wishBook.bookId}
                        wishBook={wishBook} />

                )
            }
        </div>
    );
};

export default WishListContainer;