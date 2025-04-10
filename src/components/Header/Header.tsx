import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element || isScrolling) return;

    setIsScrolling(true);
    setIsMenuOpen(false);

    const offset = 100;
    const startPosition = window.pageYOffset;
    const targetPosition =
      element.getBoundingClientRect().top + startPosition - offset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed transition-all duration-300 top-0 left-0 right-0 z-50 bg-blue-900/90 backdrop-blur-sm h-24 shadow-lg">
      <div className="flex items-center justify-center h-full px-4">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <div className="text-4xl font-bold text-yellow-400 font-mono tracking-tighter ml-8 cursor-default hover:scale-105 transition-transform duration-200">
            &lt;NF/&gt;
          </div>

          <div className="relative mr-8">
            <button
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 cursor-pointer group"
              aria-label="Menu"
            >
              <span
                className={`w-8 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-8 h-0.5 bg-yellow-400 rounded-full transition-all duration-200 ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`w-8 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {isMenuOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 bg-blue-800 rounded-md shadow-xl py-1 z-50 border border-yellow-400
                  transition-all duration-300 origin-top-right
                  ${isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
                `}
              >
                {["sobre", "tecnologias", "projetos", "contato"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block px-4 py-3 text-yellow-400 hover:bg-blue-700 transition-colors hover:scale-105 active:scale-95"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      scrollTo(item);
                    }}
                  >
                    <span className="inline-block transition-all duration-300 hover:translate-x-1">
                      {item === "sobre"
                        ? "Sobre mim"
                        : item === "projetos"
                        ? "Projetos" // Removi o acento (forma correta)
                        : item === "contato"
                        ? "Contato" // Removi o acento (forma correta)
                        : "Tecnologias"}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
