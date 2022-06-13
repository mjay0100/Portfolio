import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <BrowserRouter>
      <header className="flex justify-between px-[2rem] my-3 items-center relative ">
        <div>
          <h1 className="text-2xl">MJ</h1>
        </div>

        <nav
          className={`${
            show ? "nav" : "hidden md:flex justify-between text-black px-2"
          }`}
          onClick={() => setShow(false)}
        >
          <ul className="item md:flex md:flex-row">
            <Link to="#home" className="px-[2rem] ">
              Home
            </Link>
            <Link to="#services" className="px-[2rem] ">
              Services
            </Link>
            <Link to="#about" className="px-[2rem] ">
              About
            </Link>
            <Link to="#works" className="px-[2rem] ">
              Works
            </Link>
          </ul>
        </nav>
        <div
          className={`${
            show
              ? "sm:fixed fixed right-[2rem] z-[100] text-slate-500 flex items-center md:hidden "
              : "relative md:hidden"
          }`}
          onClick={handleClick}
        >
          <FaBars className="text-2xl " />
        </div>
      </header>
    </BrowserRouter>
  );
};

export default Navbar;
