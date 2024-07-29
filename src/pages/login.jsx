import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Login = () => {
    return (
        <>
        <Header/>
   
        <div className="h-[90vh] flex flex-col items-center justify-center bg-gray-200 text-white ">
      <div className="bg-blue-600 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form className="flex flex-col items-center">
          <div className="relative w-full mb-4">
            <input
              className="border border-blue-600 bg-white text-black rounded-lg px-4 py-2 pl-10 w-full"
              placeholder="Email"
              type="email"
              required
            />
            <MdMail className="absolute left-3 top-3 text-blue-600" />
          </div>
          <div className="relative w-full mb-6">
            <input
              className="border border-blue-600 bg-white text-black rounded-lg px-4 py-2 pl-10 w-full"
              placeholder="Senha"
              type="password"
              required
            />
            <FaLock className="absolute left-3 top-3 text-blue-600" />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <span>
              Don't have an account?{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Register
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

export default Login;