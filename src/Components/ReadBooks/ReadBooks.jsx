import useLocalStorage from "../../Hooks/useLocalStorage";
import ReadBookListCard from "../ReadBookListCard/ReadBookListCard";

const ReadBooks = () => {
    const { localData } = useLocalStorage({ dataFormat: "ReadList" });

    return (
        <div>
            {/* <h1>ReadBooks: {localData.length}</h1> */}
            {
                localData.map(readBook =>
                    <ReadBookListCard key={readBook.bookId} readBook={readBook} />
                )
            }
        </div>
    );
};

export default ReadBooks;