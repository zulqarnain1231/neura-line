import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import { Fade, Slide } from "react-awesome-reveal";
import ParagraphText from "../Shared/Typography/ParagraphText";
const Startup = () => {
  return (
    <ComponentWrapper id="startup" style="lg:py-28 py-16">
      <div className="w-full grid xl:grid-cols-[1.5fr,1fr] gap-16">
        <Slide className="w-full" triggerOnce direction="left">
          <aside className="w-full flex flex-col items-center justify-center gap-10 ideal-startup-gradient">
            <h2 className="xl:w-[80%] w-full text-white-main sm:text-[44px] sm:leading-[54px] text-3xl leading-[44px] text-center font-medium">
              From Idea to a Full Startup{" "}
              <span className="gradient-text">In Minutes</span>
            </h2>
            <ParagraphText
              text="Iterate over your ideas and jump from a sketch to a full prototype
              in just a couple of minutes."
              style="xl:w-[80%] w-full"
            />
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
