import React from "react";
import { Work } from "../Data";

const Works = () => {
  console.log(Work);
  return (
    <section className="bg-[#303030] p-[7rem]" id="works">
      <div className="text-center">
        <h2 className="text-white text-3xl mb-4">My works</h2>

        <p className="text-[#14CFAE] mb-[2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          veniam.
        </p>
      </div>
      <div className="text-center w-fit mx-auto grid sm:grid-cols-2 lg:grid-cols-4 -[5rem] ">
        {Work.map((work) => {
          const { id, image, url } = work;
          return (
            <article
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              key={id}
              className="border-2 border-solid border-[#14CFAE] overflow-hidden gmb-[1rem] md:mb-0"
            >
              <a href={url}>
                <img
                  src={image}
                  alt=""
                  className=" hover:transition-all rounded-sm  duration-700 ease-in-out hover:scale-110  hover:opacity-70"
                />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
