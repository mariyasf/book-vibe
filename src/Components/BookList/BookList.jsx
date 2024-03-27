import useBookListData from "../../Hooks/useBooksListData";
import BookCard from "../BookCard/BookCard";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

const BookList = () => {
    const { data, loading } = useBookListData();
    // console.log("Home Data: ", data);

    if (loading) {
        return <CustomSpinner />
    }


    return (
        <div>
            <div className="flex justify-center my-10">
                <h2 className="text-3xl font-bold">Books</h2>
            </div>

            <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 lg:mx-10">
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