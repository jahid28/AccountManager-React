import React from "react";
import officeImage from './Images/office-2717014_1280.jpg';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Home = () => {

  const submit = async (e) => {
    // e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/test`)
        .then((res) => {
          if(res.data=="passed"){

            alert("passed")
          }
          if(res.data=="faied"){

            alert("failed ")
          }
          else{

            alert("none")
          }
        })
        .catch((e) => {
          toast.error("Somethig went wrong!");
        });
    } catch (e) {
      console.log('lol')
      toast.error("Somethig went wrong!");
    }
  };


  return (
    <div>
      <button className="text-9xl" onClick={()=>{submit()}}>click</button>
      <img
        className="absolute z-[-1] top-0 w-[100vw]"
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

      <div className="mt-96 bg-amber-800 w-[100vw]">
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
