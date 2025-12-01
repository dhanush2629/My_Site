import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import f from "@/pages/f.PNG";
import t from "@/pages/t.PNG";
import thamane from "@/pages/thamane.PNG";
import f1 from "@/pages/f1.png";
import food from "@/pages/food.PNG";
import Telegram_Bot_ from "@/pages/Telegram_Bot_.png";
import speech from "@/pages/speech.png";
import ai from "@/pages/ai.PNG";
import dimg from "@/pages/dimg.PNG";
import p from "@/pages/p.PNG";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from a data source or API
  const projects: Record<string, Project> = {
    "1": {
      title: "Ai_Assitant",
      category: "Python",
      description: " A Python-based AI Assistant built using Natural Language Processing (NLP) techniques to understand user commands, answer questions, perform automation tasks, and interact through voice or text. Designed as a lightweight personal assistant capable of performing multiple daily tasks efficiently.",
      image: ai,
      tags: ["Python", "NLP"],
      challenge: "Build an intelligent assistant without relying on paid APIs.Enable the assistant to understand natural language queries with high accuracy.Integrate voice input/output for a real assistant experience.Add support for executing system tasks (open apps, search web, respond to queries).",
      solution: "Implemented NLP using libraries such as NLTK, spaCy, or custom intent classification logic.Added speech recognition and text-to-speech using free libraries (SpeechRecognition + pyttsx3).Created a command-processing pipeline to understand user intent and execute the correct function.Optimized performance by caching frequent tasks and reducing unnecessary API calls.",
      results: [
        "Delivered a fully functional voice-enabled AI assistant.",
        "Achieved accurate command recognition through effective NLP processing.",
        "Successfully automated daily tasks and improved productivity.",
      ],
      githubUrl: "https://github.com/dhanush2629/AI_Assistant"
    },
    "2": {
      title: "FOODIE",
      category: "Web Development",
      description: "FOODIE is a modern and responsive food-ordering website built using HTML, CSS, and JavaScript. The platform allows users to browse restaurants, view menus, explore food categories, and place online orders with a clean and intuitive user experience.",
      image: food,
      tags: ["HTML", "CSS", "JavaScript"],
      challenge: "Designing a fast and visually engaging food website without frameworks.Ensuring responsiveness across all devices (mobile, tablet, desktop).Organizing food items, categories, and restaurant information in a simple but appealing layout.Implementing interactive features using only vanilla JavaScript.",
      solution: "Built a fully responsive UI using flexbox, CSS grid, and media queries.Designed modern components such as hero sections, category cards, menu listings, and interactive buttons.Added animations and hover effects to enhance the user experience.Optimized images, reduced layout shifts, and improved loading time.",
      results: [
        "Improved user engagement with clean UI, smooth animations, and fast interactions.",
        "Easy for developers to extend (cart system, service)",
        "Suitable for showcasing design + coding skills in a portfolio or as a starter for a commercial food ordering platform.",
      ],
      
      githubUrl: "https://github.com/dhanush2629/FOODIE",
    },
    "3": {
      title: "FOOD_ORDER APP",
      category: "Design",
     description: "A modern and intuitive Food Ordering App design created using Figma, with custom illustrations built in Adobe Illustrator. The app focuses on fast navigation, visually appealing UI, easy menu browsing, and a seamless ordering experience from selection to checkout.",
      image: thamane,
      tags: ["UI/UX", "Figma"],
      challenge: "Design a clean and engaging food-ordering interface that appeals to both new and returning users.Reduce the steps needed to browse restaurants, explore menus, customize items, and place an order.Ensure the layout works flawlessly on all screen sizes with consistent design components.Create custom visual elements and food illustrations for a unique branding experience.",
      solution: "Designed a complete UI/UX flow in Figma using components, variants, auto-layout, and shared styles.Created custom illustrations and icons in Illustrator for a unique, branded experience.Added micro-interactions, transitions, and a clean visual hierarchy for smooth usability.Ensured consistent spacing, typography, and component reuse to improve design scalability.",
      results: [
        "Delivered a polished, high-fidelity app prototype ready for developer handoff.",
        "Improved user flow efficiency with fewer steps to place an order.",
        "Provided a delightful and intuitive experience for users browsing and ordering food.",
      ],
      liveUrl: "https://www.figma.com/community/file/1570337758590510616/amuthu-food",
    },
    "4": {
      title: "FACE DETECTION",
      category: "Python",
      description: "A Python-based real-time Face Detection system built using OpenCV, capable of detecting human faces from images and live webcam streams. The project demonstrates computer vision fundamentals, Haar cascade/Deep Learning–based detection.",
      image: f1,
      tags: ["Python", "OpenCV"],
      challenge: "Required a fast and accurate way to detect faces in real time using a lightweight model.Needed a simple interface for users to upload images or use a webcam feed.Ensure detection works under different lighting conditions, orientations, and distances.",
      solution: "Implemented face detection using OpenCV Haar Cascade Classifier for lightweight, CPU-friendly performance.Added support for Real-Time Webcam Detection using cv2.VideoCapture().Built for easy user control—upload image, start/stop camera, save results.",
      results: [
        "Achieved fast and reliable face detection on both images and live video.",
        "Provided a clean and simple user experience for non-technical users.",
        "Ready to extend for face recognition, attendance systems, or surveillance tools.",
      ],
      
      githubUrl: "https://github.com/dhanush2629/Face_Detection"
    },
    "5": {
      title: "Food Order App",
      category: "Design",
      description: "A modern and intuitive Food Ordering App design created using Figma, with custom illustrations built in Adobe Illustrator. The app focuses on fast navigation, visually appealing UI, easy menu browsing, and a seamless ordering experience from selection to checkout.",
      image: f,
      tags: ["UI/UX", "Figma", "Illustrator"],
      challenge: "Design a clean and engaging food-ordering interface that appeals to both new and returning users.Reduce the steps needed to browse restaurants, explore menus, customize items, and place an order.Ensure the layout works flawlessly on all screen sizes with consistent design components.Create custom visual elements and food illustrations for a unique branding experience.",
      solution: "Designed a complete UI/UX flow in Figma using components, variants, auto-layout, and shared styles.Created custom illustrations and icons in Illustrator for a unique, branded experience.Added micro-interactions, transitions, and a clean visual hierarchy for smooth usability.Ensured consistent spacing, typography, and component reuse to improve design scalability.",
      results: [
        "Delivered a polished, high-fidelity app prototype ready for developer handoff.",
        "Improved user flow efficiency with fewer steps to place an order.",
        "Provided a delightful and intuitive experience for users browsing and ordering food.",
      ],
      liveUrl: "https://www.figma.com/community/fle/1570674881728284489/food-order-app",
     
    },
    "6": {
      title: "Data_Dashboard",
      category: "Python",
      description: "An interactive and visually rich data analytics dashboard built using Streamlit, Pandas, NumPy, and Kaleido for high-quality chart exports. The dashboard allows users to upload datasets, analyze insights in real-time, visualize trends, and download charts or processed results for reporting.",
      image: dimg,
      tags: ["Python", "Streamlit ","Pandas ","Numpy","Kaleido"],
      challenge: "Needed a simple yet powerful way to analyze and visualize datasets without using complex BI tools.Required real-time interactivity, filtering, and aggregation for large datasets.Visualizations needed to be clean, customizable, and exportable as high-resolution images.Maintain fast performance even when processing large CSV/Excel files.",
      solution: "Built a full-featured dashboard in Streamlit with widgets for file upload, filters, date ranges, selectors, and dynamic queries.Used Pandas and NumPy for efficient data cleaning, transformation, and computation.Implemented interactive charts using Plotly/Matplotlib and exported them using Kaleido for high-resolution PNG/PDF output.",
      results: [
        "Delivered a flexible, user-friendly dashboard capable of handling a wide range of datasets.",
        "High-resolution chart exports simplified reporting for teams and clients.",
        "Improved data-driven decision-making through clean insights and instant visual feedback.",
      ],
      githubUrl: "https://github.com/dhanush2629/Dashboard"
    },
    
    "7": {
      title: "Telegram Order Automation using n8n",
      category: "Automation with n8n",
      description: "A fully automated system built using n8n and Python to manage customer orders received through Telegram. The workflow collects customer messages, extracts order details, stores them in a database, and sends automated confirmations—reducing manual effort and improving response time.",
      image: Telegram_Bot_,
      tags: ["Python", "Workflows", "n8n"],
      challenge: "Manually handling incoming Telegram orders was slow, error-prone, and difficult to track.Required a system to extract customer details (name, phone, address, items) from text messages automatically.Needed automated replies, order validation, and integration with external services (Google Sheets/DB).",
      solution: "Built a complete automation workflow using n8n with Telegram Trigger, Function Nodes, HTTP Requests, and Database/Spreadsheet integrations.Implemented Python-based NLP logic to extract name, address, phone number, and ordered items from messages.Integrated distance calculation using Google Maps API (optional) to estimate delivery time.Implemented automatic confirmation messages, order summaries, and error handling.",
      results: [
        "Reduced order processing time by 90% through automation.",
        "Eliminated manual errors in extracting customer information.",
        "Created a scalable workflow that can be extended to WhatsApp, email, or website chatbots.",
      ],
      githubUrl: "https://github.com"
    },
    "8": {
      title: "Portfolio Website",
      category: "Web Development",
      description: "A fully responsive and interactive portfolio website built using HTML, CSS, JavaScript, and React. It showcases personal projects, skills, achievements, and contact details with a modern UI and smooth animations. The website is optimized for performance and works across all devices.",
      image: p,
      tags: ["HTML","CSS","JavaScript","React"],
      challenge: "Create a professional and visually appealing portfolio that stands out from standard templates.Ensure full responsiveness across mobile, tablet, and wide desktop screens.Implement smooth animations while maintaining fast load speed.Structure project sections clearly and make the layout easy for recruiters and clients to navigate.",
      solution: "Designed a clean and modern layout with organized sections: Home, About, Skills, Projects, Experience, and Contact.Used React components and React Router for smooth navigation and modular structure.Integrated Framer Motion for animations such as fade-ins, slide transitions, and hover effects.Added a dynamic projects section with filters and tags.Implemented responsive design using CSS Grid/Flexbox and media queries.",
      results: [
        "A polished, fast, and mobile-responsive portfolio suitable for job applications and client presentations.",
        "Improved user engagement with smooth animations and interactive components.",
        "Successfully showcased personal branding and professional skills.",
      ],
      liveUrl: "https://www.figma.com/community/file/1570674881728284489/food-order-app",
    },
    "9": {
      title: "Ticket Booking App",
      category: "Design",
      description: "A modern, user-friendly mobile app design for booking movie, event, travel, and show tickets. Created in Figma, the design focuses on simplicity, smooth navigation, and visually appealing UI elements. The app allows users to browse events, view seat layouts, compare prices, and complete payments effortlessly.",
      image: t,
      tags: ["UI/UX", "Figma"],
      challenge: "Create a seamless and intuitive booking flow that users can complete in under 3–5 steps.Ensure a clean and visually balanced layout while handling multiple ticket types (movies, events, travel).Design a clear seat-selection experience that avoids confusion.Maintain consistency across different screen sizes with reusable components.Build a design that feels modern and premium while staying lightweight.",
      solution: "Applied Figma auto-layout, components, and variants to create a scalable and consistent UI system.Designed a clean home screen with categories, trending shows, and personalized suggestions.Added interactive seat-map with color-coded availability.Added a minimal checkout page with clear pricing breakdown and secure payment UI.Included light/dark mode mockups for premium look and user preference.",
      results: [
        "A polished, production-ready Figma design that can be handed off to developers.",
        "Reduced design complexity through reusable components and shared styles.",
        "Attractive modern UI that enhances user trust and improves conversion rate.",
      ],
      liveUrl: "https://www.figma.com/community/file/1570662214557356775/ticket-booking-app",
    },
    "10": {
      title: "Text to Speech",
      category: "Web Development",
      description: "A lightweight browser-based Text-to-Speech demo built with HTML, CSS and JavaScript. Users paste or type text, pick a voice, and control rate and pitch to instantly hear natural-sounding speech using the browser’s native Web Speech API. Designed for accessibility, quick prototyping, and embedding into websites or web apps.",
      image: speech,
      tags: ["HTML","CSS","JavaScript"],
      challenge: "Provide an accessible, easy-to-use TTS experience entirely in the browser without external APIs — while supporting multiple voices, real-time controls (rate/pitch), and good UX for keyboard and screen-reader users. Also keep the UI small and responsive so it can be embedded on pages or demos.",
      solution: "Use the browser Web Speech API (speechSynthesis + SpeechSynthesisUtterance) for client-side TTS playback, so no external service or API key is required.Build a simple, responsive UI with semantic HTML and accessible controls: textarea for input, select for available voices, sliders for rate & pitch, and Play / Pause / Stop buttons.Detect and list available voices on load (and whenever voiceschanged fires). Show voice metadata (lang, name).",
      results: [
        "Instant, client-side TTS playback in modern browsers (Chrome, Edge, Firefox with supported engines).",
        "Improved accessibility — screen-reader friendly controls, keyboard operable, and useful for visually impaired users.",
        "Lightweight (single-page, zero backend), easy to embed in docs, portfolios, and apps.",
        "Clear roadmap for enhancements: downloadable audio via optional backend, SSML support, multilingual UI, or integration with advanced open-source TTS models for higher-fidelity voices.",
      ],
     
       githubUrl: "https://github.com/dhanush2629/Text_to_Speech",
    },

    // Add more projects as needed
  };

  const project = projects[id || "1"] || projects["1"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="glass-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 animate-slide-up">
              <div className="text-accent font-medium mb-2">{project.category}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-4 mb-12">
                {project.liveUrl && (
                  <Button className="gradient-bg text-white hover:opacity-90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Project
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            )}

            <div className="rounded-2vxl overflow-hidden glass-card p-2 mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl"
              />
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {project.results && (
              <div className="glass-card p-8 rounded-2xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="gradient-bg w-2 h-2 rounded-full mt-2 shrink-0" />
                      <span className="text-foreground/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
