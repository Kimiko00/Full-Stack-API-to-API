import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);
/// for headers
const Menus = [
  { title: "Home", href: "/Home", icon: <HiOutlineHomeModern /> },
  {
    title: "Manage Users",
    href: "/Manage-Users",
    icon: <HiOutlineUserGroup />,
  },
  {
    title: "Social Media",
    icon: <IoGlobeOutline />,
    spacing: true,
    submenu: true,
    submenuItems: [
      { title: "Twitter", href: "/Twitter", icon: <IoLogoTwitter /> },
      { title: "Instagram", href: "/Instagram", icon: <AiFillInstagram /> },
      { title: "Facebook", href: "/Facebook", icon: <AiFillFacebook /> },
    ],
  },
  {
    title: "Vendors",
    submenu: true,
    submenuItems: [
      { title: "Cisco", href: "/Cisco", icon: <AiOutlineBorderOuter /> },
      {
        title: "Fortinet",
        href: "/Fortinet",
        icon: <AiOutlineBorderOuter />,
      },
      {
        title: "Dominiux",
        href: "/Dominiux",
        icon: <AiOutlineBorderOuter />,
      },
    ],
  },
  {
    title: "Others",
    submenu: true,
    submenuItems: [
      { title: "NIST", href: "/Nist", icon: <IoNewspaperOutline /> },
      {
        title: "Stackoverflow",
        href: "/Stackoverflow",
        icon: <IoLogoStackoverflow />,
      },
      { title: "Github", href: "/Github", icon: <IoLogoGithub /> },
    ],
  },
  { title: "Inbox", href: "/Inbox", spacing: true },
  { title: "Profile", href: "/Profile", icon: <HiOutlineUserCircle /> },
  { title: "Setting", href: "/Setting", icon: <HiAdjustmentsVertical /> },
  { title: "Logout", href: "/Logout", icon: <HiPower />, spacing: true },
];
