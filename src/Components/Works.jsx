import React from "react";
import { Work } from "../Data";

const Works = () => {
  console.log(Work);
  return (
    <section className="bg-[#303030] p-[7rem]">
      <div className="text-center">
        <h2 className="text-white text-3xl mb-4">My works</h2>

        <p className="text-[#14CFAE] mb-[2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          veniam.
        </p>
      </div>
      <div className="text-center w-fit mx-auto grid sm:grid-cols-2 lg:grid-cols-4 -[5rem] ">
        {Work.map((work) => {
          const { id, image } = work;
          return (
            <article key={id} className="overflow-hidden mb-[1rem] md:mb-0">
              <img
                src={image}
                alt=""
                className="w-[300px] hover:transition-all rounded-sm  duration-700 ease-in-out hover:scale-110  hover:opacity-70"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
