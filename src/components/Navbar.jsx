import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubestudio } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className="flex h-[56px] w-full items-center justify-between fixed bg-white z-10">
      <div className="flex items-center z-20">
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          onClick={() => dispatch(toggleSidebar())}
        >
          <RxHamburgerMenu size={20} />
        </button>
        <Link to="/">
          <img
            className="w-[90px] h-[20px] m-5"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Search />
      </div>
      <ul className="flex gap-4 mx-10">
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
          <RiVideoAddLine size={22} />
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
          <IoMdNotificationsOutline size={22} />
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
          <FaRegUserCircle size={22} />
        </li>
      </ul>
      <Sidebar />

      {/* Side Icons */}

      <div className="fixed top-[75px] w-[64px]">
        <ul
          className={
            location.pathname.startsWith("/watch")
              ? "hidden"
              : "text-xs flex flex-col gap-7"
          }
        >
          <Link to="/">
            <li className="flex flex-col items-center gap-2">
              <AiFillHome size={22} />
              Home
            </li>
          </Link>
          <li className="flex flex-col items-center gap-2 cursor-pointer">
            <SiYoutubestudio size={22} />
            Shorts
          </li>
          <li className="flex flex-col items-center gap-2 cursor-pointer">
            <MdOutlineSubscriptions size={22} />
            Subscriptions
          </li>
          <li className="flex flex-col items-center gap-2 cursor-pointer">
            <MdOutlineVideoLibrary size={22} />
            Library
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
