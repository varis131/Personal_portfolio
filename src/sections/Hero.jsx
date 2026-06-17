import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const socialLinks = [
  { icon: Github,      href: "https://github.com/varis131",                   label: "GitHub" },
  { icon: Linkedin,    href: "https://www.linkedin.com/in/varis-35b07a303/",  label: "LinkedIn" },
  { icon: Twitter,     href: "#",                                              label: "Twitter" },
  { icon: Mail,        href: "mailto:movaris85@gmail.com",                     label: "Email" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/u/movaris85/",             label: "LeetCode" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Fullscreen Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Scrim */}
      <div className="absolute inset-0 z-[1] bg-black/35" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 select-none">

        {/* Name */}
        <h1
          className="animate-fade-rise text-[clamp(5rem,18vw,14rem)] font-normal leading-none tracking-tight text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Varis
        </h1>

        {/* Role */}
        <p className="animate-fade-rise-delay text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-white/55 font-light">
          Full Stack Developer
        </p>

        {/* Social Links */}
        <div className="animate-fade-rise-delay-2 flex items-center gap-3 mt-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="liquid-glass p-3 rounded-full text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};
