function Hero() {
  return (
    <section className="flex items-center md:justify-start px-5 md:px-10 py-4 rounded-b-[50px] w-full min-h-[70vh] bg-burgundy bg-opacity-30 hero">
      <div className="md:w-[50%] text-white flex flex-col items-center text-center md:text-left md:items-start gap-4">
        <h1 className="uppercase text-3xl md:text-6xl font-libre font-bold">
          Unleash your inner strength{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>

        <button className="bg-white text-black hover:bg-black hover:text-white rounded-xl p-3">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
