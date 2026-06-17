import FallingParticles from "../components/FallingParticles";

const timelineItems = [
  {
    period: "2023 – 2027",
    role: "Bachelor of Technology (B.Tech)",
    company: "JSS Academy of Technical Education, Noida",
    cgpa: "8+ (Current)",
    description: "Computer Science & Engineering. Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming. Active in Full-Stack Development and AI-powered application development.",
    technologies: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "OOP"],
    current: true,
  },
  {
    period: "2023 – Present",
    role: "Key Achievements",
    company: "Academic Milestones & Projects",
    description: [
      "Maintained 8+ CGPA throughout the academic journey.",
      "Solved 300+ DSA problems across various coding platforms.",
      "Built and deployed multiple Full-Stack MERN applications.",
      "Developed IntelliView, an AI-powered interview preparation platform using MERN Stack and Gemini API.",
      "Created and deployed an Employee Management System with role-based authentication and admin controls.",
      "Maintained 20+ GitHub repositories covering Full-Stack Development, Backend Systems, and AI-powered applications.",
      "Continuously learning modern technologies including PostgreSQL, Prisma, LangChain, and AI integrations."
    ],
    technologies: ["MERN Stack", "Gemini API", "PostgreSQL", "Prisma", "LangChain"],
    current: false,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Falling particles */}
      <FallingParticles count={35} />

      {/* ── Background: midnight sky ── */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to bottom, #081d33 0%, #040f1c 100%)" }} />

      {/* Top half: cool deep-blue sky gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(to bottom, rgba(13,38,68,0.9) 0%, rgba(8,26,46,0.55) 50%, transparent 100%)"
      }} />

      {/* Bottom-center: warm golden lantern glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse, rgba(255,175,55,0.18) 0%, rgba(210,120,10,0.10) 40%, transparent 70%)",
        filter: "blur(60px)"
      }} />

      {/* Bottom-left: golden flower cluster glow */}
      <div className="absolute -bottom-10 -left-10 w-[480px] h-[380px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at bottom left, rgba(212,140,20,0.32) 0%, rgba(170,90,10,0.15) 45%, transparent 70%)",
        filter: "blur(70px)"
      }} />

      {/* Bottom-right: golden flower cluster glow */}
      <div className="absolute -bottom-10 -right-10 w-[480px] h-[380px] pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at bottom right, rgba(212,140,20,0.28) 0%, rgba(170,90,10,0.12) 45%, transparent 70%)",
        filter: "blur(70px)"
      }} />

      {/* Mid-left: faint cool star-blue wash */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none z-0" style={{
        background: "radial-gradient(circle, rgba(20,50,120,0.25) 0%, transparent 70%)",
        filter: "blur(80px)"
      }} />

      {/* Stars */}
      {[
        { top:"4%",  left:"12%" }, { top:"8%",  left:"35%" }, { top:"3%",  left:"58%" },
        { top:"11%", left:"78%" }, { top:"6%",  left:"91%" }, { top:"18%", left:"5%"  },
        { top:"22%", left:"25%" }, { top:"15%", left:"48%" }, { top:"20%", left:"68%" },
        { top:"9%",  left:"82%" }, { top:"28%", left:"92%" }, { top:"32%", left:"15%" },
        { top:"38%", left:"42%" }, { top:"14%", left:"62%" }, { top:"25%", left:"88%" },
      ].map((pos, i) => (
        <span key={i} className="absolute rounded-full pointer-events-none z-0"
          style={{
            top: pos.top, left: pos.left,
            width: i % 3 === 0 ? "2px" : "1.5px",
            height: i % 3 === 0 ? "2px" : "1.5px",
            background: `rgba(255,255,255,${i % 4 === 0 ? 0.5 : 0.25})`
          }}
        />
      ))}

      {/* Film grain overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.035] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px 180px"
      }} />

      <div className="container mx-auto px-6 lg:pl-28 xl:pl-32 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <div className="animate-fade-in group inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/20 mb-4">
             <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <span className="text-primary-foreground text-xs font-medium tracking-wider uppercase">
               Education & Achievements
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight animate-fade-in animation-delay-100">
            Education and
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Achievements.
            </span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl animate-fade-in animation-delay-200">
            A timeline of my academic milestones and key achievements.
          </p>
        </div>

        {/* Premium Left-Aligned Timeline */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Glowing Line */}
          <div className="absolute left-[27px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

          {/* Timeline Items */}
          <div className="space-y-10 lg:space-y-16">
            {timelineItems.map((item, idx) => (
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
                      {item.current && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      )}
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.period.split(/\s*[\u2013\u2014-]\s*/)[0]}
                    </span>
                    {item.period.match(/[\u2013\u2014-]/) && (
                      <span className="block text-xs text-muted-foreground mt-1">
                        — {item.period.split(/\s*[\u2013\u2014-]\s*/)[1]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Card (Right) */}
                <div className="md:w-3/4 pl-[56px] md:pl-0">
                  <div className="glass-strong p-6 lg:p-8 rounded-2xl border border-[rgba(255,175,55,0.35)] hover:border-[rgba(255,175,55,0.65)] hover:bg-white/[0.03] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute -inset-x-0 -top-32 h-32 bg-gradient-to-b from-[rgba(255,175,55,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <h3 className="text-xl lg:text-2xl font-bold mb-1.5 relative z-10">{item.role}</h3>
                    <p className="text-base text-primary font-medium mb-3 relative z-10">{item.company}</p>
                    
                    {/* CGPA Display */}
                    {item.cgpa && (
                      <div className="mb-4 relative z-10">
                        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-primary/15 text-primary border border-primary/20 font-space">
                          CGPA: {item.cgpa}
                        </span>
                      </div>
                    )}

                    {/* Description Paragraph or List */}
                    {Array.isArray(item.description) ? (
                      <ul className="list-disc pl-5 space-y-2.5 text-muted-foreground text-sm leading-relaxed relative z-10 font-sans">
                        {item.description.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="hover:text-foreground transition-colors duration-200">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-base leading-relaxed relative z-10">
                        {item.description}
                      </p>
                    )}
                    
                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                      {item.technologies.map((tech, techIdx) => (
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
