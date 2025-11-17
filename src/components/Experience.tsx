import { Briefcase, Code, Users } from "lucide-react";

const Experience = () => {
  const experienceItems = [
    {
      icon: Briefcase,
      position: "Full Stack Developer",
      company: "Airlight",
      period: "2024 - 2025",
      description: "Developing and maintaining full-stack web applications using React, Node.js, and MySQL. Collaborating with cross-functional teams to deliver high-quality solutions.",
    },
    {
      icon: Code,
      position: "Software Development Intern",
      company: "Fusiontech Solutions",
      period: "2023",
      description: "Designed and implemented responsive user interfaces using React and Tailwind CSS. Improved website performance and user experience through optimizations.",
    },
                                  
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experienceItems.map((item, index) => (
              <div
                key={item.position}
                className="glass-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="gradient-bg p-4 rounded-xl shrink-0">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.position}</h3>
                      <span className="text-sm text-accent font-medium mt-1 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
