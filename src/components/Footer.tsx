import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-card-border py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">Mondilla Connect</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Empowering teams worldwide to collaborate seamlessly and achieve exceptional results 
              through innovative project management solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:hello@mondillaconnect.com"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Mondilla Connect. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;