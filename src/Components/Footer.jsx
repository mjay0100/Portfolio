import React from "react";
import { Socials } from "../Data";
const Footer = () => {
  return (
    <footer className="bg-[#111] text-center pt-[5rem] pb-3">
      <div className="mx-auto  ">
        <a
          className="text-slate-400 hover:text-slate-600 hover:underline"
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
              <li className="text-lg text-white mt-5 mb-2 mx-3 p-2" key={id}>
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
