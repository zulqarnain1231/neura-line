import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
const Vision = () => {
  return (
    <section
      id="vision"
      className="w-full grid lg:grid-cols-2 gap-6 place-items-center lg:py-0 py-16"
    >
      <Slide className="w-full" triggerOnce direction="left">
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 xl:pl-[70px] lg:pl-[40px] px-4 md:px-10 lg:pr-0 lg:mt-[400px]">
          <h2 className="text-white-off text-center sm:text-[44px] sm:leading-[54px] text-3xl leading-[44px] font-medium">
            Your <span className="gradient-text-secondary">Vision</span> Comes
            True
          </h2>
          <p className="text-white-off text-center text-base font-normal">
            With NeuraLine you are able to interrupt and suggest changes at any
            point of the autonomous development , to shape the developed product
            to fit your vision.
          </p>
          <p className="text-white-off text-center text-base font-normal">
            With our man- in-the-loop approach you will always be in the know of
            any small change in the development cycle and you will be able to
            react to it to suit the product for your needs.
          </p>
        </div>
      </Slide>
      <Slide className="w-full" triggerOnce direction="right" delay={500}>
        <div className="w-full h-[1500px] lg:inline-block hidden vision-gradient">
          <img
            className="w-full h-full object-fill"
            src="/Assets/Vision/Vision.png"
            alt=""
          />
        </div>
      </Slide>
    </section>
  );
};

export default Vision;
