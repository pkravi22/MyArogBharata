import React, { useState, useEffect } from "react";

const SignupPopup = ({
  title = "Sign Up",
  description = "Join us today to access amazing features!",
  delay = 1000, 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); 
    }, delay);

    
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full relative">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPopup;
