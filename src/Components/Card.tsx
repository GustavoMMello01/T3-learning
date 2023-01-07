import React from "react";
import AddIcon from '@mui/icons-material';

export const Card = () => {
  return (
    <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-6">
      <h5 className="mb-3 font-semibold text-gray-900 text-xl ">
        Manufacturer
      </h5>
      <p className="text-sm font-normal text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget arcu maximus mattis.
      </p>
      <ul className="my-4 space-y-3">
        <li>
          <a href="#"
             className="flex items-center p-3 font-bold rounded-lg text-white group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
            <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
            <div className="inline-flex items-center justify-center pr-5">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full p-2">+</button>
            </div>
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center p-3 font-bold rounded-lg text-white group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">

            <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
            <div className="inline-flex items-center justify-center pr-5">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full p-2">+</button>
            </div>
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center p-3 font-bold rounded-lg text-white group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">

            <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
            <div className="inline-flex items-center justify-center pr-5">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full p-2">+</button>
            </div>
          </a>
        </li>
        <li>
          <a href="#"
             className="flex items-center p-3 font-bold rounded-lg text-white group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">

            <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
            <div className="inline-flex items-center justify-center pr-5">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full p-2">+</button>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}