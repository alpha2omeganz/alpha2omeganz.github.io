import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaBook, FaCross } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "About the ministry",
    href: "/about/ministry",
    Icon: FaCross,
  },
  {
    title: "About the series",
    href: "/about/series",
    Icon: IoLibrary,
  },  
  {
    title: "About the author",
    href: "/about/author",
    Icon: FiSearch,
  },    
  {
    title: "Catalogue",
    href: "/catalogue",
    Icon: FaBook,
  },
  {
    title: "Contact",
    href: "/contact",
    Icon: MdEmail,
  },
];