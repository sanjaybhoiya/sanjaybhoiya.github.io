import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Code,
  Bot,
  TrendingUp,
  Search,
  MessageSquare,
  Globe,
  Mail,
  Lightbulb,
  Target,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Responsive websites, e-commerce platforms, and landing pages that convert",
      features: [
        "React & Next.js",
        "E-commerce Solutions",
        "Mobile-First Design",
      ],
    },
    {
      icon: Bot,
      title: "AI Chatbots & Automation",
      description:
        "Intelligent bots and automation systems to streamline your business",
      features: [
        "Custom AI Chatbots",
        "Workflow Automation",
        "24/7 Customer Support",
      ],
    },
    {
      icon: MessageSquare,
      title: "Social Media & Content",
      description: "Strategic content creation and social media optimization",
      features: [
        "Content Strategy",
        "Social Media Management",
        "Brand Storytelling",
      ],
    },
    {
      icon: Search,
      title: "SEO & Growth Strategy",
      description:
        "Data-driven SEO and growth strategies to boost your online presence",
      features: ["Technical SEO", "Keyword Research", "Growth Hacking"],
    },
    {
      icon: Lightbulb,
      title: "Business Consulting & Ideas",
      description: "Transform your ideas into profitable business strategies",
      features: [
        "Business Planning",
        "Market Research",
        "Strategy Development",
      ],
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Comprehensive marketing campaigns that drive real results",
      features: [
        "Digital Campaigns",
        "Performance Marketing",
        "ROI Optimization",
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  SB
                </span>
              </div>
              <span className="font-bold text-xl">Sanjay Bhoiya</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5"
            >
              Web Developer • Digital Marketer • Business Consultant
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Bringing Your
              <span className="text-primary block mt-2">Ideas to Life</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Web Development | AI Solutions | Digital Marketing | Business
              Consulting
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-accent/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  About Me
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm{" "}
                    <span className="text-foreground font-semibold">
                      Sanjay Bhoiya
                    </span>{" "}
                    — passionate about transforming your ideas into real
                    business growth. From building websites to optimizing
                    content and guiding your business strategy, I provide
                    personalized solutions tailored to your needs.
                  </p>
                  <p>
                    With expertise spanning web development, AI automation,
                    digital marketing, and strategic consulting, I help
                    entrepreneurs and businesses unlock their full potential in
                    the digital landscape.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    5+ Years Experience
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    100+ Projects
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Global Clients
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold text-lg">My Mission</h3>
                    </div>
                    <p className="text-muted-foreground">
                      To empower businesses with cutting-edge digital solutions
                      that drive growth, efficiency, and success in today's
                      competitive market.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-2xl">50+</div>
                      <div className="text-sm text-muted-foreground">
                        Happy Clients
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-2xl">24/7</div>
                      <div className="text-sm text-muted-foreground">
                        Support
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions to help your business thrive in
              the modern landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredService === index;

              return (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 border hover:border-primary/50 hover:shadow-xl ${
                    isHovered ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                        isHovered
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-accent/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Work Together
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to bring your ideas to life? Send me a message and let's
                discuss how I can help your business grow.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                    <Mail className="w-6 h-6 text-primary" />
                    Send me a message
                  </CardTitle>
                  <CardDescription className="text-lg">
                    I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="What's your project about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell me about your project, goals, and how I can help..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Why Work With Me */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">
                      Why work with me?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">5+ years of experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          24/7 support and communication
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          Custom solutions for your needs
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Results-driven approach</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-accent/50 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let's discuss your project and turn your ideas into
                      reality
                    </p>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Free consultation
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    SB
                  </span>
                </div>
                <span className="text-xl font-bold text-background">
                  Sanjay Bhoiya
                </span>
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Transforming ideas into digital success through innovative web
                solutions, AI automation, and strategic business consulting.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-background/70 hover:text-primary transition-colors text-sm"
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Get in Touch</h4>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-background/70 hover:text-primary hover:bg-background/10 p-0 h-auto justify-start"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <p className="text-background/60 text-sm">
                  Professional web development, AI solutions, and business
                  consulting services
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-background/50 text-sm">
                © {new Date().getFullYear()} Sanjay Bhoiya. All rights
                reserved.
              </p>
              <p className="text-background/50 text-sm">
                Built with passion for digital excellence
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
