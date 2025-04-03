import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div>
      <div className="px-6 py-3">
        <img src='/images/New logo her pride gold black  1 (4).png' alt="Product" className="w-[140px] h-[30px]" />
      </div>
      <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 relative overflow-hidden">
        
        <div className="absolute top-[10%] right-[5%] w-[60vw] max-w-[900px] h-[40vh] max-h-[600px] bg-yellow-400 rounded-full opacity-20 blur-[40px]"></div>

        <div className="flex-1 flex flex-col justify-center items-start text-left z-10">
          <p className="text-gray-800 text-lg font-medium mb-4">— Coming Soon</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-12 leading-tight">
            Get Notified<br />When we Launch
          </h1>

          <div className="flex flex-col sm:flex-row w-full max-w-xl mb-6 relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-full border border-gray-300 mb-4 sm:mb-0"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full sm:absolute sm:right-0">
              Notify Me
            </button>
          </div>
          <p className="text-gray-500 text-sm mb-12">*Don't worry we will not spam you :)</p>
          
          <div className="flex gap-4 mb-8">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-gray-600" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
          <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-300 rounded-full flex justify-center items-center relative">
            <img
              src='/images/shope.jpeg'
              alt="Product"
              className="w-[180px] sm:w-[220px] h-[300px] sm:h-[400px] object-contain rounded-lg shadow-lg"
            />
            
            <div className="bg-white shadow-lg rounded-xl px-4 py-2 w-[220px] sm:w-[260px] absolute top-[-20px] right-[-100px] sm:right-[-140px] z-20 flex items-start">
              <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
              <div className="flex flex-col flex-1">
                <div className="flex items-center">
                  <h2 className="text-black text-sm font-semibold">Ajay</h2>
                  <span className="text-gray-400 text-xs ml-auto">54 min</span>
                </div>
                <p className="text-gray-600 text-xs pt-1">Wonderful product. Amazing 👍</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-red-500 text-sm">❤️</span>
                  <span className="text-gray-400 text-sm">💬</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl px-4 py-2 w-[180px] sm:w-[220px] absolute top-1/2 left-[-100px] sm:left-[-140px] transform -translate-y-1/2 z-20 flex flex-col items-center">
              <img src='https://img.freepik.com/premium-vector/happy-couple-shopping-with-discounts-sales_123891-155782.jpg?semt=ais_hybrid' alt="User" className="w-full h-[60px] sm:h-[70px]" />
              <button className="bg-yellow-300 text-black font-medium px-6 sm:px-8 py-2 rounded-md mt-4">Shop Now</button>
              <p className="text-[10px] mt-2">Lorem ipsum dolor sit amet </p>
            </div>
            
            <div className="absolute bottom-[-80px] sm:bottom-[-100px] right-[-80px] sm:right-[-100px] z-20 rounded-xl w-[200px] sm:w-[260px]">
              <img src='https://static.vecteezy.com/system/resources/previews/039/324/429/non_2x/bar-graph-business-growth-pastel-color-3d-render-free-png.png' alt="" className='h-[160px] sm:h-[200px] w-[160px] sm:w-[200px] object-cover' />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 flex gap-4 sm:gap-6 text-sm sm:text-base">
          <a href="#" className="text-gray-500 hover:text-gray-800">FAQ</a>
          <a href="#" className="text-gray-800 border-b-2 border-gray-800">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Email Us</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;






