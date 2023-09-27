import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import FeatureCard from "./FeatureCard";
import { Fade, Slide } from "react-awesome-reveal";

const Features = () => {
  return (
    <ComponentWrapper id="features" style="lg:py-36 py-16 features-gradient">
      <div className="w-full grid lg:grid-cols-3 gap-10">
        <Slide className="w-full" direction="left" triggerOnce>
          <FeatureCard
            title={
              <h2 className="text-white-main text-center text-4xl leading-[46px] sm:text-6xl font-semibold">
                No <span className="gradient-text">Coding</span> Knowledge
                Required
              </h2>
            }
            detail="  Dive into the world of innovation where your ideas are your only
            limit. Our platform is intuitively designed, allowing you to
            transform thoughts into tangible prototypes effortlessly. Say
            goodbye to the complexities of coding and hello to limitless
            creativity. Let Neuraline be the bridge between your imagination and
            reality. Your next big idea awaits, and no coding knowledge is
            required. Join us, and let's redefine the future, one idea at a
            time!"
          />
        </Slide>
        <Slide className="w-full" direction="up" triggerOnce>
          <FeatureCard
            title={
              <h2 className="text-white-main text-center text-4xl leading-[46px] sm:text-6xl font-semibold">
                Unleash the Power of{" "}
                <span className="gradient-text-secondary">AI</span>
              </h2>
            }
            detail=" Our goal is to create a fully autonomous AI company which you can control and customize for you own needs and projects."
            gap="xl:gap-[90px] gap-7"
          />{" "}
        </Slide>
        <Slide className="w-full" direction="right" triggerOnce>
          <FeatureCard
            title={
              <h2 className="text-white-main text-center text-4xl leading-[46px] sm:text-6xl font-semibold">
                Transform <span className="gradient-text">Your Ideas</span>
              </h2>
            }
            detail="Neuraline is designed to be intuitive and powerful. Start with your raw idea, and watch as our AI seamlessly crafts it into a full-fledged prototype. Our platform is the perfect blend of human intelligence and machine precision. Here's a simple step-by-step process of how Neuraline transforms your dreams into reality:"
            gap="xl:gap-[84px] gap-7"
          />
        </Slide>
      </div>
    </ComponentWrapper>
  );
};

export default Features;
