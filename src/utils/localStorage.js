import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data, dataFormat) => {
    let bookList = JSON.parse(localStorage.getItem("BookList")) || [];
    let wishList = JSON.parse(localStorage.getItem("WishList")) || [];

    const existingBookInBookList = bookList.find(item => item.bookId === data.bookId);
    const existingBookInWishList = wishList.find(item => item.bookId === data.bookId);

    if (dataFormat === "BookList") {
        if (existingBookInWishList) {
            toast.error("This book is already in the wishlist. You cannot mark it as read.");
            return;
        }
    }
    else if (dataFormat === "WishList") {
        if (existingBookInBookList) {
            toast.error("This book has already been marked as read.");
            return;
        }
    }

    if (dataFormat === "BookList") {
        bookList.push(data);
        if (!existingBookInBookList) {
            localStorage.setItem("BookList", JSON.stringify(bookList));
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