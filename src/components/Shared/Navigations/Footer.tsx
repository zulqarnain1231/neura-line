import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link as Scrolling } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
  const year = new Date().getFullYear();
  const menu = [
    [
      {
        name: "About",
        route: "#",
      },
    ],
    [
      {
        name: "Certifications",
        route: "#",
      },
      {
        name: "ISO",
        route: "#",
      },
      {
        name: "SGR",
        route: "#",
      },
    ],
    [
      {
        name: "For Marketplaces",
        route: "#",
      },
    ],
    [
      { name: "Notification", route: "#" },
      { name: "Transportation", route: "#" },
    ],
    [
      {
        name: "Works",
        route: "#",
      },
    ],
    [
      {
        name: "Contacts",
        route: "#",
      },
    ],
  ];
  return (
    <footer className="w-full flex flex-col items-center justify-start gap-16 lg:pt-16 pt-10 footer-bg z-20">
      <Slide className="w-full z-20" direction="left" triggerOnce>
        <div className="w-full h-full max-w-[1430px] mx-auto md:px-10 px-4">
          <div className="w-full grid md:grid-cols-6 gap-6">
            {menu.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full flex flex-col items-start justify-start gap-1"
              >
                {item.map((el: any, index: number) => (
                  <a
                    key={index}
                    href={el.route}
                    className="text-white-main text-xs font-medium"
                  >
                    {el.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Slide>
      <Slide className="w-full z-20" direction="left" triggerOnce>
        <div className="w-full bg-black-main py-5 md:px-10 px-4 z-20">
          <div className="w-full h-full max-w-[1430px] mx-auto">
            <div className="w-full grid md:grid-cols-[.5fr,1fr,1fr,2fr,1fr] gap-6 py-2 border-b border-b-white-main/40">
              <Scrolling
                activeClass="active"
                to={"navbar"}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                className="h-[40px] w-[40px] flex items-center justify-center border border-white-main rounded-full cursor-pointer"
              >
                <BsArrowUp className="text-2xl text-white-main" />
              </Scrolling>
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <p className="text-white-main/40 text-xs font-medium">
                  Contact
                </p>
                <p className="text-white-main text-xs font-medium">
                  +1 891 989-11-91
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <p className="text-white-main/40 text-xs font-medium">Email</p>
                <p className="text-white-main text-xs font-medium">
                  info@logoipsum.com
                </p>
              </div>

              <div className="w-full flex flex-col items-start justify-start gap-1">
                <p className="text-white-main/40 text-xs font-medium">
                  Address
                </p>
                <p className="text-white-main text-xs font-medium">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
              <div className="w-full flex items-center md:justify-end justify-start">
                <button className="h-[36px] w-[100px] flex items-center justify-center bg-transparent text-white-main text-sm font-medium border border-white-main rounded-[40px]">
                  SignUp
                </button>
              </div>
            </div>
            <div className="flex items-center justify-start py-2">
              <p className="text-sm text-white-main/30 font-medium">
                © {year} — Copyright Privacy
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </footer>
  );
};

export default Footer;
