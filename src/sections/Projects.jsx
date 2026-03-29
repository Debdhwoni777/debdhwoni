import { ArrowUpDown, ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Pattern Gallery",
    description:
      "A visually appealing pattern printing gallery built with C programming concepts. Includes star, number, alphabet, and advanced patterns displayed in a modern grid UI for easy learning and reference.",
    image: "/projects/pro1.png",
    tags: ["C", "Patterns", "UI Design", "Programming"],
    github: "#https://github.com/Debdhwoni777/Patten_Printing_In_C",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application with product management, shopping cart, order tracking, and secure authentication. Includes a dedicated admin panel for managing products and orders, along with a responsive user interface.",
    image: "/projects/pro2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Calculator Web App",
    description:
      "A responsive calculator web application built using HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean UI and smooth user interactions, designed for fast and accurate calculations.",
    image: "/projects/pro3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Debdhwoni777/WebDevelopment_projectr_By_Debdhwoni/tree/main/Calculator_WebSite",
  },
  {
    title: "Password Generator Web App",
    description:
      "A feature-rich password generator built with HTML, CSS, and JavaScript, offering customizable password length, character selection, copy-to-clipboard functionality, and a responsive user interface for enhanced user experience.",
    image: "/projects/pro4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Debdhwoni777/WebDevelopment_projectr_By_Debdhwoni/tree/main/PasswordGenerator_WebSite",
  },
  {
    title: "QR Code Generator",
    description:
      "A QR code generator web application built using HTML, CSS, and JavaScript that allows users to instantly create QR codes for text, links, and other data. Features a clean UI and real-time generation.",
    image: "/projects/pro5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Debdhwoni777/WebDevelopment_projectr_By_Debdhwoni/blob/main/QRCodeGenerator_webSite/index.html",
  },
  {
    title: "Analog Clock Web App",
    description:
      "A real-time analog clock built using HTML, CSS, and JavaScript that displays the current time with smooth rotating hour, minute, and second hands. Features a clean UI and accurate time synchronization.",
    image: "/projects/pro6.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden " id="projects">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in animate-duration-300">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animate-duration-300 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make a impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${idx * 100 + 300}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform transform duration-900 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-4 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all "
                  >
                    <Github className="w-5 h-5 " />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Github
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
