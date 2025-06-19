// // import React from 'react';
// // import { Card, Button } from 'react-bootstrap';

// // const Bookings = () => {
// //   return (
// //     <div>
// //       <div className="d-flex justify-content-between align-items-center mb-4">
// //         <h3>Your Bookings</h3>
// //         <Button variant="success">New Booking</Button>
// //       </div>
// //       <Card className="border-0 shadow-sm">
// //         <Card.Body>
// //           <div className="table-responsive">
// //             <table className="table">
// //               <thead>
// //                 <tr>
// //                   <th>Booking ID</th>
// //                   <th>Date</th>
// //                   <th>Service</th>
// //                   <th>Status</th>
// //                   <th>Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td>#12345</td>
// //                   <td>May 15, 2023</td>
// //                   <td>AC Service</td>
// //                   <td><span className="badge bg-success">Confirmed</span></td>
// //                   <td><Button variant="outline-success" size="sm">View</Button></td>
// //                 </tr>
// //                 <tr>
// //                   <td>#12346</td>
// //                   <td>May 20, 2023</td>
// //                   <td>Plumbing</td>
// //                   <td><span className="badge bg-warning text-dark">Pending</span></td>
// //                   <td><Button variant="outline-success" size="sm">View</Button></td>
// //                 </tr>
// //                 <tr>
// //                   <td>#12347</td>
// //                   <td>May 25, 2023</td>
// //                   <td>Electrical</td>
// //                   <td><span className="badge bg-danger">Cancelled</span></td>
// //                   <td><Button variant="outline-success" size="sm">View</Button></td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         </Card.Body>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default Bookings;



// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { message } from "antd";
// // import axios from "axios";
// // import { Container, Card, Button, Table } from "react-bootstrap";

// // const PaymentHistory = () => {
// //   const [payments, setPayments] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Fetch userId from localStorage
// //   const userDataStr = localStorage.getItem("user");
// //   const userId = userDataStr ? JSON.parse(userDataStr).user?._id : null;

// //   // Fetch payment history
// //   useEffect(() => {
// //     const fetchPayments = async () => {
// //       if (!userId) {
// //         message.error("Please log in to view your payment history.");
// //         navigate("/login");
// //         return;
// //       }

// //       try {
// //         setIsLoading(true);
// //         const response = await axios.get(`http://localhost:8080/paymentuser/payments/${userId}`);
// //         setPayments(response.data.data);
// //       } catch (error) {
// //         console.error("Error fetching payments:", error);
// //         message.error("Failed to load payment history.");
// //         setPayments([]);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchPayments();
// //   }, [userId, navigate]);

// //   // Format date
// //   const formatDate = (date) => {
// //     return new Date(date).toLocaleDateString("en-US", {
// //       year: "numeric",
// //       month: "short",
// //       day: "numeric",
// //     });
// //   };

// //   return (
// //     <Container className="py-16 max-w-7xl mx-auto bg-gray-50 min-h-screen">
// //       <div className="flex justify-between items-center mb-8">


// //                 <div>
// //   <h3 class="account-details-heading">Your Payment History</h3>
// // </div>
// //         <h3 className="text-3xl font-bold text-gray-800 tracking-tight"></h3>
// //         <Button
// //           variant="success"
// //           className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
// //           onClick={() => navigate("/cart")}
// //         >
// //           New Order
// //         </Button>
// //       </div>
// //       <Card className="shadow-xl rounded-xl bg-white border-0">
// //         <Card.Body>
// //           <div className="table-responsive ">
// //             <Table id='tabling' className="table align-middle border">
// //               <thead className="bg-gray-100 border">
// //                 <tr className="border">
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Product Name</th>
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Order ID</th>
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Date</th>
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Amount</th>
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Payment Mode</th>
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Status</th>
// //                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Remark</th>
// //                   {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th> */}
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {isLoading ? (
// //                   <tr>
// //                     <td colSpan="7" className="text-center py-4 text-gray-500">
// //                       Loading...
// //                     </td>
// //                   </tr>
// //                 ) : payments.length === 0 ? (
// //                   <tr>
// //                     <td colSpan="7" className="text-center py-4 text-gray-500">
// //                       No payments found.
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   payments.map((payment) => (
// //                     <tr key={payment.orderId}>
// //                       <td className="px-6 py-4 text-sm text-gray-800">{payment.productname}</td>
// //                       <td className="px-6 py-4 text-sm text-gray-800">{payment.orderId}</td>
// //                       <td className="px-6 py-4 text-sm text-gray-800">{formatDate(payment.receivingDate)}</td>
// //                       <td className="px-6 py-4 text-sm text-gray-800">₹{payment.amount}</td>
// //                       <td className="px-6 py-4 text-sm text-gray-800">{payment.paymentMode}</td>
// //                       <td className={`px-6 py-4 text-sm ${payment?.status == "Completed" ? "text-green-600" : "text-red-600"}`}>

// //                           {payment?.status}

// //                       </td>
// //                       <td className="px-6 py-4 text-sm text-gray-800">{payment.remark || "-"}</td>
// //                       {/* <td className="px-6 py-4">
// //                         <Button
// //                           variant="outline-success"
// //                           size="sm"
// //                           className="border-green-600 text-green-600 hover:bg-green-50 rounded-lg"
// //                           onClick={() => navigate(`/payment/${payment.orderId}`)}
// //                         >
// //                           View
// //                         </Button>
// //                       </td> */}
// //                     </tr>
// //                   ))
// //                 )}
// //               </tbody>
// //             </Table>
// //           </div>
// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // };

// // export default PaymentHistory;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { message } from "antd";
// import axios from "axios";
// import { Container, Card, Button, Table } from "react-bootstrap";

// const PaymentHistory = () => {
//   const [payments, setPayments] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch userId from localStorage
//   const userDataStr = localStorage.getItem("user");
//   const userId = userDataStr ? JSON.parse(userDataStr).user?._id : null;

//   // Fetch payment history
//   useEffect(() => {
//     const fetchPayments = async () => {
//       if (!userId) {
//         message.error("Please log in to view your payment history.");
//         navigate("/login");
//         return;
//       }

//       try {
//         setIsLoading(true);
//         const response = await axios.get(`http://localhost:8080/paymentuser/payments/${userId}`);
//         setPayments(response.data.data);
//       } catch (error) {
//         console.error("Error fetching payments:", error);
//         message.error("Failed to load payment history.");
//         setPayments([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPayments();
//   }, [userId, navigate]);

//   // Format date
//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   // Download invoice
//   const handleDownloadInvoice = async (orderId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/paymentuser/invoice/${orderId}`,
//         {
//           responseType: "blob",
//         }
//       );

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", `invoice_${orderId}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.parentNode.removeChild(link);
//       message.success("Invoice downloaded successfully!");
//     } catch (error) {
//       console.error("Error downloading invoice:", error);
//       message.error("Failed to download invoice.");
//     }
//   };

//   return (
//     <Container className="py-16 max-w-7xl mx-auto bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h3 className="account-details-heading">Your Payment History</h3>
//         </div>
//         <h3 className="text-3xl font-bold text-gray-800 tracking-tight"></h3>
//         <Button
//           variant="success"
//           className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
//           onClick={() => navigate("/cart")}
//         >
//           New Order
//         </Button>
//       </div>
//       <Card className="shadow-xl rounded-xl bg-white border-0">
//         <Card.Body>
//           <div className="table-responsive">
//             <Table id="tabling" className="table align-middle border">
//               <thead className="bg-gray-100 border">
//                 <tr className="border">
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Product Name</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Order ID</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Date</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Amount</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Payment Mode</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Status</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Remark</th>
//                   <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {isLoading ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4 text-gray-500">
//                       Loading...
//                     </td>
//                   </tr>
//                 ) : payments.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4 text-gray-500">
//                       No payments found.
//                     </td>
//                   </tr>
//                 ) : (
//                   payments.map((payment) => (
//                     <tr key={payment.orderId}>
//                       <td className="px-6 py-4 text-sm text-gray-800">{payment.productname}</td>
//                       <td className="px-6 py-4 text-sm text-gray-800">{payment.orderId}</td>
//                       <td className="px-6 py-4 text-sm text-gray-800">{formatDate(payment.receivingDate)}</td>
//                       <td className="px-6 py-4 text-sm text-gray-800">₹{payment.amount}</td>
//                       <td className="px-6 py-4 text-sm text-gray-800">{payment.paymentMode}</td>
//                       <td className={`px-6 py-4 text-sm ${payment?.status == "Completed" ? "text-green-600" : "text-red-600"}`}>
//                         {payment?.status}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-800">{payment.remark || "-"}</td>
//                       <td className="px-6 py-4">
//                         <Button
//                           variant="outline-primary"
//                           size="sm"
//                           className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
//                           onClick={() => handleDownloadInvoice(payment.orderId)}
//                         >
//                           Download Invoice
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//           </div>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default PaymentHistory;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { Container, Card, Button, Table } from "react-bootstrap";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [downloading, setDownloading] = useState({});
  const navigate = useNavigate();

  // Fetch userId from localStorage
  const userDataStr = localStorage.getItem("user");
  const userId = userDataStr ? JSON.parse(userDataStr).user?._id : null;

  // Fetch payment history
  useEffect(() => {
    const fetchPayments = async () => {
      if (!userId) {
        message.error("Please log in to view your payment history.");
        navigate("/login");
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:8080/paymentuser/payments/${userId}`);
        setPayments(response.data.data);
      } catch (error) {
        console.error("Error fetching payments:", error);
        message.error("Failed to load payment history.");
        setPayments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, [userId, navigate]);

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Download invoice
const handleDownloadInvoice = async (userId) => {
  try {
    setDownloading(prev => ({ ...prev, [userId]: true }));
    message.loading({ content: 'Preparing invoice...', key:userId, duration: 0 });

    const response = await axios.get(
      `http://localhost:8080/paymentuser/download-invoice/${userId}`,
      {
        responseType: 'blob', // Important for file downloads
      }
    );

    // Create download link
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice_${userId}.pdf`);
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      link.parentNode.removeChild(link);
    }, 100);

    message.success({ content: 'Invoice downloaded!', key:userId });
  } catch (error) {
    console.error('Download error:', error);
    
    if (error.response?.status === 404) {
      message.error({ content: 'Invoice not found for this order', key:userId });
    } else {
      message.error({ 
        content: error.message || 'Failed to download invoice', 
        key: userId
      });
    }
  } finally {
    setDownloading(prev => ({ ...prev, [userId]: false }));
  }
};

// Update the Button in your table to use orderId instead of userId
<Button
  variant="outline-primary"
  size="sm"
  className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
  onClick={() => handleDownloadInvoice(payments.userId)}
  disabled={downloading[payments.userId]}
>
  {downloading[payments.userId] ? 'Downloading...' : 'Download Invoice'}
</Button>

  return (
    <Container className="py-16 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="account-details-heading">Your Payment History</h3>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 tracking-tight"></h3>
        <Button
          variant="success"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={() => navigate("/cart")}
        >
          New Order
        </Button>
      </div>
      <Card className="shadow-xl rounded-xl bg-white border-0">
        <Card.Body>
          <div className="table-responsive">
            <Table id="tabling" className="table align-middle border">
              <thead className="bg-gray-100 border">
                <tr className="border">
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Product Name</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Date</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Amount</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Payment Mode</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Remark</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : payments.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">
                      No payments found.
                    </td>
                  </tr>
                ) : (
                  payments.map((payment) => (
                    <tr key={payment.orderId}>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.productname}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.orderId}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{formatDate(payment.receivingDate)}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">₹{payment.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.paymentMode}</td>
                      <td className={`px-6 py-4 text-sm ${payment?.status == "Completed" ? "text-green-600" : "text-red-600"}`}>
                        {payment?.status}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.remark || "-"}</td>
                      <td className="px-6 py-4">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
                          onClick={() => handleDownloadInvoice(payment.userId)}
                          disabled={downloading[payment.userId]}
                        >
                          {downloading[payment.userId] ? 'Downloading...' : 'Download Invoice'}
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentHistory;