import React from "react";

const About = () => {
  return (
    <section className="about-me">
      <h2 className="about-title text-4xl font-bold self-center">Who I am</h2>
      <p className="about-subtitle text-xl bg-[#16E0BD] p-2 self-center capitalize">
        A passionate Web Designer from kano state
      </p>
      <div className="about-text self-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        className="about-img"
        src="https://public-v2links.adobecc.com/6ebfeb86-6eeb-4b69-77dc-ecf4c4506bcc/component?params=component_id%3A94e37e08-c26d-4c22-933c-be84b27328b2&params=version%3A0&token=1654780151_da39a3ee_efbf15b96277bfaeec60e354c7ce4356c8de10b7&api_key=CometServer1"
        alt=""
      />
    </section>
  );
};

export default About;
