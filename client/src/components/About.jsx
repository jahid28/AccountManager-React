import React from "react";
import aboutImage from "./Images/about.jpg";

const About = () => {
  return (
    <div className=" h-[100vh]">
    {/* <div className="bg-orange-100 h-[100vh]"> */}
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-0 lg:mb-0">
              <h1 class="text-gray-900 text-6xl title-font font-medium mb-4">
                About Us
              </h1>

              <p class="leading-relaxed">
                Account managers serve as the liaison between companies and
                their customers. It is an account manager's responsibility to
                address customers' needs and concerns as quickly and effectively
                as possible to develop and maintain strong relationships. They
                typically work with multiple small accounts or a few larger
                ones.
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
