import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Bringing ideas to life with visual excellence",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized experiences that load instantly",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi! I’m, a passionate developer who loves building smart, efficient, and creative solutions. I work on automation, AI-based tools, full-stack web development, and real-world problem-solving projects. I enjoy turning ideas into functional applications—from WhatsApp automation to AI-powered systems, dashboards, and websites.
                I’m always learning, building, and improving..
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                With expertise spanning from front-end development to automation with n8n,
                I bring a holistic approach to every project. I believe in the power of clean
                code, thoughtful design, and continuous learning.
              </p>
              
            </div>

            {/* Highlights */}
            <div className="grid gap-6 mt-12">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 animate-slide-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="gradient-bg p-3 rounded-xl shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
