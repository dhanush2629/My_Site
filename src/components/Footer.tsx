import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Dhanush.S. Made with{" "}
              <Heart className="h-4 w-4 text-accent fill-accent" /> and lots
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
