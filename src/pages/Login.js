import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 w-16 rounded-full" src="https://via.placeholder.com/64" alt="Logo" />
          <div className="text-center sm:text-left mt-4 sm:mt-0 sm:ml-4">
            <h1 className="text-xl font-bold text-gray-800">Welcome to Our Website</h1>
            <p className="text-gray-600 mt-1">We provide amazing services to meet your needs.</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum lacinia mi, nec lobortis magna fermentum id. In efficitur neque nec tortor gravida, ut dapibus purus volutpat.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
