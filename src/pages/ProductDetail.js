
import { useParams } from 'react-router-dom';
import products from '../utils/Products';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import cartList from '../utils/cartList';


const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState({});

  const {id} = useParams();
  let navigate = useNavigate();

  useEffect(() => 

  {
    const selectedproduct = products.filter((prod)=>{
      
      return prod.id==id})

    setProduct(selectedproduct[0])
    
  }, [id])

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => {
      if (prevQuantity + amount < 1) return 1;
      return prevQuantity + amount;
    });
  };

  const addToCart = () => {
    
    cartList.push(product)
    navigate("/cart")
  };

  return (
    <div className="max-w-screen-md mt-4 mb-4 mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="w-full p-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-md text-gray-500">{product.description}</p>
          <div className="flex items-center my-4">
            <button onClick={() => handleQuantityChange(-1)} className="text-red-500">
              
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="text-green-500">
              
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
            <button onClick={addToCart} className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
