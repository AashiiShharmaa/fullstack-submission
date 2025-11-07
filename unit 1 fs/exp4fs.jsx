 ProductCard.jsx
import React from "react";
function ProductCard({ image, title, description, price }) {
 return (
 <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden
hover:shadow-2xl transition-shadow duration-300">
 <img src={image} alt={title} className="w-full h-48 object-cover" />
 <div className="p-4">
 <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
 <p className="text-sm text-gray-600 mt-2">{description}</p>
 <div className="mt-4 flex items-center justify-between">
 <span className="text-xl font-bold text-green-600">₹{price}</span>
 <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bgblue-700">
 Add to Cart
 </button>
 </div>
 </div>
 </div>
 );
}
export default ProductCard;
import React from "react";
import ProductCard from "./ProductCard";
function App() {
 return (
 <div className="min-h-screen bg-gray-100 flex items-center justify-center
gap-6 p-6">
 <ProductCard
 image="https://via.placeholder.com/300"
 title="Wireless Headphones"
 description="High-quality wireless headphones with noise cancellation."
 price="2999"
 />
 <ProductCard
 image="https://via.placeholder.com/300"
 title="Smartwatch"
 description="Track your fitness and stay connected on the go."
 price="4999"
 />
 </div>
 );
}
export default App;