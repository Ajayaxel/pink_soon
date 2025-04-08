import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div>
     <div className="px-4 py-3 flex justify-center sm:justify-start w-full">
  <img 
    src='/images/New logo her pride gold black  1 (4).png' 
    alt="Product" 
    className="w-[120px] h-[25px] sm:w-[140px] sm:h-[30px]" 
  />
</div>

      <div className="min-h-screen bg-white flex flex-col sm:flex-col md:flex-row items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 py-6 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[60vw] max-w-[900px] h-[40vh] max-h-[600px] bg-yellow-400 rounded-full opacity-20 blur-[40px]"></div>
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start text-left z-10">
          <p className="text-gray-800 text-base sm:text-lg font-medium mb-3">— Coming Soon</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
            Get Notified<br />When we Launch
          </h1>
          <div className="flex flex-col sm:flex-row w-full max-w-xl mb-6 relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-full border border-gray-300 mb-4 sm:mb-0"
            />
            <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full sm:absolute sm:right-0">
              Notify Me
            </button>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-8">*Don't worry we will not spam you :)</p>
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col sm:flex-col md:flex-row justify-center items-center relative mt-6 md:mt-0">
          <div className="w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-yellow-300 rounded-full flex justify-center items-center relative">
            <img
              src='/images/shope.jpeg'
              alt="Product"
              className="w-[150px] sm:w-[200px] h-[250px] sm:h-[350px] object-contain rounded-lg shadow-lg"
            />

            {/* Comments Box */}
            <div className="bg-white shadow-lg rounded-xl px-3 sm:px-4 py-2 w-[180px] sm:w-[220px] absolute top-[-15px] right-[-40px] sm:right-[-100px] z-20 flex flex-col sm:flex-row items-start sm:items-center">
              <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="User" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full mr-2" />
              <div className="flex flex-col flex-1">
                <div className="flex items-center">
                  <h2 className="text-black text-xs sm:text-sm font-semibold">John Doe</h2>
                  <span className="text-gray-400 text-xs ml-auto">54 min</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm pt-1">Wonderful product. Amazing 👍</p>
              </div>
            </div>

            {/* Shop Now Box */}
            <div className="bg-white shadow-lg rounded-xl px-3 sm:px-4 py-2 w-[160px] sm:w-[200px] absolute bottom-[-20px] left-[-40px] sm:left-[-80px] z-20 flex flex-col items-center">
              <img src='https://img.freepik.com/premium-vector/happy-couple-shopping-with-discounts-sales_123891-155782.jpg' alt="User" className="w-full h-[50px] sm:h-[60px] object-contain" />
              <button className="bg-yellow-300 text-black font-medium text-sm px-4 sm:px-6 py-1 sm:py-2 rounded-md mt-3">Coming Soon</button>
              <p className="text-[9px] sm:text-[10px] mt-2">Lorem ipsum dolor sit amet</p>
            </div>

            {/* Diagram Image */}
            <div className="absolute bottom-[-40px] sm:bottom-[-80px] right-[-40px] sm:right-[-80px] z-20 rounded-xl w-[140px] sm:w-[200px]">
              <img src='https://static.vecteezy.com/system/resources/previews/039/324/429/non_2x/bar-graph-business-growth-pastel-color-3d-render-free-png.png' alt="" className='h-[120px] sm:h-[180px] w-[120px] sm:w-[180px] object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;









