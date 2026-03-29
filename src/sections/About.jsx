import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:pl-28 xl:pl-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Text) */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            <div className="animate-fade-in group inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary-foreground text-xs font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight animate-fade-in animation-delay-100">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">scalable</span> products,
              <br />
              <span className="font-serif italic font-normal text-muted-foreground/80">
                from backend to frontend.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed animate-fade-in animation-delay-200">
              <p>
                I'm a Full Stack Developer who loves building complete, scalable
                web applications — from designing robust backend architectures
                to crafting seamless frontend experiences.
              </p>
              <p>
                I work with the MERN stack along with Next.js and
                TypeScript to build everything from high-performance APIs to dynamic
                interfaces.
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-6 border-l-4 border-l-primary relative overflow-hidden animate-fade-in animation-delay-300 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-[30px] group-hover:bg-primary/20 transition-colors duration-500" />
              <p className="text-lg font-medium italic text-foreground relative z-10">
                "My mission is to build secure, and high-performance
                applications that solve real problems — delivering value
                to users and businesses."
              </p>
            </div>
          </div>

          {/* Right Column - Premium Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
            {/* Box 1 (Spans 2 columns) */}
            <div className="col-span-2 glass p-6 rounded-2xl animate-fade-in hover:bg-primary/5 transition-colors group relative overflow-hidden" style={{ animationDelay: `400ms` }}>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code Architecture</h3>
              <p className="text-muted-foreground text-base max-w-lg">
                Writing maintainable, robust, and scalable code that stands the test of time, utilizing modern design patterns.
              </p>
            </div>

            {/* Box 2 */}
            <div className="col-span-2 sm:col-span-1 glass p-6 rounded-2xl animate-fade-in hover:bg-purple-500/5 transition-colors group" style={{ animationDelay: `500ms` }}>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Rocket className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">High Performance</h3>
              <p className="text-muted-foreground text-sm">
                Optimizing for speed and delivering lightning-fast, highly responsive user experiences.
              </p>
            </div>

            {/* Box 3 */}
            <div className="col-span-2 sm:col-span-1 glass p-6 rounded-2xl animate-fade-in hover:bg-cyan-500/5 transition-colors group" style={{ animationDelay: `600ms` }}>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                Working closely with cross-functional agile teams to rapidly bring complex ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
