import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle'; // Import the theme toggle component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-card-border z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/src/assets/favicon-2.png" alt="Mondilla Connect" className="w-8 h-8" />
              <span className="font-bold text-xl">Mondilla Connect</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors animated-underline">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors animated-underline">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors animated-underline">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors animated-underline">
              Contact
            </a>
          </div>

          {/* Desktop Actions (Theme Toggle + CTA Button) */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button className="hero-gradient text-primary-foreground hover:shadow-lg hover:scale-105 transition-all">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Actions (Theme Toggle + Menu Button) */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-secondary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-card-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="hero-gradient text-primary-foreground w-full mt-4">
                Get Started Free
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;