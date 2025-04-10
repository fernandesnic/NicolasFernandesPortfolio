import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiMysql,
  SiNextdotjs,
  SiFigma,
  SiMongodb,
} from "react-icons/si";
import { DiDatabase, DiScrum } from "react-icons/di";
import { GiBrain } from "react-icons/gi";
import { SiJest } from "react-icons/si";

export const SkillsSection = () => {
  const knowledgeAndSkills = [
    {
      title: "CONHECIMENTOS TÉCNICOS",
      items: [
        { name: "POO", icon: <GiBrain className="text-purple-400" /> },
        {
          name: "Testes Unitários",
          icon: <SiJest className="text-red-400" />,
        },
        { name: "Clean Code", icon: <VscCode className="text-green-400" /> },
        { name: "Scrum/Ágil", icon: <DiScrum className="text-yellow-400" /> },
        { name: "SOLID", icon: <GiBrain className="text-blue-400" /> },
        { name: "Git Flow", icon: <FaGitAlt className="text-orange-400" /> },
      ],
    },
    {
      title: "SOFT SKILLS",
      items: [
        { name: "Comunicação Clara", icon: "💬" },
        { name: "Trabalho em Equipe", icon: "👥" },
        { name: "Resolução de Problemas", icon: "🧩" },
        { name: "Aprendizado Contínuo", icon: "📚" },
        { name: "Adaptabilidade", icon: "🔄" },
        { name: "Gestão de Tempo", icon: "⏱️" },
      ],
    },
  ];
  const skills = [
    {
      title: "LINGUAGENS",
      items: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: "C#", icon: <SiSharp className="text-purple-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-300" /> },
      ],
    },
    {
      title: "FRAMEWORKS",
      items: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
      ],
    },
    {
      title: "FERRAMENTAS",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      ],
    },
    {
      title: "BANCO DE DADOS",
      items: [
        { name: "SQL", icon: <DiDatabase className="text-blue-300" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section id="tecnologias" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas text-yellow-400 mb-16 text-center tracking-tighter">
          /TECNOLOGIAS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bebas text-yellow-400 mb-6 tracking-tighter border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-200">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Seção Inferior: Conhecimentos & Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {knowledgeAndSkills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-xl font-bebas text-yellow-400 mb-6 tracking-tighter">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-200">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
