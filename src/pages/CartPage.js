

import React from 'react';
import cartList from '../utils/cartList';
import { Link } from 'react-router-dom';


const CartPage = () => {
  
  const cartItems = cartList;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row shadow-md my-10">
          <div className="md:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-xl md:text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl md:text-2xl">{cartItems.length} Items</h2>
            </div>
            <div className="mt-10 mb-5">
              {/* Cart items list */}
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center hover:bg-gray-100 py-5">
                  <div className="flex w-full"> {/* Product */}
                    <div className="w-20">
                      
                      <img src={item.imageUrl} alt="product" className="w-full h-full rounded" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.name}</span>
                      <span className="text-red-500 text-xs">{item.quantity} x ${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Cart Summary */}
          <div id="summary" className="md:w-1/4 bg-white px-8 py-10">
            <h1 className="font-semibold text-xl md:text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
              <span className="font-semibold text-sm">${calculateTotal()}</span>
            </div>
            <div>
                <Link to="/checkout">
              <button className="bg-indigo-500 py-3 text-sm text-white uppercase w-full">
               
                Pay Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartPage;
