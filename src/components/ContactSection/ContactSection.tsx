import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const ContactSection = () => {
  return (
    <section
      id="contato"
      className="py-20 px-4 bg-gray-900 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas text-yellow-400 mb-12 text-center tracking-tighter">
          /CONTATO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Redes Sociais */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bebas text-white mb-6 tracking-tighter">
              REDES SOCIAIS
            </h3>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/fernandesnic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin className="text-2xl text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/fernandesnic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaGithub className="text-2xl text-white" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Contato Direto */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bebas text-white mb-6 tracking-tighter">
              CONTATO DIRETO
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:nicolasbafernandes@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <SiGmail className="text-2xl text-[#EA4335]" />
                <span>nicolasbafernandes@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5511933976537"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaWhatsapp className="text-2xl text-[#25D366]" />
                <span>(11) 933976537</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mensagem Opcional */}
        <div className="mt-12 text-center text-gray-400">
          <p>Disponível para oportunidades e colaborações!</p>
          <p className="mt-2 text-sm">Respondo em até 24h.</p>
        </div>
      </div>
    </section>
  );
};
