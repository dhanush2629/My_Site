import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Technology-Artificial Intelligence",
      institution: "Karpagam Institute Of Technology",
      period: "2021 - 2024",
      description: "Focused on web technologies, software engineering, Automation and database systems",
    },
    {
      icon: Award,
      degree: "Full Stack WebDevelopment ",
      institution: "NxtWave Academy",
      period: "2023-24",
      description: "Intensive program covering modern web frameworks and best practices",
    },
    {
      icon: BookOpen,
      degree: "UI/UX Designing",
      institution: "Youtube",
      description: "Comprehensive training in user-centered design and prototyping",
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <div
                key={item.degree}
                className="glass-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="gradient-bg p-4 rounded-xl shrink-0">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <span className="text-sm text-accent font-medium mt-1 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {item.institution}
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

export default Education;
