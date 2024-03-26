import useLocalStorage from "../../Hooks/useLocalStorage";
import WishListDefaultCard from "../WishListDefaultCard/WishListDefaultCard";

const WishListContainer = () => {
    const { localData } = useLocalStorage({ dataFormat: "WishList" });

    return (
        <div>
            {/* <h1>ReadBooks: {localData.length}</h1> */}
            {
                localData.map(wishBook =>
                    <WishListDefaultCard key={wishBook.bookId} wishBook={wishBook} />

                )
            }
        </div>
    );
};

export default WishListContainer;