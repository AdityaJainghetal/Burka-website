import React, { useState } from 'react';
import Layout from './Layout';
import Dashboard from './Dashbaord';
import Bookings from './Booking';
import Cart from './Cart';
import Address from './Address';
import AccountDetails from './AccountDetails';
import ChangePassword from './ChangePassword';
import Login from '../Login/Login';

const DashboardOverview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user] = useState({
    name: 'Prashant Shrivas',
    email: 'shrivasprashant41@gmail.com',
    phone: '7869678485',
    address: '123 Green Park, City, State - 123456'
  });

  const renderContent = () => {
    switch (activeTab) {
        case 'Account login':
        return <Login user={user} />;
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'bookings':
        return <Bookings />;
      case 'cart':
        return <Cart />;
      case 'address':
        return <Address user={user} />;
      case 'account':
        return <AccountDetails user={user} />;
      case 'password':
        return <ChangePassword />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default DashboardOverview;