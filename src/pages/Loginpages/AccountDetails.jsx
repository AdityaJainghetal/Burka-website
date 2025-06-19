// import React from 'react';
// import { Row, Col, Card, Form, Button } from 'react-bootstrap';
// import { Person } from 'react-bootstrap-icons';

// const AccountDetails = ({ user }) => {
//     const navigate = useNavigate();
//       const [isLoading, setIsLoading] = useState(false);
//       const [formData, setFormData] = useState({
//           firstName: '',
//           firmName: '',
//           address: '',
//           phone: '',
//           email: ''
//       });
//       const cartItems = useSelector(state => state.mycart.cart);
    
//       // Calculate total amount and product names
//       const { totalAmount, productNames } = cartItems.reduce(
//           (acc, item) => ({
//               totalAmount: acc.totalAmount + (item.price * item.qnty),
//               productNames: [...acc.productNames, item.name]
//           }),
//           { totalAmount: 0, productNames: [] }
//       );
    
//       const productNameString = productNames.join(", ");
    
//       useEffect(() => {
//           const userDataStr = localStorage.getItem("user");
//           if (userDataStr) {
//               const userData = JSON.parse(userDataStr);
//               setFormData({
//                   firstName: userData.user?.firstName || "",
//                   firmName: userData.user?.firmName || "",
//                   address: userData.user?.address || "",
//                   phone: userData.user?.mobile1 || "",
//                   email: userData.user?.email || "",
//               });
//           }
//       }, []);
    
//       const { firmName, address, phone, firstName,email } = formData;
  
  

//   return (
//     <div>
//       <h3 className="mb-4">Account Details</h3>
//       <Row>
//         <Col md={6}>
//           <Card className="border-0 shadow-sm mb-4">
//             <Card.Body>
//               <h5 className="mb-3">Personal Information</h5>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control type="text" value={firstName} />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email Address</Form.Label>
//                   <Form.Control type="email" value={email} />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Phone Number</Form.Label>
//                   <Form.Control type="tel" value={phone} />
//                 </Form.Group>
//                 <Button variant="success">Update Information</Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="border-0 shadow-sm">
//             <Card.Body>
//               <h5 className="mb-3">Profile Picture</h5>
//               <div className="text-center mb-3">
//                 <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '120px', height: '120px'}}>
//                   <Person size={48} className="text-success" />
//                 </div>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <Button variant="outline-success" className="me-2">Upload New</Button>
//                 <Button variant="outline-danger">Remove</Button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default AccountDetails;




import React, { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
const AccountDetails = ({ user }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        // firstName: '',
        firmName: '',
        address: '',
        phone: '',
        email: ''
    });
    const cartItems = useSelector(state => state.mycart.cart);
  
    // Calculate total amount and product names
    const { totalAmount, productNames } = cartItems.reduce(
        (acc, item) => ({
            totalAmount: acc.totalAmount + (item.price * item.qnty),
            productNames: [...acc.productNames, item.name]
        }),
        { totalAmount: 0, productNames: [] }
    );
  
    const productNameString = productNames.join(", ");
  
    useEffect(() => {
        const userDataStr = localStorage.getItem("user");
        if (userDataStr) {
            const userData = JSON.parse(userDataStr);
            setFormData({
                // firmName: userData.user?.firstName || "",
                 firstName: userData.user?.firmName || "",
                address: userData.user?.address || "",
                phone: userData.user?.mobile1 || "",
                email: userData.user?.email || "",
            });
        }
    }, []);
  
    const {  address, phone, firstName, email } = formData;

    return (
        <div>
       <div>
  <h3 class="account-details-heading">Account Details</h3>
</div>
          
            <Row>
                <Col md={6}>
                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-3">Personal Information</h5>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" value={firstName} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" value={email} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" value={phone} readOnly />
                                </Form.Group>
                                <Button variant="success">Update Information</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3">Profile Picture</h5>
                            <div className="text-center mb-3">
                                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '120px', height: '120px'}}>
                                    <Person size={48} className="text-success" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button variant="outline-success" className="me-2">Upload New</Button>
                                <Button variant="outline-danger">Remove</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AccountDetails;