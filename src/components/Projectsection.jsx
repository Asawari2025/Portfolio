import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Youtube-clone Back-end-Focused_project",
    description:
      "YouTube clone using Node.js, Express.js, MongoDB, Mongoose, Cloudinary, Atlas, Cookies, authentication token, multer, controllers, middleware, following industry standards coding structure,",
    image: "/projects/youtube-clone-project.jpg",
    tags: [
      "MongoDB",
      "Mongoose",
      "Atlas",
      "Node.Js",
      "Express.Js",
      "Cloudinary",
      "Cookies",
      "Multer",
    ],
    gitHubUrl: "https://github.com/Asawari2025/Mega-Project",
  },
  {
    id: 2,
    title: "Full-stack-basic-project",
    description:
      "Created server with express and from localhost requested data by providing proxy also used axios",
    image: "/projects/Full_stack_project.png",
    tags: ["React.Js", "Node.Js", "TailwindCSS"],
    gitHubUrl: "https://github.com/Asawari2025/Full-stack-basic-project",
  },
  {
    id: 3,
    title: "Currency Converter",
    description:
      "Created React + Vite + tailwindcss project using react basic hooks along with a custom hook implementation",
    image: "/projects/Currency_converter_view.png",
    tags: ["React.Js", "TailwindCSS", "Javascript", "HTML5"],
    gitHubUrl: "https://github.com/Asawari2025/currencyConverter",
  },
  {
    id: 4,
    title: "ML Project",
    description:
      "Confusion matrix comparison of LOgistic regression, KNN and SVM using Anaconda , numpy, pandas , matplotlib.pyplot ,seaborn , sklearn.metrics , confusion_matrix",
    image: "/projects/ML_Project_view.png",
    tags: ["Machine Learning", "Anaconda", "Regression-algorithm"],
    gitHubUrl: "https://github.com/Asawari2025/ML-Project",
  },
  {
    id: 5,
    title: "Conservo - Highlight & Summarize Webpages",
    description:
      "A Chrome extension for highlighting and saving webpage text, revisiting and managing saved highlights, and generating concise AI summaries. Highlights are stored locally in extension storage for quick retrieval.",
    image: "/projects/conservo-highlight-saver.png",
    tags: [
      "Selection API",
      "Content scripts",
      "Tailwind",
      "OpenAI API",
      "Extension storage",
    ],
    gitHubUrl: "https://github.com/Asawari2025/LLM-AI-Project",
  },
];
//https://github.com/Asawari2025/Mega-Project
// //https://github.com/Asawari2025/ML-Project
//https://github.com/Asawari2025/Full-stack-basic-project
//https://github.com/Asawari2025/currencyConverter

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here are my recent projects, Each Project was carefully crafted with
          attention to detail, performance, and user experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover-"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground group-hover:text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foregorund text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project?.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Asawari2025?tab=repositories"
            target="_blank"
          >
            {" "}
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
