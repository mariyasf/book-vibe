import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

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
                element: <div>listedBooks</div>
            },
            {
                path: "/pageToRead",
                element: <p>pageToRead</p>
            }

        ]
    }

]);

export default route;