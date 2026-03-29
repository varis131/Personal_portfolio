import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import {
  ChevronDown,
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Code,
  Layout,
  Braces,
  Palette,
  Atom,
  Server,
  Terminal,
  Database,
  GitBranch,
  Send,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const skills = [
  { name: "HTML5", icon: Code, color: "text-orange-500" },
  { name: "CSS3", icon: Layout, color: "text-blue-500" },
  { name: "JavaScript", icon: Braces, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
  { name: "React", icon: Atom, color: "text-cyan-500" },
  { name: "Express", icon: Server, color: "text-gray-400" },
  { name: "Node.js", icon: Terminal, color: "text-green-500" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "GitHub Actions", icon: GitBranch, color: "text-blue-400" },
  { name: "Postman", icon: Send, color: "text-orange-400" },
];

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Custom cursor & parallax tracking
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 500);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 500);

  const springConfig = { damping: 30, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background parallax layers
  const bgX1 = useTransform(smoothMouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [50, -50]);
  const bgY1 = useTransform(smoothMouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [50, -50]);
  const bgX2 = useTransform(smoothMouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-40, 40]);
  const bgY2 = useTransform(smoothMouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [-40, 40]);

  // Logo 3D Tilt
  const rotateX = useTransform(smoothMouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Variants for staggered typing
  const subHeadingText = "Full Stack Developer";
  const subHeadingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };

  const varisText = "VARIS";
  const varisVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.6 },
    },
  };
  const varisLetterVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 30, rotateX: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Custom Cursor Glow */}
      <div 
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full mix-blend-screen z-50 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)",
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
        }}
      />

      {/* Premium Animated Background Meshes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: bgX1, y: bgY1 }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-40 mix-blend-screen"
          animate={{
            background: [
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(147,51,234,0.6) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ x: bgX2, y: bgY2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-30 mix-blend-screen"
          animate={{
            background: [
              "radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Subtle Perspective Grid */}
        <div 
           className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
             backgroundSize: "40px 40px",
             transform: "perspective(1000px) rotateX(60deg) translateY(100px) scale(3)",
             transformOrigin: "bottom center"
           }}
        />
      </div>

      {/* Fixed Vertical Social Links (Premium Left Flank) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50"
      >
        <div className="w-[1px] h-16 bg-border mx-auto mb-2" />
        {[
          { icon: Github, href: "https://github.com/varis131" },
          { icon: Linkedin, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Instagram, href: "#" },
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, x: 6, transition: { type: "spring", stiffness: 400, damping: 10 } }}
            className="p-3 rounded-full glass hover:bg-primary/20 hover:text-primary transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            {<social.icon className="w-5 h-5" />}
          </motion.a>
        ))}
        <div className="w-[1px] h-32 bg-gradient-to-b from-border to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-32 pt-32 pb-10 relative z-10 w-full min-h-[85vh] flex flex-col justify-center">
        
        {/* Top Split Flex */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 mt-8">
          
          {/* Left Layout - Overlapping Typography */}
          <div className="lg:w-[55%] space-y-10 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <motion.span 
                  variants={subHeadingVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-medium tracking-wide"
                >
                  {subHeadingText.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6 relative">
              {/* Subtle background glow behind text to separate from VARIS logo if they overlap */}
              <div className="absolute -inset-10 bg-background/50 blur-3xl -z-10 rounded-full hidden lg:block" />
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight"
              >
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 glow-text drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">digital</span>
                <br />
                experiences
                <br />
                with <span className="font-serif italic font-normal text-white">precision.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed pt-2"
              >
                Hi, I'm a Full Stack Developer focused on React,
                Node.js, and modern JavaScript architectures. I turn bold ideas into scalable, high-performance web
                applications.
              </motion.p>
            </div>
            
            {/* Mobile-only social links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex xl:hidden items-center gap-4 pt-2"
            >
              {[
                { icon: Github, href: "https://github.com/varis131" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-3 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Layout - VARIS Custom Brand Logo */}
          <div className="lg:w-[45%] relative z-10 lg:-ml-12 flex justify-center lg:justify-end xl:pr-10 perspective-[1000px]">
            {/* Glass Background Panel behind Logo */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               style={{ rotateX, rotateY }}
               className="relative w-full max-w-[360px] lg:max-w-md xl:max-w-lg aspect-square glass-strong rounded-3xl flex items-center justify-center glow-border overflow-hidden"
            >
               {/* Internal glowing accent */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />

               <motion.div
                 variants={varisVariants}
                 initial="hidden"
                 animate="visible"
                 className="flex space-x-[2px] sm:space-x-1 relative z-10 perspective-[500px]"
                 style={{ perspective: 1000 }}
               >
                 {varisText.split("").map((char, index) => (
                   <motion.span
                     key={index}
                     variants={varisLetterVariants}
                     className="font-space text-7xl sm:text-8xl md:text-9xl xl:text-[8rem] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e0e0e0] to-[#888888] filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
                     style={{
                       WebkitTextStroke: "1px rgba(255,255,255,0.05)",
                     }}
                   >
                     {char}
                   </motion.span>
                 ))}
                 
                 {/* Animated Highlight Sweep underneath */}
                 <motion.div 
                   initial={{ scaleX: 0, opacity: 0 }}
                   animate={{ scaleX: 1, opacity: 1 }}
                   transition={{ duration: 1.5, delay: 1.8, ease: "circOut" }}
                   className="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] origin-left"
                 />
                 <motion.div 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 1.5, delay: 1.8, ease: "circOut" }}
                   className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
                 />
               </motion.div>

               {/* Decorative Tech floating elements */}
               <motion.div
                 animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-10 glass px-4 py-2 rounded-xl text-xs font-mono text-primary border-primary/30"
               >
                 {"<MERN Stack Developer />"}
               </motion.div>
               <motion.div
                 animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-16 left-8 glass px-4 py-2 rounded-xl text-xs font-mono text-cyan-400 border-cyan-400/30 flex items-center gap-2"
               >
                 <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Available This Summer
               </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Action Area */}
        <div className="mt-16 lg:mt-24 w-full relative z-30 flex flex-col items-center">
          
          <div className="w-full flex flex-col lg:flex-row items-center justify-between border-t border-border/40 pt-8 pb-8 gap-8">
             {/* Left: CTAs */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-6 items-center lg:w-[350px]"
              >
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <Button size="lg" className="relative shadow-xl text-base px-8">
                    View Projects <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.a>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                  </AnimatedBorderButton>
                </motion.div>
             </motion.div>
             
             {/* Center: Scroll Indicator (Centered above Marquee) */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 2 }}
               className="flex items-center justify-center shrink-0"
             >
               <a
                 href="#about"
                 className="flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors group"
               >
                 <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100">Scroll down</span>
                 <div className="p-2 rounded-full glass group-hover:bg-primary/20 transition-colors">
                    <ChevronDown className="w-4 h-4 animate-bounce text-primary" />
                 </div>
               </a>
             </motion.div>

             {/* Right Spacer to ensure precise horizontal centering for Scroll Indicator */}
             <div className="hidden lg:block lg:w-[350px]" />
          </div>

           {/* Full-Width Marquee Underneath */}
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-full relative flex items-center h-16 mt-4"
            >
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex animate-marquee whitespace-nowrap items-center w-full">
                {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="flex-shrink-0 px-8 flex items-center">
                    <span className="flex items-center gap-3 text-lg font-space font-medium text-muted-foreground/60 hover:text-white transition-colors duration-300 group cursor-default">
                      <skill.icon className={`w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity ${skill.color}`} />
                      {skill.name}
                    </span>
                    <span className="mx-8 text-primary/30 text-[10px]">•</span>
                  </div>
                ))}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
