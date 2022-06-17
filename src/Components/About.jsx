const About = () => {
  return (
    <section className="about-me" id="about">
      <h2
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos="fade-right"
        className="about-title text-4xl font-bold self-center"
      >
        Who I am
      </h2>
      <p
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos="fade-right"
        className="about-subtitle text-xl bg-[#16E0BD] p-2 self-center capitalize"
      >
        A passionate Web Designer
      </p>
      <div
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos="fade-right"
        className="about-text self-center"
      >
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
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos="fade-left"
        className="about-img"
        src="https://moglan.netlify.app/images/1lip.jpg"
        alt=""
      />
    </section>
  );
};

export default About;
