import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { saveToLocalStorage } from "../../utils/localStorage";
import useBookListData from "../../Hooks/useBooksListData";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";


const BookOrderForm = () => {
    const { data, loading } = useBookListData();
    const [productCode, setProductCode] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [shippingAddress, setShippingAddress] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);

    const handleOrderButton = () => {
        // console.log("Product Code:", productCode, quantity, shippingAddress);

        if (selectedBook) {
            const orderData = {
                ...selectedBook,
                quantity,
                shippingAddress
            };
            console.log("Order Confirm", orderData);
            saveToLocalStorage(orderData, "OrderPlaced");
        }
    }



    useEffect(() => {

        let code = productCode.trim();

        if (code && data) {
            const foundBook = data.find(book => book.uniqueId === code);
            setSelectedBook(foundBook || {});

        }


    }, [productCode, data]);



    return (
        <div>
            <ToastContainer />
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Order Book
                </Typography>

                <Typography color="gray" className="mt-1 font-normal">
                    Place your order
                </Typography>

                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Product Code
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Enter Product Code"
                            value={productCode}
                            onChange={
                                (e) => setProductCode(e.target.value)
                            }

                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Add Quantity
                        </Typography>
                        <Input
                            size="lg"
                            type="number"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={
                                (e) => setQuantity(parseInt(e.target.value))
                            }
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Shipping Address
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Enter shipping address"
                            value={shippingAddress}
                            onChange={
                                (e) => setShippingAddress(e.target.value)
                            }
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <Button
                        onClick={handleOrderButton}
                        className="mt-6" fullWidth>
                        Order
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default BookOrderForm;
