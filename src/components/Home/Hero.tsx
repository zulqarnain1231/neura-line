import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import JoinWaitlistBtn from "../Shared/Buttons/JoinWaitlistBtn";

const Hero = () => {
  return (
    <ComponentWrapper id="hero" style="w-full min-h-[calc(100dvh-70px)]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-[url('/Assets/Hero/Circles.png')] bg-top bg-no-repeat bg-cover mt-10">
        <div className="xl:w-[70%] md:w-[90%] w-full flex items-center justify-center mx-auto">
          <h1 className="text-center sm:text-[80px] text-6xl sm:leading-[96px] font-semibold text-white-main">
            <span className="gradient-text">Your Own AI Workforce</span> Created
            By You.
          </h1>
        </div>
        <p className="xl:w-[60%] md:w-[80%] w-full mx-auto text-white-main text-xl text-center font-normal ">
          Our goal is to create a fully autonomous AI company which you can
          control and customize for you own needs and projects.
        </p>
        <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-5">
          <JoinWaitlistBtn />
          <button className="h-[70px] w-[215px] flex items-center justify-center text-xl font-normal text-white-main bg-black-main border-2 border-white-main rounded-[100px]">
            Research Paper
          </button>
        </div>
        <div className="w-full lg:h-[500px] sm:h-[300px] h-[250px]  flex items-center justify-center">
          <img
            src="/Assets/Hero/HeroMain.png"
            className="w-full h-full object-fill pointer-events-none"
            alt=""
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
