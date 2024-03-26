import { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import ReadBookListCard from "../ReadBookListCard/ReadBookListCard";

const ReadBooks = ({ sortBy }) => {
    const { localData } = useLocalStorage({ dataFormat: "ReadList" });
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

            {
                sortedData.map(readBook =>
                    <ReadBookListCard key={readBook.bookId} readBook={readBook} />
                )
            }
        </div>
    );
};

export default ReadBooks;