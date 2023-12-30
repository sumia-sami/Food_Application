
import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../utils/Products";

// Dummy data for categories and products
const categories = [
  { id: 1, title: "Salad", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { id: 2, title: "Steak", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { id: 3, title: "Chicken", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { id: 4, title: "Soup", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
];



const Home = () => {
  return (
    <div>
      
      <SearchBar />
 

<div className="p-4">
  <h1 className="sm:text-2xl text-3xl font-bold mb-4">Categories</h1>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

    {categories.map((category) => (
      <CategoryCard key={category.id} data={category} />
    ))}
  </div>
  
  <h1 className="text-3xl font-bold mb-4 mt-8">Products List</h1>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mb-4">
    {products.map((product) => (
      <ProductCard key={product.id} data={product} />
    ))}
  </div>
</div>

      
    </div>
  );
};

export default Home;
