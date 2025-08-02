// import image from "../../assets/images/parallax.jpeg";

const Parralax = () => {
  return (
    <>
      <section className="parallax-section">
        {/* background parallax */}
        <div className="parallax-bg"></div>

        {/* konten */}
        <div className="parallax-content text-white">
          <h2 className="text-4xl font-bold">Premium Car Care</h2>
          <p className="mt-4 text-lg">
            Experience the shine and performance your car deserves
          </p>
        </div>
      </section>
    </>
  );
};

export default Parralax;
