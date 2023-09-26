import React, { useState } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };
  const menu = [
    {
      name: "NeuraAgents",
      route: "#agents",
    },
    {
      name: "Services",
      route: "#services",
    },
    {
      name: "Solutions",
      route: "#solutions",
    },
    {
      name: "Roadmap",
      route: "#roadmap",
    },
    {
      name: "Whitepaper",
      route: "#whitepaper",
    },
  ];
  const socail = [
    <FaGithub className="text-white-main text-2xl cursor-pointer" />,
    <IoLogoDiscord className="text-white-main text-2xl cursor-pointer" />,
    <FaReddit className="text-white-main text-2xl cursor-pointer" />,
    <FaTwitter className="text-white-main text-xl cursor-pointer" />,
  ];
  return (
    <>
      {" "}
      <ComponentWrapper style="w-full h-[70px] bg-black-main" id="navbar">
        <nav className="w-full h-full bg-transparent flex items-center justify-between">
          <img
            src="/Assets/Logo.png"
            className="h-[36px] w-[170px] object-contain pointer-events-none"
            alt=""
          />
          <div className="h-full lg:flex hidden items-center justify-center gap-6">
            {menu.map((item: any, index: number) => (
              <a
                key={index}
                href={item.route}
                className="text-white-main text-lg font-light"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="h-full xl:flex hidden items-center justify-center gap-6">
            {socail.map((item: React.ReactNode) => item)}
          </div>
          <button
            onClick={toggleDrawer}
            className="lg:hidden h-full flex items-center justify-center"
          >
            <RiMenu3Fill className="sm:text-3xl text-2xl text-white-main" />
          </button>
        </nav>
      </ComponentWrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{ width: "100%" }}
      >
        <div className="w-full h-full bg-black-main flex flex-col items-start justify-start p-4 gap-10">
          <div className="w-full flex items-center justify-end">
            <button onClick={toggleDrawer} className="">
              <RxCross1 className="text-white-main text-2xl" />
            </button>
          </div>
          <div className="w-full flex items-center flex-col justify-start gap-8">
            {menu.map((item: any, index: number) => (
              <a
                key={index}
                href={item.route}
                onClick={toggleDrawer}
                className="text-white-main text-lg font-light"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="w-full flex items-center justify-center gap-6">
            {socail.map((item: React.ReactNode) => item)}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
