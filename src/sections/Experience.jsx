const experiences = [
  {
    period: "2023 — Present",
    role: "Full Stack Developer (Student)",
    company: "Personal & Academic Projects",
    description:
      "Building full stack web applications using the MERN stack. Designed and developed REST APIs, implemented authentication systems, and deployed applications with modern best practices.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
    current: true,
  },
  {
    period: "2024",
    role: "Data Structures & Algorithms",
    company: "Self-Driven Practice",
    description:
      "Solved 200+ DSA problems focusing on arrays, strings, stacks, queues, linked List and system design fundamentals. Strengthened problem-solving and optimization skills.",
    technologies: ["C++", "STL", "LeetCode", "OOP"],
    current: false,
  },
  {
    period: "2022 — Present",
    role: "Creative Video Editor",
    company: "Freelance",
    description:
      "Edited professional-quality videos using Adobe Premiere Pro, focusing on storytelling, transitions, and content optimization for social media platforms.",
    technologies: ["Premiere Pro", "After Effects", "Content Editing"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Deep Ambient Backgrounds */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:pl-28 xl:pl-32 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="animate-fade-in group inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/20 mb-4">
             <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <span className="text-primary-foreground text-xs font-medium tracking-wider uppercase">
               Career Journey
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight animate-fade-in animation-delay-100">
            Experience that
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Premium Left-Aligned Timeline */}
        <div className="relative mt-12 max-w-5xl">
          {/* Glowing Line */}
          <div className="absolute left-[27px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

          {/* Experience Items */}
          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Node + Year (Left) */}
                <div className="flex items-start gap-6 md:w-1/4 pt-6">
                  {/* Glowing Dot */}
                  <div className="relative w-[56px] h-[56px] shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 transition-colors duration-500" />
                    <div className="w-3 h-3 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_8px_rgba(59,130,246,1)] group-hover:scale-[1.3] transition-transform duration-500">
                      {exp.current && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      )}
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.period.split(' — ')[0]}
                    </span>
                    {exp.period.includes(' — ') && (
                      <span className="block text-xs text-muted-foreground mt-1">
                        — {exp.period.split(' — ')[1]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Card (Right) */}
                <div className="md:w-3/4 pl-[56px] md:pl-0">
                  <div className="glass-strong p-6 lg:p-8 rounded-2xl border-l-4 border-l-primary/50 hover:border-l-primary hover:bg-white/[0.03] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute -inset-x-0 -top-32 h-32 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <h3 className="text-xl lg:text-2xl font-bold mb-1.5 relative z-10">{exp.role}</h3>
                    <p className="text-base text-primary font-medium mb-4 relative z-10">{exp.company}</p>
                    <p className="text-muted-foreground text-base leading-relaxed relative z-10">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 bg-surface/50 border border-border/50 text-xs rounded-full text-foreground/80 group-hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
