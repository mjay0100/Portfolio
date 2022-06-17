import React from "react";
import { Service } from "../Data";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Services = () => {
  return (
    <BrowserRouter>
      <section
        className="services bg-no-repeat bg-cover text-white text-center  "
        id="services"
      >
        <h1 className="text-3xl p-4 text-[#14CFAE]">What I do</h1>
        <div className="w-[50px] h-[2px] mx-auto bg-[#14CFAE] opacity-50 text-center "></div>
        <div className="md:flex">
          {Service.map((item) => {
            const { id, title, body } = item;
            return (
              <div key={id} className="p-5">
                <h3>{title}</h3>
                <p className="">{body}</p>
              </div>
            );
          })}
        </div>
        <button className="btn bg-[#16E0BD] my-[2rem] p-2 rounded-md text-black hover:scale-110 transition-all duration-300 ease-in-out ">
          <Link to="#works">see my work</Link>
        </button>
      </section>
    </BrowserRouter>
  );
};

export default Services;
