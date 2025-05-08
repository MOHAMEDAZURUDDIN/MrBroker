import React from "react";
import GetBackgroundColor from "../components/layout/GetBackgroundColor";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className={`${GetBackgroundColor()} flex items-center justify-center p-4`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg shadow-blue-600 p-6 bg-slate-800 rounded-xl mb-4">
        <div className="w-full max-w-xs shadow-white bg-slate-900 rounded-lg shadow-lg overflow-hidden mt-4 mb-4 -rotate-6  scale-105 duration-300">
          <div className="bg-lime-800 p-3 rotate-3 ">
            <h1 className="text-xl font-bold text-white text-center">
              Contact Us
            </h1>
          </div>
          <form className="p-4 space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-400 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-4 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-400 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-4 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-400 font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="3"
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-4 focus:ring-black"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-lime-700 text-white font-semibold py-1 rounded-md hover:bg-blue-900 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-xs bg-slate-900 rounded-lg shadow-lg shadow-white overflow-hidden mt-4 mb-4">
          <Link
            to="https://api.whatsapp.com/send?phone=8105191997&text=Hello%20from%20your%website"
            className="inline-flex items-center px-4 py-2 bg-green-700 text-white font-bold rounded-lg hover:bg-green-500 transition duration-300"
          >
            <h5 className="text-md ">WhatsApp</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
