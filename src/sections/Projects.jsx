import { ExternalLink, Github } from "lucide-react";
import FallingParticles from "../components/FallingParticles";


const projects = [
  {
    title: "Empify",
    description:
      "Built a full-stack employee management system that streamlines workforce operations through dedicated admin and employee dashboards. Enables attendance tracking, leave management, profile management, and payslip generation with secure JWT-based authentication.",
    image: "/projects/ems.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    link: "https://emsdev-two.vercel.app/login",
    github: "https://github.com/varis131/Empify-Employee-Management-System",
  },
  {
    title: "Intelliview",
    description:
      "AI-powered interview preparation platform that generates personalized interview strategies based on job descriptions and user profiles. Provides technical and behavioral questions, skill gap analysis, match score evaluation, and a day-by-day preparation roadmap.",
    image: "/projects/intelliview-mockup.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
    link: "https://gen-ai-project-full-stack.vercel.app",
    github: "https://github.com/varis131/genAi_project-full-stack-",
  },
  {
    title: "Ecomzy",
    description:
      "Responsive shopping cart platform built with React and Tailwind CSS with efficient state management. Features dynamic cart functionality, reusable components, and optimized rendering focused on performance and scalability.",
    image: "/projects/ecomzy-mockup.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "State Management"],
    link: "https://ecomzyshop.vercel.app/",
    github: "https://github.com/varis131/Shopping_cart",
  },
];

const CornerBrackets = () => (
  <>
    <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[rgba(255,175,55,0.35)] rounded-tl-sm pointer-events-none" />
    <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[rgba(255,175,55,0.35)] rounded-tr-sm pointer-events-none" />
    <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[rgba(255,175,55,0.35)] rounded-bl-sm pointer-events-none" />
    <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[rgba(255,175,55,0.35)] rounded-br-sm pointer-events-none" />
  </>
);

const Separator = ({ double = false }) => (
  <div className="flex items-center justify-center gap-1 my-2">
    <div className="w-5 h-[3px] rounded-full bg-primary/50" />
    {double && <div className="w-5 h-[3px] rounded-full bg-primary/50" />}
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">

      {/* Falling particles */}
      <FallingParticles count={35} />

      {/* ── Hero-inspired Background: midnight sky + golden flowers ── */}

      {/* Base: deep midnight blue — matches the night sky in the reference image */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to bottom, #081d33 0%, #040f1c 100%)" }} />

      {/* Top: cool deep-blue sky gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(to bottom, rgba(13,38,68,0.9) 0%, rgba(8,26,46,0.55) 50%, transparent 100%)"
      }} />

      {/* Moon Image in rightmost corner */}
      <div className="absolute top-8 right-0 w-[220px] md:w-[320px] h-[220px] md:h-[320px] pointer-events-none z-0 opacity-60 mix-blend-screen select-none">
        <img 
          src="https://images.pexels.com/photos/28284726/pexels-photo-28284726.jpeg" 
          alt="Moon"
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      {/* Bottom-center: warm golden lantern glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse, rgba(255,175,55,0.18) 0%, rgba(210,120,10,0.10) 40%, transparent 70%)",
        filter: "blur(60px)"
      }} />

      {/* Bottom-left: golden flower glow */}
      <div className="absolute -bottom-10 -left-10 w-[450px] h-[360px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at bottom left, rgba(212,140,20,0.32) 0%, rgba(170,90,10,0.15) 45%, transparent 70%)",
        filter: "blur(70px)"
      }} />

      {/* Bottom-right: golden flower glow */}
      <div className="absolute -bottom-10 -right-10 w-[450px] h-[360px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at bottom right, rgba(212,140,20,0.28) 0%, rgba(170,90,10,0.12) 45%, transparent 70%)",
        filter: "blur(70px)"
      }} />

      {/* Top-right: faint cool star-blue wash */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] pointer-events-none z-0" style={{
        background: "radial-gradient(circle, rgba(20,50,120,0.25) 0%, transparent 70%)",
        filter: "blur(80px)"
      }} />

      {/* Stars */}
      {[
        { top:"5%",  left:"9%"  }, { top:"9%",  left:"30%"  }, { top:"4%",  left:"55%"  },
        { top:"13%", left:"74%"  }, { top:"7%",  left:"88%"  }, { top:"19%", left:"4%"   },
        { top:"23%", left:"22%"  }, { top:"16%", left:"50%" }, { top:"21%", left:"70%"  },
        { top:"10%", left:"83%"  }, { top:"30%", left:"94%"  }, { top:"35%", left:"14%"  },
        { top:"42%", left:"38%"  }, { top:"26%", left:"62%"  }, { top:"48%", left:"90%"  },
      ].map((pos, i) => (
        <span key={i} className="absolute rounded-full pointer-events-none z-0"
          style={{
            top: pos.top, left: pos.left,
            width: i % 3 === 0 ? "2px" : "1.5px",
            height: i % 3 === 0 ? "2px" : "1.5px",
            background: `rgba(255,255,255,${i % 4 === 0 ? 0.5 : 0.22})`
          }}
        />
      ))}

      {/* Film grain */}
      <div className="absolute inset-0 z-[1] opacity-[0.035] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px 180px"
      }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs font-space tracking-[0.3em] uppercase text-primary mb-3">
            Quest Log
          </p>
          <h2
            className="text-6xl md:text-7xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-1px" }}
          >
            Projects
          </h2>
          <p className="text-muted-foreground text-sm tracking-wide">
            legendary encounters conquered, each worth remembering.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-3 ">
          {projects.map((project, idx) => (
            <div key={idx}>
              {idx === 0 && <Separator />}

              {/* Card — whole card zooms on hover */}
              <div className="relative rounded-xl border border-[rgba(255,175,55,0.35)] bg-white/[0.025] p-7 sm:p-9
                             hover:scale-[1.018] hover:border-[rgba(255,175,55,0.65)] hover:bg-white/[0.04]
                             transition-all duration-300 ease-out cursor-default">
                <CornerBrackets />

                {/* Top row: image + title/description */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">

                  {/* Thumbnail */}
                  <div className="shrink-0 w-full sm:w-56 h-36 rounded-lg overflow-hidden border border-white/10 bg-card/60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-4 flex-1 min-w-0 pt-1">
                    <h3
                      className="text-[1.85rem] font-bold italic text-white leading-tight"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#a0aab4] text-white leading-[1.85] font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags row — full width, below both columns */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 text-[12px] font-space rounded-md
                                 border border-white/14 bg-transparent text-white/55
                                 hover:text-white/85 hover:border-white/28 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links row */}
                <div className="flex items-center gap-4 mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                               border border-white/20 bg-white/5 text-white/80
                               hover:text-white hover:border-white/35 hover:bg-white/10
                               transition-all duration-200 text-sm font-space"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Link
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/35
                               hover:text-white/65 transition-colors duration-200 text-sm font-space"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                </div>
              </div>

              <Separator double={idx < projects.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

