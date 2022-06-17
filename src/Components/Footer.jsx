import { Socials } from "../Data";
const Footer = () => {
  return (
    <footer className="bg-[#111] text-center pt-[5rem] pb-3">
      <div className="mx-auto  ">
        <a
          className="text-slate-400 hover:text-slate-600 hover:underline transition-all duration-400 ease-in-out"
          href="mailto:mustaphajay2@gmail.com"
        >
          mustaphajay2@gmail.com
        </a>
      </div>
      <div className="mx-auto w-1/2">
        <ul className="flex justify-center mx-auto w-0">
          {Socials.map((item) => {
            const { id, icon, url } = item;

            return (
              <li
                className="text-[1.25rem] text-white mt-5 mb-4 mx-3 p-2 hover:text-[#14CFAE] transition-all duration-400 ease-in-out"
                key={id}
              >
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
