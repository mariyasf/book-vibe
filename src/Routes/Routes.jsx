import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <p>Welcome</p>
            },
            {
                path: "/listedBooks",
                element: <p>listedBooks</p>
            },
            {
                path: "/pageToRead",
                element: <p>pageToRead</p>
            }

        ]
    }

]);

export default route;