import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const OrderBookCard = ({ book }) => {
    const { image, bookName, price, uniqueId, author, quantity } = book;
   
    return (
        <div className="mb-10">
            <Card className="w-full max-w-[48rem] flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0  shrink-0 rounded-r-none"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="p-2 h-[200px] w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="gray" className="mb-4 uppercase">
                        {bookName}
                    </Typography>
                    <div className="flex items-center justify-between">
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            {author}
                        </Typography>
                        <Typography color="gray" className="font-normal text-black">
                            Product Code: {uniqueId}
                        </Typography>
                    </div>

                    <div className="flex items-center justify-between">
                        <Typography color="gray" className="font-normal">
                            Price: ${price}
                        </Typography>
                        <Typography color="gray" className="font-normal">
                            Quantity: {quantity}
                        </Typography>

                    </div>


                </CardBody>
            </Card>
        </div>
    );
};

export default OrderBookCard;