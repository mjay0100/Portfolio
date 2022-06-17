import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import colorGame from "./images/colorGame.png";
import Iwd from "./images/Iwd.png";
import list from "./images/list.png";
import stripe from "./images/stripe.png";

export const Service = [
  {
    id: 1,
    title: "Design + Development",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 2,
    title: "Design + Development",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "Design + Development",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Design + Development",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const Work = [
  {
    id: 1,
    url: "https://the-rgb-game.netlify.app/",
    image: colorGame,
  },
  {
    id: 2,
    url: "https://the-grocery-list.netlify.app/",
    image: list,
  },
  {
    id: 3,
    url: "https://iwdindia.in/",
    image: Iwd,
  },
  {
    id: 4,
    url: "https://my-stripe-clone.netlify.app/",
    image: stripe,
  },
];

export const Socials = [
  {
    id: 1,
    url: "https://github.com/mjay0100",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://twitter.com/Mustaphajay2Jay",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/_mjay/",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/mustapha-jay-470275195/",
    icon: <FaLinkedin />,
  },
];
