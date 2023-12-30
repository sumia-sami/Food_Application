

import React from 'react';
import { useNavigate } from 'react-router-dom';
import cartList from '../utils/cartList';

const OrderConfirmation = () => {

    const navigate = useNavigate();

  const handleReturnHome = () => {
    cartList.map(()=>{
        cartList.pop()
    })
    navigate('/');

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          "Congratulations! Your Order Has Been Placed!"
        </h1>
        <p className="mt-2 text-base text-gray-600">
          Thank you for choosing our services! Your order has been successfully placed
          and is now being processed. We appreciate your trust in us and look
          forward to serving you.
        </p>
        
        <img className="mx-auto h-40 w-auto" src="https://png.pngtree.com/png-clipart/20220708/ourmid/pngtree-fast-delivery-order-using-motorcycle-illustration-png-image_5785028.png" alt="Order Confirmed" />
        <button
          onClick={handleReturnHome}
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
