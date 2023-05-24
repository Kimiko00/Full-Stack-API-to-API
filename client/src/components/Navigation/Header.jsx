import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiPower,
  HiSquare3Stack3D,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
  HiOutlineHomeModern,
  HiAdjustmentsVertical,
} from "react-icons/hi2";
import {
  IoArrowBack,
  IoLogoGithub,
  IoLogoTwitter,
  IoGlobeOutline,
  IoNewspaperOutline,
  IoLogoStackoverflow,
  IoChevronDownCircleSharp,
} from "react-icons/io5";
import {
  AiFillFacebook,
  AiOutlineSearch,
  AiFillInstagram,
  AiOutlineFileImage,
  AiOutlineBorderOuter,
} from "react-icons/ai";

export default function Header(props) {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const Menus = [
    {
      title: "Twitter-Topic",
      href: "/Twitter",
      spacing: true,
      icon: <IoLogoTwitter />,
    },
    {
      title: "Twitter-User",
      href: "/Twitter-User",
      icon: <IoLogoTwitter />,
    },
    {
      title: "Sodan",
      spacing: true,
      href: "/sodan",
      icon: <IoNewspaperOutline />,
    },
    { title: "Cisco", href: "/Cisco", icon: <AiOutlineBorderOuter /> },
    {
      title: "NIST",
      spacing: true,
      href: "/Nist",
      icon: <IoNewspaperOutline />,
    },
    {
      title: "NEWS",
      href: "/News",
      icon: <IoNewspaperOutline />,
    },
    {
      title: "Stackoverflow",
      spacing: true,
      href: "/Stackoverflow",
      icon: <IoLogoStackoverflow />,
    },
  ];

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-slate-800 min-h-screen p-5 pt-8 duration-300 relative`}>
        <IoArrowBack
          className={`${
            !open && "rotate-180"
          } bg-white text-slate-800 text-4xl rounded-full absolute 
                -right-3 top-9 border-4 border-slate-800 cursor-pointer`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <HiSquare3Stack3D
            className={`${
              open && "rotate-[360deg]"
            } duration-300 text-white text-4xl rounded cursor-pointer block float-left mr-2`}
          />
          <h1
            className={`${
              !open && "scale-0"
            } duration-300 text-white origin-left font-medium text-2xl`}>
            Menu
          </h1>
        </div>

        <div
          className={`${
            !open ? "px-2.5" : "px-4"
          } flex items-center rounded-md bg-slate-600 mt-6 py-2`}>
          <AiOutlineSearch
            className={`${
              open && "mr-2"
            } text-white text-lg block float-left cursor-pointer`}
            onClick={() => setOpen(!open)}
          />
          <input
            type={"search"}
            placeholder="search"
            className={`${
              !open && "hidden"
            } text-base bg-transparent w-full text-white focus:outline-none`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <NavLink
                to={menu.href}
                key={index}
                className={`${
                  menu.spacing ? "mt-9" : "mt-2"
                } text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
                            hover:bg-slate-100 rounded-md group`}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <AiOutlineFileImage />}
                </span>
                <span
                  className={`${
                    !open && "hidden"
                  } duration-300 text-base font-medium flex-1`}
                  onClick={() => toggleSubmenu(index)}>
                  {menu.title}
                </span>

                <span
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-slate-200 font-semibold whitespace-pre
                                text-black rounded-md shadow-lg shadow-slate-800 px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                                group-hover:left-[5.5rem] group-hover:duration-300 group-hover:w-fit`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <IoChevronDownCircleSharp
                    className={`${
                      submenuOpen[index] ? "rotate-180" : ""
                    } duration-300 text-2xl`}
                    onClick={() => toggleSubmenu(index)}
                  />
                )}
              </NavLink>

              {menu.submenu && submenuOpen[index] && open && (
                <ul className="pt-2">
                  {menu.submenuItems.map((submenuItem, index) => (
                    <NavLink
                      to={submenuItem.href}
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
                                            px-5 hover:bg-slate-100 rounded-md">
                      {submenuItem.icon}
                      {submenuItem.title}
                    </NavLink>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>

      <div className="p-7 w-full">
        <h1 className="text-2xl font-semibold pb-4 font-mono">
          Packet Systems Indonesia
        </h1>
        <div className="min-h-screen rounded-2xl justify-center">
          <div className="justify-center">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
