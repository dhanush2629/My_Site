import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const navigate = useNavigate();

  const categories = ["All", "Design", "Web Development", "Python", "Automation with n8n"];

  const projects = [
    {
      id: 1,
      title: "Ai_Assitant",
      category: "Python",
      description: "AI assistant typically requires direct user commands for each task.",
      image: "src/pages/ai_img.JPG",
      tags: ["Python","NLP"],
    },
    {
      id: 2,
      title: "FOODIE",
      category: "Web Development",
      description: "A full-featured online shopping platform with cart and payment integration",
      image: "src/pages/food.PNG",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "FOOD_ORDER",
      category: "Design",
      description: "Complete visual identity design for a tech startup",
      image: "src/pages/thamane.PNG",
      tags: [ "UI/UX", "Figma"],
    },
    {
      id: 4,
      title: "FACE DETECTION",
      category: "Python",
      description: "Face detection in PNG images using Python.",
      image: "src/pages/face.PNG",
      tags: [ "OpenCV", "Python"],
    },
    {
      id: 5,
      title: "Food Order App",
      category: "Design",
      description: "Complete visual identity design for a tech startup",
      image: "src/pages/f.PNG",
      tags: [ "UI/UX", "Figma"],
    },
    {
      id: 6,
      title: "Data Analysis Dashboard",
      category: "Python",
      description: "Interactive dashboard for visualizing and analyzing business metrics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Python", "Pandas", "Numpy","Streamli"],
    },
    {
      id: 7,
      title: "TELEGRAM AUTOMATION",
      category: "Automation with n8n",
      description: "Automated workflows connecting multiple apps and services",
      image: "src/pages/Telegram_Bot_.PNG",
      tags: ["n8n", "API", "Workflows"],
    },
    {
      id: 8,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Modern portfolio site with smooth animations and responsive design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 9,
      title: "TICKET BOOKING",
      category: "Design",
      description: "Complete visual identity design for a tech startup",
      image: "src/pages/t.PNG",
      tags: [ "UI/UX", "Figma"],
    },
    {
      id: 10,
      title: "Text to Speech",
      category: "Web Development",
      description: "Text-to-speech (TTS) is a technology that converts written text into spoken audio using artificial intelligence (AI) voices. ",
      image: "src/pages/speech.PNG",
      tags: [ "HTML","CSS","Javascript"],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category
                    ? "gradient-bg text-white hover:opacity-90"
                    : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-secondary rounded-full text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Projects;
