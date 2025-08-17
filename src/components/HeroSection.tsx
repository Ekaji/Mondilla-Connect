import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          
          <div className="lg:pl-8 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
                  alt="Team collaboration dashboard showing project management interface"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]"
                  loading="lazy"
                />
               
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;