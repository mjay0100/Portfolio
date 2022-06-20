import myself from "../images/myself2.jpeg";
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
        data-aos-mirror="true"
        data-aos="fade-right"
        className="about-text fw-semibold self-center"
      >
        <p>
          Hi there! I'm Mustapha, a web designer based in Kano, Nigeria .My main
          expertise lies in designing and making responsive, user friendly and
          interactive web pages. Though I do dabble in graphic design and
          illustration. If you like my site, don’t hesitate to reach out!
        </p>
        <p>
          I am passionate about creating user-centered design,gathering and
          translating user data into a design that fits the requirements.
        </p>
      </div>
      <img
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos="fade-left"
        className="about-img"
        src={myself}
        alt=""
      />
    </section>
  );
};

export default About;
