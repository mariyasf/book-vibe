import useBookListData from "../../Hooks/useBooksListData";
import BookCard from "../BookCard/BookCard";

const BookList = () => {
    const { data, loading } = useBookListData();
    console.log(data);

    return (
        <div>
            <h2>Books</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
                {
                    data.map(book =>
                        <BookCard key={book.bookId} book={book} />
                    )
                }
            </div>

        </div>
    );
};

export default BookList;