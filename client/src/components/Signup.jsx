import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import loginImage from './Images/login.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: 0,
    email: '',
    password: ''
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      
        await axios
          .post(`${import.meta.env.VITE_APP_SERVER_URL}/signup`, {
            formData,
          })
          .then((res) => {
            if (res.data == "exist") {
              toast.error("Email is already registered");
            } else if (res.data == "notexist") {
              // Cookies.set("email", formData.email, { expires: 7 });
              // if (Cookies.get("allProducts") != undefined || Cookies.get("allProducts") != null) {
              //   Cookies.remove("allProducts")
              // }

              toast.success("Successfully Registered", {
                autoClose: 1000,
              });
              setTimeout(() => {
                history("/login");
              }, 2000);
            }
          })
          .catch((e) => {
            toast.error("Somethig went wrong!");
          });
      
    } catch (e) {
      toast.error("Somethig went wrong!");
    }
  };

  return (
    <div className="flex ">
      <div>
        <img
          style={{ height: "100vh" }}
          className="w-[50vw] "
          src={loginImage}
          alt=""
        />
      </div>

      <div className="grid place-items-center w-[50vw]">
        <form method="/signup" action="POST" onSubmit={submit}>
          <div className="grid">
            <h2 className="text-4xl font-bold">Sign up</h2>
            <p className="mb-8">Welcome to PassX</p>

            <input
            value={formData.name} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required
            name="name"  
            type="text"
              className="border-b-2 border-black w-[30vw] text-2xl mb-8"
              placeholder="Name"
            />
            <input
            value={formData.number} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required
            name="phone"  
            type="number"
              className="border-b-2 border-black w-[30vw] text-2xl mb-8"
              placeholder="Phone No."
            />
            <input
            
            value={formData.email} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required
            name="email"  
            type="email"
              className="border-b-2 border-black w-[30vw] text-2xl mb-8"
              placeholder="Email"
            />
            <input
            value={formData.password} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required
            name="password"  
            type="password"
              className="border-b-2 border-black w-[30vw] text-2xl mb-8"
              placeholder="Password"
            />

            <button type="submit" className="bg-black text-white p-2 text-2xl mb-8">
              Sign Up
            </button>

            <p>Already have an account?</p>

            <Link
              to={"/login"}
              className="border-2 border-black  p-2 text-2xl text-center"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
