

import React from 'react';
import { Link } from 'react-router-dom';


const CheckoutPage = () => {
  return (
    <div className="container mx-auto mt-6 mb-6 p-6 bg-white shadow-md">

  
  <div className="flex justify-between border-b pb-8">
    <h1 className="text-2xl font-semibold">Checkout</h1>
  </div>

  
  <div className="mt-10">
    <h2 className="font-semibold text-lg mb-5">Payment</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <label className="flex items-center">
        <input type="radio" className="form-radio" name="payment" value="card" />
        <span className="ml-2">Debit/Credit card</span>
      </label>
      <label className="flex items-center">
        <input type="radio" className="form-radio" name="payment" value="paypal" />
        <span className="ml-2">PayPal</span>
      </label>
      <label className="flex items-center">
        <input type="radio" className="form-radio" name="payment" value="payoneer" />
        <span className="ml-2">Payoneer</span>
      </label>
      <label className="flex items-center">
        <input type="radio" className="form-radio" name="payment" value="cod" />
        <span className="ml-2">Cash on Delivery</span>
      </label>
    </div>
  </div>

  
  <div className="mt-10">
    <h2 className="font-semibold text-lg mb-5">Delivery details</h2>
    <p>789 Maple Street, Los Angeles, CA 90001</p>
    <p>(888) 987-6543</p>
  </div>

  
  <div className="mt-10">
    <h2 className="font-semibold text-lg mb-5">Order details</h2>
    <ul>
      <li>1x Green salad</li>
      <li>1x Fresh vegetable</li>
      <li>1x Mixed salad</li>
      <li>3x Grilled steak</li>
      <li>1x Vegan cake</li>
    </ul>
    <p className="mt-2">Total: $133.03</p>
  </div>

  
  <div className="flex justify-end mt-10">
    
    <Link to="/order-confirmation">
    <button className="bg-indigo-500 text-white uppercase py-3 px-6 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
      Confirm Payment
    </button>
    </Link>
  </div>

</div>

  );
};

export default CheckoutPage;
