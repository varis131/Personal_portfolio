import { Button } from "@/components/Button";
import {
  ChevronDown,
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Html",
  "Css",
  "JavaScript",
  "TailwindCss",
  "React",
  "Express",
  "Node.js",
  "Mongodb",
  "github actions",
  "Postman",
];

export const Hero = () => {
  return (
    <section className=" relative min-h-screen flex items-center overflow-hidden ">
      {/* bg */}
      {/* <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero_bg_image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className=" absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div> */}

      {/* Premium Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 4 + 2; // 2px - 6px
          const duration = 20 + Math.random() * 20;

          return (
            <div
              key={i}
              className="absolute rounded-full blur-[1px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(6,182,212,0.4) 60%, transparent 100%)",
                animation: `floatParticle ${duration}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.7,
              }}
            />
          );
        })}
      </div>

      {/*content section of hero page  */}
      <div className=" container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className=" grid lg:grid-cols-2 gap-12 items-center">
          {/* left col - for text content*/}
          <div className="space-y-8">
            <div className=" animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>

            {/* headline */}
            <div className=" space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Writing <span className="text-primary glow-text">scalable</span>
                <br />
                code with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm VARIS — a Full Stack Developer focused on React,
                Node.js, and JavaScript. I create scalable, high-performance web
                applications built for real users.
              </p>
            </div>

            {/* call to action section  */}
            <div className=" flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className=" w-5 h-5" />
                </Button>
              </a>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className=" flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className=" text-sm text-muted-foreground">Follow:</span>
              {[
                { icon: Github, href: "https://github.com/varis131" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className=" w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right col - for profile image*/}
          <div className=" relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className=" relative max-w-md mx-auto">
              <div className=" absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className=" relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="VARIS"
                  className=" w-110 h-110 aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">0+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className=" mt-20 animate-fade-in animation-delay-600">
          <p className=" text-sm text-muted-foreground mb-6 text-center">
            Technologies i work with
          </p>
          <div className=" relative overflow-hidden">
            <div className=" flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className=" flex-shrink-0 px-8 py-4">
                  <span
                    className=" text-xl font-semibold text-muted-foreground/50
                   hover:text-muted-foreground transition-colors"
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll down icon */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
