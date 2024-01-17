import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import loginImage from './Images/login.jpg';

// useState
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/login`, {
          formData,
        })
        .then((res) => {
          if (res.data == "loginPass") {
            // const token=jwt.sign({email:formData.email},"helloandwelcometotechywebdevtutorialonauthhelloandwelcometotechywebdevtutorialonauth")
            // Cookies.set("email", formData.email, { expires: 7 })
            toast.success("Successfully Registered");
          } else if (res.data == "nouser") {
            toast.error("This email is not registered");
          } else if (res.data == "loginFail") {
            toast.error("Invalid Credentials");
          } else if (res.data == "fail") {
            toast.error("Somethig went wrong!");
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
        {/* <div className="grid"> */}
        <form className="grid" method="/signup" action="POST" onSubmit={submit}>

          <h2 className="text-4xl font-bold">Login</h2>
          <p className="mb-8">Welcome to PassX</p>

          <input
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            required
            name="email"
            type="email"
            className="border-b-2 border-black w-[30vw] text-2xl mb-8"
            placeholder="Email"
          />
          <input
            value={formData.password}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            required
            name="password"
            type="password"
            className="border-b-2 border-black w-[30vw] text-2xl mb-8"
            placeholder="Password"
          />

          <button type="submit" className="bg-black text-white p-2 text-2xl mb-8">
            Login
          </button>

          <p>Don't have an account?</p>

          <Link
            to={"/signup"}
            className="border-2 border-black  p-2 text-2xl text-center"
          >
            Signup
          </Link>
          </form>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
