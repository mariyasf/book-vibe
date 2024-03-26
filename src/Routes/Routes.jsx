import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import BookDetails from "../Components/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/listedBooks",
                element: <ListedBooks />
            },
            {
                path: "/pageToRead",
                element: <PagesToRead />
            }
            ,
            {
                path: "/bookDetails/:bookId",
                element: <BookDetails />
            }

        ]
    }

]);

export default route;