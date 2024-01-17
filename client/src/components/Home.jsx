import React, { useEffect, useState } from "react";
import officeImage from './Images/office-2717014_1280.jpg';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import aboutImage from './Images/office-620817_1280.jpg';
// useState
// useEffect
const Home = () => {



  return (
    <div>
     
     <div style={{height:'100vh'}}>
     <img
        className="absolute z-[-1] top-0 w-[100vw]"
        style={{height:'100vh'}}
        // src="./src/components/Images/office-2717014_1280.jpg"
        src={officeImage}
        alt=""
      />
      <div className="grid place-items-center w-[100vw]  mt-56">
        <h2 className="text-xl mb-4">WELCOME TO</h2>
        <h2 className="text-8xl font-thin font-serif">The PassX</h2>
        <h2 className="text-xl mt-10">Account Manager</h2>

        <button className="mt-16 pl-14 pr-14 bg-black text-white rounded-full p-3">Learn More</button>
      </div>
     </div>


      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-0 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-0 lg:mb-0">
              <h1 class="text-gray-900 text-6xl title-font font-medium mb-4">
                Welcome to your Account Manager
              </h1>

              <p class="leading-relaxed mb-4">
                It's a one stop solution for your problem. It is not only for
                individuals but for business to keep a track of their account
                details. In this digital world, it is difficult to keep remember
                things.
              </p>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={aboutImage}
            />
          </div>
        </div>
      </section>


      <div className="mt-8 bg-amber-800 w-[100vw]">
        <h2 className="text-3xl text-white">The PassX</h2>

        <div className="grid grid-cols-2 w-[100%] ml-40 pb-20">
          <div className="border-2 border-white w-fit p-4">
            <h2 className="text-2xl text-white">Office</h2>
            <p className="text-white">
              <i class="fa-solid fa-location-dot"></i> 126 Mumbai, 202485
            </p>
            <p className="text-white">
              <i class="fa-solid fa-mobile"></i> 512-54545-44515
            </p>
            <p className="text-white">
              <i class="fa-solid fa-envelope"></i> hello@passX.com
            </p>
          </div>

          <div className="border-2 border-white w-fit p-4">
            <h2 className="text-2xl text-white">Connect with us</h2>
            <div className="flex">
              <i className="text-white fa-brands fa-facebook text-2xl mr-4"></i>
              <i className=" text-white fa-brands fa-twitter text-2xl mr-4"></i>
              <i className="text-white fa-brands fa-instagram text-2xl mr-4"></i>
            </div>

            <button className="text-white bg-transparent border-2 rounded-full mt-5 border-white p-2">
              Tag us in your photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
