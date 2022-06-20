import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import colorGame from "./images/colorGame.png";
import Iwd from "./images/Iwd.png";
import menu from "./images/menu.png";
import stripe from "./images/stripe.png";

export const Service = [
  {
    id: 1,
    title: "Design + Development",
    body: "I design detailed websites that fit client's demand, Each client has his/her requirements and I take it upon myself to follow each specification to the T to meet clients demands ",
  },
  {
    id: 2,
    title: "Reusable Code",
    body: "I write well detailed,testable and efficient code by using best software practices. I integrate data from various source to meet all the desired requirements",
  },

  {
    id: 3,
    title: "Web  Development",
    body: "I make the best web design with the most current and up-to-date technologies such as React,Nextjs,Tailwindcss among other to bring each website to its full potential.",
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
    url: "https://little-menu.netlify.app/",
    image: menu,
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
