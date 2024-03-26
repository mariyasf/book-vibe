import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useSortedData = (sortBy, dataFormat) => {

    const { localData } = useLocalStorage({ dataFormat: { dataFormat } });
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        if (localData && localData.length > 0) {
            let sortedBooks = [...localData];
            if (sortBy === "rating") {
                sortedBooks.sort((a, b) => b.rating - a.rating);
            } else if (sortBy === "totalPages") {
                sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
            } else if (sortBy === "yearOfPublishing") {
                sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            }
            setSortedData(sortedBooks);
        }
    }, [localData, sortBy]);

    return sortedData;
};

export default useSortedData;
