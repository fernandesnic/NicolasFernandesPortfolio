export const HeroTitle = () => {
  return (
    <div className="text-center md:text-center font-bebas tracking-tighter">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-none">
        EU SOU <span className="text-yellow-400">NICOLAS</span>,
      </h1>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-3 sm:mt-4 md:mt-6 flex flex-wrap justify-center md:justify-start items-baseline leading-tight">
        DESENVOLVEDOR&nbsp;{" "}
        <span className="text-yellow-400 relative inline-flex items-baseline">
          FULLSTACK
          <span className="inline-block ml-2 w-2 sm:w-3 h-8 sm:h-10 bg-yellow-400 animate-blink"></span>
        </span>
      </h2>
    </div>
  );
};
