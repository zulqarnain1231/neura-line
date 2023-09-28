import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import JoinWaitlistBtn from "../Shared/Buttons/JoinWaitlistBtn";
import { Fade } from "react-awesome-reveal";
const NewsLetter = () => {
  return (
    <ComponentWrapper
      id="newsletter"
      style="w-full bg-black-main lg:py-16 py-16"
    >
      <Fade className="w-full" triggerOnce delay={300}>
        <div className="w-full flex flex-col items-center justify-start gap-10">
          <h2 className="text-white-off sm:text-[44px] sm:leading-[54px] text-3xl leading-[46px] font-medium text-center">
            Sign Up To Our{" "}
            <span className="gradient-text-secondary">Newslatter</span>
          </h2>
          <p className="xl:w-[35%] mx-auto text-white-off text-base text-center font-normal">
            And be the first to get updates, news and alpha access to NeuraLine.
          </p>
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            className="h-[66px] lg:w-[60%] w-full mx-auto text-black-main sm:text-2xl text-xl font-medium bg-white-main focus:outline-none rounded-[50px] sm:px-6 px-3"
          />
          <JoinWaitlistBtn />
        </div>
      </Fade>
    </ComponentWrapper>
  );
};

export default NewsLetter;
