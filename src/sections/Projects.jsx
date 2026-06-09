import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Empify | Employee Management System",
    subtitle: "Full-Stack Workforce Management Platform",
    description:
      "Built a full-stack employee management system that streamlines workforce operations through dedicated admin and employee dashboards. The platform enables attendance tracking, leave management, employee administration, profile management, and payslip generation with secure JWT-based authentication. Designed a responsive user interface and implemented scalable backend APIs using React, Node.js, Express, and MongoDB.",
    image: "/projects/ems.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Mongoose",
    ],
    link: "https://emsdev-two.vercel.app/login",
    github: "https://github.com/varis131/Empify-Employee-Management-System",
  },
  {
    title: "Intelliview | AI Interview Preparation Platform",
    subtitle: "AI-Powered Career Tool",
    description:
      "Built a full-stack AI-powered interview preparation platform that generates personalized interview strategies based on job descriptions and user profiles. The app provides technical and behavioral questions, skill gap analysis, match score evaluation, and a day-by-day preparation roadmap. Implemented responsive UI with modern SaaS design, optimized API handling, and seamless user experience using React, Node.js, and MongoDB.",
    image: "/projects/intelliview-mockup.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "AI Integration",
    ],
    link: "https://gen-ai-project-full-stack.vercel.app",
    github: "https://github.com/varis131/genAi_project-full-stack-",
  },
  {
    title: "ECOMZY",
    subtitle: "Shopping Cart App",
    description:
      "Developed a responsive shopping cart platform using React and Tailwind CSS with efficient state management. Implemented dynamic cart functionality, reusable components, optimized rendering, and clean UI architecture focused on performance and scalability.",
    image: "/projects/ecomzy-mockup.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "State Management"],
    link: "https://ecomzyshop.vercel.app/",
    github: "https://github.com/varis131/Shopping_cart",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[#0A0A0B]"
    >
      {/* Deep ambient background spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 tracking-wide mb-6">
            Featured Works
          </h2>
          <div className="w-56 h-px bg-cyan-700/50" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative max-w-6xl mx-auto mt-10">
          {/* Main vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-[-40px] bottom-[-40px] w-px bg-cyan-700/50 -translate-x-1/2 z-0" />

          {/* Projects Component Mapping */}
          {projects.map((project, idx) => {
            const isLeftImage = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative w-full flex flex-col lg:flex-row items-center mb-24 lg:mb-32 z-10 gap-16 lg:gap-0 group`}
              >
                {/* Connection Horizontal Line */}
                <div
                  className="hidden lg:block absolute top-1/2 h-px bg-cyan-700/50 -translate-y-1/2 z-0 transition-all duration-700 group-hover:bg-cyan-400"
                  style={{
                    width: "calc(50% - 2rem)",
                    [isLeftImage ? "left" : "right"]: "2rem",
                  }}
                />

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-[3px] border-cyan-400 bg-[#0A0A0B] -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_12px_rgba(34,211,238,0.7)] group-hover:bg-cyan-400 transition-colors duration-300" />

                {/* Image Panel */}
                <div
                  className={`w-full lg:w-1/2 flex justify-center order-2 ${isLeftImage ? "lg:order-1 lg:pr-14" : "lg:order-2 lg:pl-14"}`}
                >
                  <div className="relative w-full max-w-lg mx-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                    {/* Link Button floating perfectly above laptop */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-30">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2 transition-colors`}
                      >
                        Live View <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Laptop Screen */}
                    <div className="relative w-full aspect-[16/10.5] bg-zinc-950 rounded-t-xl lg:rounded-t-2xl border-[3px] md:border-[6px] border-[#222] flex flex-col overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)] relative z-10">
                      {/* Notch / Camera dot */}
                      <div className="absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111] rounded-full z-20"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[#0A0A0B]/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    </div>

                    {/* Laptop Base */}
                    <div className="relative w-[112%] -left-[6%] h-3 md:h-4 bg-gradient-to-b from-[#444] to-[#111] rounded-b-xl lg:rounded-b-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex justify-center items-start border-t border-[#666] z-0">
                      <div className="w-16 md:w-24 h-1 lg:h-1.5 bg-[#222] rounded-b-md"></div>
                    </div>
                  </div>
                </div>

                {/* Text Panel */}
                <div
                  className={`w-full lg:w-1/2 order-1 ${isLeftImage ? "lg:order-2 lg:pl-14" : "lg:order-1 lg:pr-14"}`}
                >
                  <div className="flex flex-col space-y-2 text-left">
                    <h3
                      className={`text-4xl md:text-[40px] font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-500 tracking-tight leading-none`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-lg md:text-xl font-medium text-cyan-500/80 mb-4`}
                    >
                      ({project.subtitle})
                    </p>

                    <p className="text-zinc-300 text-[15px] md:text-base leading-relaxed mt-4 mb-6 relative">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3.5 py-1 text-[11px] md:text-xs font-medium rounded-full border border-zinc-600 text-zinc-300 hover:text-cyan-100 hover:border-cyan-400/50 transition-colors bg-transparent"
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
                      >
                        <Github className="w-5 h-5" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
