import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";


function App() {
  // const [cookieValue, setCookieValue] = useState(Cookies.get('email'));

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const updatedCookieValue = Cookies.get('email');
  //     if (updatedCookieValue !== cookieValue) {
  //       setCookieValue(updatedCookieValue);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [cookieValue]);
  
  return (
    <div className="App ">
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>

        <Footer />

      </Router>

      

    </div>
  );
}

export default App;
