import React from "react";
import aboutImage from './Images/office-620817_1280.jpg';

const About = () => {
  return (
    <div className="bg-orange-100 h-[100vh]">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
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
    </div>
  );
};

export default About;
