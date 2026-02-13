function Hero() {
  return (
    <section className="flex items-center md:justify-start px-5 md:px-20 py-4 w-full min-h-[70vh] bg-burgundy hero">
      <div className="md:w-150 max-w-5xl text-white flex flex-col items-center text-center md:text-left md:items-start gap-4">
        <h1 className="uppercase text-3xl md:text-6xl font-poppins font-bold">
          Unleash your inner strength{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>

        <button className="bg-burgundy text-white hover:bg-white hover:text-burgundy rounded-xl p-3 font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
