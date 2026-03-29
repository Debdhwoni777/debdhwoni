import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


const testimonials = [
  {
    quote:
      "Debdhwoni is very passionate about coding. He is always curious and keeps learning new technologies on his own.",
    author: "School Friend",
    role: "Classmate",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SF",
  },
  {
    quote:
      "He has built some really cool projects with Arduino and web development at such a young age. Very impressive.",
    author: "Teacher",
    role: "School Mentor",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TM",
  },
  {
    quote:
      "Debdhwoni explains coding concepts in a simple and easy way on his YouTube channel. Great teaching skills.",
    author: "YouTube Viewer",
    role: "Subscriber",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=YT",
  },
  {
    quote:
      "He is consistent, creative, and always trying to build something new. Definitely a future developer to watch.",
    author: "Online Friend",
    role: "Fellow Learner",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=OF",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      
      <div
        className="absolute top-1/2 left-1/2
        w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-secondary-foreground text-xs font-medium tracking-wider uppercase">
            What People Say
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-4 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            
            <div className="glass p-8 rounded-3xl md:p-12 glow-border">
              
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                />

                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              
              <button
                onClick={previous}
                className="p-2 rounded-full glass hover:bg-primary/10 transition"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIdx
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full glass hover:bg-primary/10 transition"
              >
                <ChevronRight />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};