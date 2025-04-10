export const HeroTitle = () => {
  return (
    <div className="text-center md:text-center font-bebas tracking-tighter">
      <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-none">
        EU SOU <span className="text-yellow-400">NICOLAS</span>,
      </h1>
      <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mt-4 md:mt-6 flex justify-center md:justify-start items-baseline leading-tight">
        DESENVOLVEDOR{" "}
        <span className="text-yellow-400 relative">
          &nbsp; FULLSTACK
          <span className="inline-block ml-2 w-3 h-10 bg-yellow-400 animate-blink"></span>
        </span>
      </h2>
    </div>
  );
};
