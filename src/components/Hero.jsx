const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
      <p>A PHYSIQUE IS NOT BORN, IT IS</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Forge<span className="text-lime-400 ">D</span>
      </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I am entering the fire to be remade of
        <span className="text-lime-400 font-medium"> muscle and iron.</span> I
        accept all risks of becoming harder than diamond, developing a handshake
        that can crush coal, and being medically classified as{" "}
        <span className="text-lime-400 font-medium">100% pure gains.</span>
      </p>
      <button className="px-8 py-4 rounded-md border-2 border-lime-400 border-solid bg-gray-950 limeShadow duration-200 cursor-pointer">
        <p>Begin Forging</p>
      </button>
    </div>
  );
};

export default Hero;
