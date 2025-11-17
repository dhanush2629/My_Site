import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/fprofile1.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">Dhanush.S</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80">
                Full Stack Developer & Designer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Crafting beautiful digital experiences through elegant code and thoughtful design.
              Specialized in web development, Python automation, and creative design solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gradient-bg hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg rounded-xl group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-6 text-lg rounded-xl border-2"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Profile Picture - Round Shape */}
          <div className="relative animate-slide-up lg:order-last order-first" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              {/* Main Profile Image - Perfectly Round */}
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glass-card">
                  <img
                    src={profileImage}
                    alt="Dhanush.S"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Animated Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-bg opacity-20 rounded-full blur-3xl animate-float" />
              <div className="absolute -z-10 -bottom-4 -right-4 w-48 h-48 bg-accent/30 rounded-full blur-3xl" />
              <div className="absolute -z-10 -top-4 -left-4 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
