import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import { Fade, Slide } from "react-awesome-reveal";
const Startup = () => {
  return (
    <ComponentWrapper id="startup" style="lg:py-28 py-16">
      <div className="w-full grid xl:grid-cols-[1.5fr,1fr] gap-16">
        <Slide className="w-full" triggerOnce direction="left">
          <aside className="w-full flex flex-col items-center justify-center gap-10 ideal-startup-gradient">
            <h2 className="xl:w-[85%] w-full text-white-main sm:text-5xl text-3xl leading-[44px] text-center font-medium">
              From Idea to a Full Startup{" "}
              <span className="gradient-text">In Minutes</span>
            </h2>
            <p className="text-center text-white-main sm:text-lg text-base font-medium">
              Iterate over your ideas and jump from a sketch to a full prototype
              in just a couple of minutes.
            </p>
            {/* <span className="absolute bottom-[30%] right-[10%] md:w-[250px] w-[150px] md:h-[250px] h-[150px] transform-[rotate(161.99deg)] opacity-30 bg-brand-main shadow-circle rounded-full md:blur-[100px] blur-[50px] pointer-events-none" />
            <span className="absolute -bottom-[5%] right-[0%] md:w-[200px] w-[150px] md:h-[250px] h-[100px] transform-[rotate(161.99deg)] opacity-30 bg-brand-secondary shadow-circle rounded-full md:blur-[100px] blur-[50px] pointer-events-none" /> */}
          </aside>
        </Slide>
        <Slide className="w-full" triggerOnce direction="right" delay={200}>
          <aside className="w-full flex sm:flex-row flex-col items-center justify-center gap-10">
            <div className="ideal-startup-gradient2 sm:w-[220px] w-[160px] sm:h-[220px] h-[160px] pointer-events-none">
              {" "}
              <img
                className="w-full h-full object-contain pointer-events-none"
                src="/Assets/Startup/HalfCircle.png"
                alt=""
              />
            </div>

            <img
              className="sm:w-[220px] w-[160px] sm:h-[220px] h-[160px] object-contain pointer-events-none"
              src="/Assets/Startup/FilledCircle.png"
              alt=""
            />
          </aside>
        </Slide>
      </div>
    </ComponentWrapper>
  );
};

export default Startup;
