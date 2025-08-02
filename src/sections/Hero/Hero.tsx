"use client";
import cover from "../../assets/images/background-bengkel.png";

const Hero = () => {
  return (
    <div className="bg-gray-100" id="hero">
      <section className="relative flex items-center min-h-screen px-4 py-48 overflow-hidden bg-gray-600 cover bg-soft-gray-gradient sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        <div className="absolute top-0 left-0 z-0 w-full h-full">
          <img
            src={cover}
            alt=""
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="relative z-10 lg:w-3/4 xl:w-2/4 h-100 lg:mt-16">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Peak Performance Starts with the Right Service.
            </h1>
            <p className="mt-4 leading-snug text-white text-x md:text-2xl">
              Welcome to <b>DeepGloss</b>, where trusted mechanics and expert
              care keep your vehicle running smoothly.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 mt-8 font-semibold text-white bg-gray-500 rounded"
            >
              Book a Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
