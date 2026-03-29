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
    <section className="py-32 relative overflow-hidden " id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="animate-fade-in animation-delay-200">
              <span className="text-secondary-foreground text-sm font-medium tracking—wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading—tight animate-fade-in animation-detay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white ">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-2 text-muted-foreground animate-fade-in animation-delay-300">
              <p>
                I'm Debdhwoni Mondal, a passionate software developer with a
                strong interest in building digital products that make a
                difference. My journey started with curiosity about how websites
                and apps work, and it has grown into a deep love for coding and
                technology.
              </p>

              <p>
                I work with Python, C, and modern web development technologies
                like React and JavaScript. I also have experience with hardware
                and embedded systems, including Arduino and ESP-based projects.
                I enjoy creating everything from simple projects to more
                advanced applications, always focusing on clean code,
                performance, and user experience.
              </p>

              <p>
                Apart from coding, my hobbies include building electronic
                projects, exploring new technologies, and creating content about
                programming. I love learning new things and constantly improving
                my skills as a developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-secondary-foreground">
                "My mission is to build digital experiences that are simple,
                fast, and enjoyable — products users love and developers can
                easily maintain and scale."
              </p>
            </div>
          </div>
            {/* Right Column -- Highlights*/}
            <div className="grid sm:grid-cols-2 gap-6 ">
                {highlights.map((item, idx) => (
                    <div key={idx} className="glass p-5 rounded-2xl animate-fade-in animation-delay-300" style={{
                        animationDelay: `${idx * 100 + 300}ms`
                    }}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
