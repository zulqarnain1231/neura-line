import React from "react";

const Vision = () => {
  return (
    <section
      id="vision"
      className="w-full grid lg:grid-cols-2 gap-6 place-items-center lg:py-0 py-10"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 xl:pl-[40px] lg:pl-[40px] px-4 md:px-10 lg:pr-0 lg:mt-[400px]">
        <h2 className="text-white-off text-center sm:text-6xl text-5xl font-semibold">
          Your <span className="gradient-text-secondary">Vision</span> Comes
          True
        </h2>
        <p className="text-white-off text-center text-xl font-normal">
          With NeuraLine you are able to interrupt and suggest changes at any
          point of the autonomous development , to shape the developed product
          to fit your vision.
        </p>
        <p className="text-white-off text-center text-xl font-normal">
          With our man- in-the-loop approach you will always be in the know of
          any small change in the development cycle and you will be able to
          react to it to suit the product for your needs.
        </p>
      </div>
      <div className="w-full h-[1500px] lg:inline-block hidden">
        <img
          className="w-full h-full object-fill"
          src="/Assets/Vision/Vision.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Vision;
