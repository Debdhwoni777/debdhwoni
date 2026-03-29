import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/Button.jsx";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "AWS",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
  "Python",
  "C++",
  "C",
  "Arduino",
  "ESP32",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="HERO IMAGE"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="space-y-6">

            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Building Web Apps with React • Student Developer
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-base text-muted-foreground max-w-md animate-fade-in animation-delay-200">
                Hi, I'm Debdhwoni — I design and build scalable systems using
                Python, C++, and modern web technologies, focusing on
                performance, efficiency, and seamless user experiences.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-2 animate-fade-in animation-delay-300">
              <Button
                size="sm"
                className="h-9 px-4 text-sm flex items-center gap-2"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Social + Email */}
            <div className="flex items-center gap-3 animate-fade-in animation-delay-400">
              <span className="text-xs text-muted-foreground">Connect:</span>

              {[
                { icon: Github, href: "https://github.com/Debdhwoni777" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/debdhwonimondal7/",
                },
                {
                  icon: Mail,
                  href: "mailto:dhwoni77@gmail.com?subject=Hello Dhwoni&body=I saw your portfolio",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>


          </div>

          {/* Right */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-xs md:max-w-sm mx-auto">

              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-lg animate-pulse" />

              <div className="relative glass rounded-2xl p-1 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Debdhwoni Mondal"
                  className="w-full aspect-4/5 object-cover rounded-xl"
                />

                {/* Available Badge */}
                <div className="absolute -bottom-3 -right-3 glass rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs">Available</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="absolute -top-3 -left-3 glass rounded-lg px-3 py-2 animate-float animation-delay-400">
                  <div className="text-sm font-bold text-primary">3+</div>
                  <div className="text-[10px] text-muted-foreground">Years</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-1 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};