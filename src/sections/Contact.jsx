import { Mail, Linkedin, Youtube, Instagram } from "lucide-react";

const ChestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 select-none mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z" fill="#8c6239" />
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1H3V9Z" fill="#a07248" />
    <rect x="10" y="9" width="4" height="3" rx="1" fill="#FFD700" />
  </svg>
);

const contactCards = [
  {
    icon: ChestIcon,
    label: "Resume",
    subtitle: "Full adventure log.",
    btnText: "LOOT",
    href: "/resume.pdf",
    badgeClass: "bg-[#fef9c3] text-[#854d0e] hover:bg-[#fef08a]",
    borderClass: "border-2 border-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.15)]",
  },
  {
    icon: () => <Linkedin className="w-9 h-9 text-[#0077b5]" />,
    label: "LinkedIn",
    subtitle: "Join the party.",
    btnText: "CONNECT",
    href: "https://www.linkedin.com/in/varis-35b07a303/",
    badgeClass: "bg-[#eff6ff] text-[#1d4ed8] hover:bg-[#dbeafe]",
    borderClass: "border border-gray-100",
  },
  {
    icon: () => <Mail className="w-9 h-9 text-[#f97316]" />,
    label: "Email",
    subtitle: "Send a raven.",
    btnText: "MESSAGE",
    href: "mailto:movaris85@gmail.com",
    badgeClass: "bg-[#fff7ed] text-[#c2410c] hover:bg-[#ffedd5]",
    borderClass: "border border-gray-100",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#eff2e8] items-center">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#1b3a24] tracking-tight mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's Connect
          </h2>
          <p className="text-[#6b7d6a] text-sm font-space">
            take what you need, adventurer.
          </p>
        </div>

        {/* Centered Cards Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-between p-6 bg-white rounded-2xl text-center min-h-[220px] w-full max-w-[280px] sm:w-[210px] transition-all duration-300 hover:scale-[1.04] hover:shadow-lg ${card.borderClass}`}
              >
                {/* Icon wrapper */}
                <div className="flex items-center justify-center h-12">
                  <Icon />
                </div>

                {/* Text wrapper */}
                <div className="my-4">
                  <h3 className="text-lg font-bold text-[#1b3a24] leading-tight font-space">
                    {card.label}
                  </h3>
                  <p className="text-[#7f8f7e] text-xs font-space mt-1 leading-relaxed max-w-[130px] mx-auto">
                    {card.subtitle}
                  </p>
                </div>

                {/* Badge/Pill CTA */}
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold font-space uppercase flex items-center gap-1 transition-colors duration-200 ${card.badgeClass}`}>
                  {card.btnText} <span className="text-xs">→</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
