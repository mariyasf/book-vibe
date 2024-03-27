import BookOrderForm from "../../Components/BookOrderForm/BookOrderForm";
import OrderBookCard from "../../Components/OrderBookCard/OrderBookCard";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useBookListData from "../../Hooks/useBooksListData";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";
import ConfirmOrderCard from "../../Components/ConfirmOrderCard/ConfirmOrderCard";

const BookOrderList = () => {
    const { data, loading } = useBookListData();
    const { localData } = useLocalStorage({ dataFormat: "OrderPlaced" });


    if (loading) {
        return <CustomSpinner />
    }

    return (

        <div className="grid lg:grid-cols-2 mx-10 border-2 mt-10">

            <div className="border-2 p-5 ">

                <div className="p-10">

                    {
                        data.map(book =>
                            <OrderBookCard
                                key={book.bookId}
                                book={book} />
                        )
                    }
                </div>
            </div>

            <div className="border-2 p-10">
                <div className="mb-10 border-b-2 pb-5 px-5">
                    {
                        <BookOrderForm />
                    }
                </div>
                <div className="border-2 pt-10">
                    <h2 className="text-center font-bold text-2xl">
                        Order List: <span className="p-1 rounded-xl bg-[#23BE0A]">{localData.length}</span>
                    </h2>

                    <div className="p-10">
                        {
                            localData.map(book =>
                                <ConfirmOrderCard
                                    key={book.bookId}
                                    book={book} />
                            )
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookOrderList;