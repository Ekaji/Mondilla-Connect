import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">✨ New: Advanced Team Analytics</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Streamline Your
                <span className="hero-gradient bg-clip-text text-transparent"> Team's Workflow</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Mondilla Connect empowers teams to collaborate seamlessly, manage projects efficiently, 
                and deliver exceptional results faster than ever before.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground hover:shadow-lg hover:scale-105 transition-all group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-card-border hover:border-primary hover:bg-primary/5 group"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">4.9/5 from 2,500+ reviews</span>
              </div>
              <div className="text-sm text-muted-foreground">
                ✓ Free 14-day trial • ✓ No credit card required
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="lg:pl-8 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="bg-surface-gradient rounded-2xl p-8 border border-card-border glow-primary">
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 hero-gradient rounded-lg"></div>
                      <div className="space-y-1">
                        <div className="w-24 h-2 bg-primary rounded"></div>
                        <div className="w-16 h-2 bg-muted rounded"></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    </div>
                  </div>

                  {/* Content Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-card rounded-lg p-4 border border-card-border">
                        <div className="space-y-3">
                          <div className="w-full h-2 bg-primary/50 rounded"></div>
                          <div className="space-y-1">
                            <div className="w-3/4 h-1.5 bg-muted rounded"></div>
                            <div className="w-1/2 h-1.5 bg-muted rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Project Progress</span>
                      <span className="text-xs text-primary">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="hero-gradient h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 hero-gradient rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 accent-gradient rounded-full opacity-30 animate-pulse animate-delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;