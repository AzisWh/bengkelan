"use client";
import Layout from "../Layout/Layout";
import Hero from "../sections/Hero/Hero";
import Service from "../sections/Service/Service";
import Parralax from "../sections/Parralax/Parralax";
import About from "../sections/About/About";

export const Landing = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Parralax />
        <Service />
      </Layout>
    </>
  );
};
