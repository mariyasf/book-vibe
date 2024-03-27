import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import CustomSpinner from "../../../Components/CustomSpinner/CustomSpinner";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (

        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-[#23BE0A] p-3 font-bold border-2 rounded-2xl border-green-500"
                            : isPending
                                ? <CustomSpinner />
                                : "flex items-center"
                    }
                // className="flex items-center"
                >
                    Home
                </NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/listedBooks"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-[#23BE0A] p-2 font-bold border-2 rounded-2xl border-green-500"
                            : isPending
                                ? <CustomSpinner />
                                : "flex items-center"
                    }
                >
                    Listed Books
                </NavLink>
            </Typography>


            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >

                <NavLink to="/pageToRead"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-[#23BE0A] p-3 font-bold border-2 rounded-2xl border-green-500"
                            : isPending
                                ? <CustomSpinner />
                                : "flex items-center"
                    }>
                    Pages to Read
                </NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >

                <NavLink to="/favList"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-[#23BE0A] p-3 text-xl"
                            : isPending
                                ? <CustomSpinner />
                                : "flex items-center"
                    }>
                    <MdFavorite /> <span>{ }</span>
                </NavLink>


            </Typography>
        </ul>
    );
    return (

        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    color="green"
                    as="a"
                    href="/"
                    className="mr-4 cursor-pointer py-1.5 font-semibold text-2xl"
                >
                    Book Vibe
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>

                    <div className="flex items-center gap-x-1">
                        <Button
                            variant="text"
                            size="sm"
                            className="hidden bg-[#23BE0A] text-white lg:inline-block"
                        >
                            <span>Log In</span>
                        </Button>
                        <Button

                            size="sm"
                            className="bg-[#50B1C9] hidden lg:inline-block"
                        >
                            Sign in
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>

            <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm" style={{ backgroundColor: "#23BE0A", color: "white" }}>
                        <span>Log In</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm" className="bg-blue-400">
                        <span>Sign in</span>
                    </Button>
                </div>
            </Collapse>

        </Navbar>


    );
};

export default NavBar;