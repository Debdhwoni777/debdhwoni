import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Debdhwoni777", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/debdhwonimondal7/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dhwoni77@gmail.com", label: "Email" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + Info */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              DDM<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              Aspiring Software Engineer • React Developer
            </p>

            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} Debdhwoni Mondal
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + Email */}
          <div className="flex flex-col items-center gap-3">

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500" /> by Dhwoni
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};