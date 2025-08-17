import { Zap, Shield, Users, BarChart3, Clock, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast project loading and real-time collaboration with our optimized infrastructure.',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with bank-level encryption, advanced access controls, and compliance standards.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Seamless Team Collaboration',
    description: 'Invite unlimited team members, assign roles, and collaborate in real-time with integrated communication tools.',
    color: 'text-accent'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track project progress, team performance, and gain insights with detailed analytics and reporting.',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Smart Time Tracking',
    description: 'Automatic time tracking, deadline management, and project timeline optimization for maximum productivity.',
    color: 'text-accent'
  },
  {
    icon: MessageSquare,
    title: 'Integrated Communication',
    description: 'Built-in chat, video calls, and comment system to keep all project communication in one place.',
    color: 'text-accent'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">✨ Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to
            <span className="hero-gradient bg-clip-text text-transparent"> succeed together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive suite of tools designed to streamline your workflow, 
            enhance collaboration, and accelerate your team's success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <button className="text-primary hover:text-primary-glow font-medium text-sm animated-underline group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 border border-card-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to experience the difference?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of teams who've revolutionized their workflow with Mondilla Connect.
            </p>
            <button className="hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;