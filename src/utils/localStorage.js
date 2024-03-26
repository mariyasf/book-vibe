import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data, dataFormat) => {
    let ReadList = JSON.parse(localStorage.getItem("ReadList")) || [];
    let wishList = JSON.parse(localStorage.getItem("WishList")) || [];

    const existingBookInReadList = ReadList.find(item => item.bookId === data.bookId);
    const existingBookInWishList = wishList.find(item => item.bookId === data.bookId);

    if (dataFormat === "WishList") {
        if (existingBookInReadList) {
            toast.error("This book has already been marked as read.");
            return;
        }
    }

    if (dataFormat === "ReadList") {
        ReadList.push(data);
        if (!existingBookInReadList) {
            localStorage.setItem("ReadList", JSON.stringify(ReadList));
            toast.success("Book has been marked as read successfully");
        }
        else {
            toast.error("Book has been already marked as read");


        }
    }
    else if (dataFormat === "WishList") {
        wishList.push(data);
        if (!existingBookInWishList) {
            localStorage.setItem("WishList", JSON.stringify(wishList));
            toast.success("Book has been added to the wishlist successfully");
        }
        else {
            toast.error("Book has been already added to the wishlist");
        }
    }
}

export const getFromLocalStorage = (dataFormat) => {
    const data = JSON.parse(localStorage.getItem(dataFormat)) || [];
    console.log("Total data stored:", data.length);
    return data;
}