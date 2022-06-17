import React from "react";

const Intro = () => {
  return (
    <section className="intro " id="home">
      <h1
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-mirror="true"
        className="title text-4xl "
      >
        Hi, I am <strong className="block">MJay</strong>
      </h1>
      <p className="subtitle bg-[#16E0BD] p-2 rounded-sm font-xl font-semibold">
        Front End DEV
      </p>

      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-mirror="true"
        className="img shadow-sm shadow-[#16E0BD]/60 "
        src="https://moglan.netlify.app/images/beautiful-curly-blonde-young-woman-white-trendy-blouse-touches-hair-attractive-girl-shirt-pearl-necklace-poses-outside.png"
        alt=""
      />
    </section>
    // <section className="p-4 sm:block md:flex justify-center items-center gap-3 ">
    //   <div className="md:order-last grid grid-cols-1">
    //     {" "}
    //     <h1 className="text-3xl mb-2 title">
    //       Hi, I am <strong className="block">MJay</strong>
    //     </h1>
    //     <p className="subtitle bg-[#16E0BD] mb-2 text-2xl grow p-2 rounded-sm ">
    //       Front End DEv
    //     </p>
    //   </div>
    //   <img
    //     className="img sm:w-full  md:w-[200px]  "
    //     src="https://public-v2links.adobecc.com/6ebfeb86-6eeb-4b69-77dc-ecf4c4506bcc/component?params=component_id%3A94e37e08-c26d-4c22-933c-be84b27328b2&params=version%3A0&token=1654780151_da39a3ee_efbf15b96277bfaeec60e354c7ce4356c8de10b7&api_key=CometServer1"
    //     alt=""
    //   />
    // </section>
  );
};

export default Intro;
