export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4 relative">
      {/* Linha de separação */}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas text-yellow-400 mb-10 tracking-tighter">
          /SOBRE_MIM
        </h2>

        <div className="space-y-8 text-gray-200">
          {" "}
          {/* Texto mais claro para contraste */}
          <p className="text-xl md:text-2xl leading-relaxed">
            <span className="text-white font-medium">
              Estudante de duas graduações:
            </span>
            <span className="block mt-3 text-yellow-400 ml-4">
              ↳ Desenvolvimento de Software Multiplataforma (FATEC)
            </span>
            <span className="block text-yellow-400 ml-4">
              ↳ Análise e Desenvolvimento de Sistemas (Cruzeiro do Sul)
            </span>
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            Como{" "}
            <span className="text-yellow-400 font-medium">
              estudante dedicado
            </span>
            , estou construindo minha base técnica através de projetos para me
            tornar um{" "}
            <span className="text-yellow-400 font-medium">
              Desenvolvedor Fullstack
            </span>{" "}
            competente.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            Minha abordagem combina{" "}
            <span className="text-yellow-400 font-medium">
              curiosidade técnica
            </span>{" "}
            com{" "}
            <span className="text-yellow-400 font-medium">
              aprendizado contínuo
            </span>
            , buscando sempre as melhores práticas de desenvolvimento enquanto
            construo minha experiência.
          </p>
        </div>
      </div>
    </section>
  );
};
