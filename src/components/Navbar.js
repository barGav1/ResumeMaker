import React from 'react';
import '../styles/Home.css';

function Navbar() {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white font-bold text-xl">Your Logo</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="./" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="./forgotPass" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Forgot Password?</a>
                            <a href="./Login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                            <a href="./Register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
                            <a href="./ResumeMaker" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resumer Creator</a>
                            <a href="./ResumeViewer" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume Viewer</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
