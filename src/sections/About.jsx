import { Github, Linkedin, Twitter, Mail, GraduationCap, Download } from "lucide-react";
import FallingParticles from "../components/FallingParticles";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const skills = [
  "JavaScript", "React.js", "Node.js", "Express.js",
  "MongoDB", "PostgreSQL", "REST APIs", "HTML", "CSS",
  "Tailwind CSS", "Git & GitHub", "Full-Stack Development",
  "MERN Stack", "Data Structures & Algorithms", "Problem Solving",
];

const socialLinks = [
  { icon: Linkedin,     href: "https://www.linkedin.com/in/varis-35b07a303/", label: "LinkedIn" },
  { icon: Mail,         href: "mailto:movaris85@gmail.com",                    label: "Email" },
  { icon: Github,       href: "https://github.com/varis131",                   label: "GitHub" },
  { icon: Twitter,      href: "#",                                              label: "Twitter" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/u/movaris85/",              label: "LeetCode" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">

      {/* Falling particles */}
      <FallingParticles count={35} />

      {/* ── Hero-inspired Background: midnight sky + golden flowers ── */}

      {/* Base: deep midnight blue — matches the night sky in the reference image */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to bottom, #081d33 0%, #040f1c 100%)" }} />

      {/* Top half: cool deep-blue sky gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(to bottom, rgba(13,38,68,0.9) 0%, rgba(8,26,46,0.55) 50%, transparent 100%)"
      }} />

      {/* Bottom-center: warm golden lantern/screen glow — like the glowing monitor */}
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

      {/* Stars: scattered tiny dots in the upper sky area */}
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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Label + Heading */}
        <div className="mb-10">
          <p className="text-xs font-space tracking-[0.3em] uppercase text-primary mb-3">
            About
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Character Sheet
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Image Card (empty placeholder) ──────────────── */}
          <div className="relative rounded-2xl overflow-hidden border bg-card aspect-[4/5] flex flex-col justify-end" style={{ borderColor: "rgba(255, 175, 55, 0.35)" }}>
            {/* Profile photo */}
            <img
              src="/profile-photo.jpeg"
              alt="Varis"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Subtle bottom gradient for nameplate readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Bottom nameplate */}
            <div className="relative z-10 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p
                className="text-2xl font-semibold text-white tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Varis
              </p>
              <p className="text-xs tracking-[0.25em] uppercase text-white/50 mt-0.5 font-space">
                Full Stack Dev
              </p>
            </div>
          </div>

          {/* ── Right: Info Panel ─────────────────────────────────── */}
          <div className="flex flex-col gap-7">

            {/* Bio */}
            <p className="text-muted-foreground text-base leading-relaxed">
              Hi, I'm{" "}
              <strong className="text-foreground font-semibold">Varis</strong>
              , a B.Tech Computer Science student at{" "}
              <strong className="text-foreground font-semibold">
                JSS Academy of Technical Education, Noida
              </strong>{" "}
              (2023–2027). I enjoy building full-stack web applications, solving
              real-world problems, and continuously learning new technologies.
              I'm passionate about{" "}
              <strong className="text-foreground font-semibold">
                backend development
              </strong>
              , scalable systems, and creating products that deliver a great user
              experience.
            </p>

            {/* Education Badge */}
            <div className="inline-flex">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-foreground/80">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span className="font-space text-xs">
                  JSS Academy of Technical Education, Noida — 2023–2027
                </span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-[0.65rem] font-space tracking-[0.3em] uppercase text-primary mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200 bg-card/40 cursor-default font-space"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[0.65rem] font-space tracking-[0.3em] uppercase text-primary mb-3">
                Connect
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-full border border-border/50 bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}

                {/* Resume Button */}
                <a
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-[1.03] text-sm font-medium font-space ml-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
