import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";



export const SignUp = () => {
    return (
        <>
        <Header/>
             
        <div className="h-[90vh] flex items-center justify-center bg-gray-200">
      <div className="bg-blue-600 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">SignUp</h2>
        <form className="flex flex-col">
          <div className="relative mb-4">
            <input
              className="border border-blue-800 bg-white text-black rounded-lg px-4 py-2 pl-10 w-full"
              placeholder="Username"
              type="text"
            />
            <FaUser className="absolute left-3 top-3 text-blue-800" />
          </div>
          <div className="relative mb-4">
            <input
              className="border border-blue-800 bg-white text-black rounded-lg px-4 py-2 pl-10 w-full"
              placeholder="Email"
              type="email"
            />
            <MdMail className="absolute left-3 top-3 text-blue-800" />
          </div>
          <div className="relative mb-6">
            <input
              className="border border-blue-800 bg-white text-black rounded-lg px-4 py-2 pl-10 w-full"
              placeholder="Password"
              type="password"
            />
            <FaLock className="absolute left-3 top-3 text-blue-800" />
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-200"
          >
            Register
          </button>
          <div className="mt-4 text-center text-white">
            <span>
              Already have an account?{' '}
              <a href="#" className="text-blue-300 hover:underline">
                Login
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>


        <Footer/>
        </>
    )
}

export default SignUp;