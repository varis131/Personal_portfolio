import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "movaris85@gmail.com",
    href: "mailto:movaris85@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9161046717",
    href: "tel:+919161046717",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, UP",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Contact Me</h2>
          <p className="text-muted-foreground">
            Feel free to reach out to me anytime.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-xl mx-auto">
          <div className="glass rounded-3xl p-8 space-y-6">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
