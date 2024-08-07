import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PrivacyPolicy from '../components/PrivacyPolicy';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const categories = [
  { name: 'Computers & Accessories', description: 'Laptops, desktops, peripherals and more.' },
  { name: 'Phones & Tablets', description: 'Latest smartphones, tablets, and accessories.' },
  { name: 'Electronics', description: 'TVs, audio systems, and other electronics.' },
  { name: 'Konga Fashion', description: 'Clothing, shoes, and fashion accessories.' },
  { name: 'Home & Kitchen', description: 'Appliances, cookware, and home decor.' },
  { name: 'Baby, Kids & Toys', description: 'Toys, clothes, and baby care products.' },
  { name: 'Beauty, Health & Personal Care', description: 'Skincare, makeup, and health products.' },
];

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/smartphones');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const Modal = ({ category }) => (
    <div className="absolute top-full left-0 bg-white shadow-lg p-4 rounded border border-gray-300 z-50">
      <h2 className="text-xl font-bold">{category.name}</h2>
      <p className="mt-2">{category.description}</p>
    </div>
  );

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-600">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow bg-gray-100 relative">
          <div className="bg-pink-700 text-white py-2">
            <div className="container mx-auto flex justify-around relative">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative px-4 py-2 hover:bg-pink-800 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(category)}
                  onMouseLeave={handleMouseLeave}
                >
                  {category.name}
                  {hoveredCategory === category && (
                    <div className="absolute top-full left-0 bg-white shadow-lg p-4 rounded border border-gray-300 z-50">
                      <h2 className="text-xl font-bold">{category.name}</h2>
                      <p className="mt-2">{category.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <main className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">Welcome to Konga Clone</h1>
            <p className="text-lg text-gray-700 mb-6 text-center">Your one-stop shop for all your needs!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div 
                  key={image.id} 
                  className="bg-white p-4 rounded shadow transition-transform transform hover:scale-105"
                >
                  <img src={image.thumbnail} alt={image.title} className="w-full h-48 object-cover rounded" />
                  <p className="mt-2 text-gray-700 font-bold">{image.title}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((star, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="mt-2 text-gray-900 font-semibold">${image.price}</p>
                  <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors border border-pink-600 flex items-center justify-center">
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              ))}
            </div>
            <PrivacyPolicy />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
