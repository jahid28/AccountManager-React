import React from "react";
import { useNavigate, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font bg-transparent fixed top-0 w-[100%]">
        <div class="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-3xl">The PassX</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

            <Link to={"/"} class=" mr-5 text-xl cursor-pointer hover:text-gray-900">Home</Link>
            <Link to={"/about"} class="mr-5 text-xl cursor-pointer hover:text-gray-900">About</Link>
            <Link to={"/contact"} class="mr-5 text-xl cursor-pointer hover:text-gray-900">Contact</Link>
            <Link to={"/login"} class="mr-5 text-xl cursor-pointer hover:text-gray-900">Login/Signup</Link>
          </nav>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
