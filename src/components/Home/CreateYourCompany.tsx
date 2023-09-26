import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";

const CreateYourCompany = () => {
  return (
    <ComponentWrapper id="company" style="lg:py-36 py-10">
      <div className="w-full grid lg:grid-cols-[1fr,1.5fr] gap-16">
        <aside className="w-full sm:h-[650px] h-[400px] relative">
          <img
            src="/Assets/FlowChart.png"
            className="w-full h-full lg:object-contain object-fill pointer-events-none z-20"
            alt=""
          />
        </aside>
        <aside className="w-full flex flex-col items-center justify-center gap-6">
          <h2 className="text-white-main text-center sm:text-6xl text-5xl font-semibold">
            Create Your Own{" "}
            <span className="gradient-text-secondary">Company</span> Structure
            It <span className="gradient-text-secondary">Your Way</span>
          </h2>
          <p className="text-white-main text-xl text-center font-medium">
            Pick the best suited AI Agents for the job and create a workflow
            that suites the task. Fully Customizable , No Coding experience
            required.
          </p>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default CreateYourCompany;
