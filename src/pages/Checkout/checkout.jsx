// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { message } from "antd";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { Button } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// const CheckOut = () => {
//     const [mydata, setMydata] = useState({});
//     const navigate = useNavigate();
//     const Product = useSelector(state => state.mycart.cart);




//     const initPay = (data) => {
//         const options = {
//             key: "rzp_test_o3vkPO5n8pMXdo",
//             amount: data.amount,
//             currency: data.currency,
//             description: "Test",
//             // image: `https://backend-1-cafd.onrender.com/${myimg}`,
//             // order_id: data.id,
//             handler: async (response) => {
//                 try {
//                     const verifyURL = "https://backend-1-cafd.onrender.com/payment/verify";
//                     await axios.post(verifyURL, response);
//                     message.success("Payment successful!");
//                 } catch (error) {
//                     // message.error("Payment verification failed.");
//                     console.error(error);
//                 }
//             },
//             theme: {
//                 color: "#3399cc",
//             },
//         };
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();



//     };

//     // orderId, amount, paymentMode, receivingDate, remark ,chequeNumber

//     const handlePay = async () => {
//         try {
//             const orderURL = "https://backend-1-cafd.onrender.com/payment/orders";
//             const { data } = await axios.post(orderURL, {
//                 amount: totalAmount,
//                 productname: productName,




//             });



//             initPay(data.data);

//           // Reload the current page

//          window.localStorage.removeItem('persist:cartData');
//            navigate("/")







//         } catch (error) {
//             message.error("Failed to create payment order.");
//             console.error(error);
//         }


//     };

//     let totalAmount = 0;
//     let productName = "";
//     let myimg = "";

//     Product.forEach((item) => {
//         totalAmount += item.price * item.qnty;
//         productName += item.name + ",";
//         myimg = item.image;
//     });

//     return (
//         <>



//         </>
//     );
// };

// export default CheckOut;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const CheckOut = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const Product = useSelector(state => state.mycart.cart);

    let totalAmount = 0;
    let productName = "";
    let myimg = "";

    Product.forEach((item) => {
        totalAmount += item.price * item.qnty;
        productName += item.name + ",";
        myimg = item.image;
    });

    const initPay = (data) => {
        const options = {
            key: "rzp_test_o3vkPO5n8pMXdo",
            amount: data.amount,
            currency: data.currency,
            description: "Order Payment",
            handler: async (response) => {
                try {
                    const verifyURL = "https://backend-1-cafd.onrender.com/paymentuser/verify";
                    await axios.post(verifyURL, response);
                    message.success("Payment successful!");

                    // Clear cart and navigate
                    window.localStorage.removeItem("persist:cartData");
                    navigate("/");
                } catch (error) {
                    message.error("Payment verification failed.");
                    console.error(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePay = async () => {
        if (Product.length === 0) {
            message.warning("Your cart is empty.");
            return;
        }

        try {
            setIsLoading(true);
            const orderURL = "https://backend-1-cafd.onrender.com/paymentuser/orders";
            const { data } = await axios.post(orderURL, {
                amount: totalAmount,
                productname: productName,
            });

            initPay(data.data);
        } catch (error) {
            message.error("Failed to create payment order.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container className="py-5">
            <h2 className="mb-4">Checkout</h2>
            <Row>
                {Product.map((item, index) => (
                    <Col md={4} key={index} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={item.image} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>Price: ₹{item.price}</Card.Text>
                                <Card.Text>Quantity: {item.qnty}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="mt-4">
                <h4>Total Amount: ₹{totalAmount}</h4>
                <Button
                    variant="primary"
                    onClick={handlePay}
                    disabled={isLoading}
                >
                    {isLoading ? "Processing..." : "Proceed to Pay"}
                </Button>
            </div>
        </Container>
    );
};

export default CheckOut;
