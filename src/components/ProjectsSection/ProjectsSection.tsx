import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "myShop",
      description: "Plataforma de compras com carrinho.",
      tags: ["React", "TypeScript"],
      imageUrl: "/projetos/myshop.jpeg",
      githubUrl: "https://github.com/fernandesnic/myshop",
    },
    {
      id: 2,
      title: "toDo List",
      description: "Lista de Tarefas com filtros e persistência local.",
      tags: ["React", "TypeScript"],
      imageUrl: "/projetos/todo.jpeg",
      githubUrl: "https://github.com/fernandesnic/todo-list",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "CRUD",
      description: "CRUD simples com node e react",
      tags: ["React", "Node"],
      imageUrl: "/projetos/crud.png",
      githubUrl: "https://github.com/fernandesnic/crud",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas text-yellow-400 mb-16 text-center tracking-tighter">
          /PROJETOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
            >
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`Captura de tela do projeto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700 text-yellow-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                      aria-label={`Código fonte no GitHub (${project.title})`}
                    >
                      <FaGithub /> Código
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                      aria-label={`Demo ao vivo (${project.title})`}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/fernandesnic?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700"
            aria-label="Ver todos os projetos no GitHub"
          >
            <FaGithub />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
