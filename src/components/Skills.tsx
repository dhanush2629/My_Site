import { Code, Database, Palette, Workflow, Globe, Cpu, Atom, GitBranch, Server } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      name: "HTML",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Code,
      name: "CSS",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Code,
      name: "JavaScript",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Database,
      name: "MySQL",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Cpu,
      name: "Python",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Palette,
      name: "Web Design",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Atom,
      name: "React",
      color: "from-sky-400 to-sky-500",
    },
    {
      icon: GitBranch,
      name: "Git & GitHub",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Server,
      name: "Node.js",
      color: "from-green-600 to-green-700",
    },
     
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group glass-card p-6 rounded-2xl text-center hover:scale-110 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
