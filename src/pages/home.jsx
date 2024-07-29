import React from "react";
import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";



export const Home = () => {
    return (
        <>
        <Header/>
        

        <main className="flex w-full h-200 mb-9 mt-9 bg-gray-300"> 
  <div className="flex-shrink-0 w-1/2 " ><img src="/imagem.jpg" alt="" className="w-full h-auto"/></div>
 <div className="flex items-center justify-center w-1/2 bg-gray-200 p-4"> <h1  className="text-7xl font-bold text-black">Welcome </h1></div>
</main>
        <Footer/>
        </>
    )
}

export default Home;