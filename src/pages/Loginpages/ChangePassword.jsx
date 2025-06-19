import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const ChangePassword = () => {
  return (
    <div>
                   
                <div>
  <h3 class="account-details-heading">Change Password</h3>
</div>
      {/* <h3 className="mb-4">Change Password</h3> */}
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="Enter current password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter new password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm new password" />
            </Form.Group>
            <Button variant="success">Update Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChangePassword;