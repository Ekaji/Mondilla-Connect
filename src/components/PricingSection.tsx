import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$9',
    period: 'per user/month',
    description: 'Perfect for small teams getting started with project collaboration.',
    features: [
      'Up to 5 team members',
      '10 projects included',
      'Basic task management',
      'File sharing (1GB storage)',
      'Email support',
      'Mobile apps access'
    ],
    popular: false,
    cta: 'Start Basic Plan'
  },
  {
    name: 'Standard',
    price: '$19',
    period: 'per user/month',
    description: 'Ideal for growing teams that need advanced collaboration features.',
    features: [
      'Up to 25 team members',
      'Unlimited projects',
      'Advanced task management',
      'File sharing (100GB storage)',
      'Priority support',
      'Time tracking & analytics',
      'Custom workflows',
      'Integration with 50+ tools'
    ],
    popular: true,
    cta: 'Start Standard Plan'
  },
  {
    name: 'Premium',
    price: '$39',
    period: 'per user/month',
    description: 'Enterprise-grade solution with advanced security and unlimited everything.',
    features: [
      'Unlimited team members',
      'Unlimited projects & storage',
      'Enterprise task management',
      'Advanced security & compliance',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced analytics & reporting',
      'White-label options',
      'SLA guarantee'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 lg:px-8 bg-surface/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">💰 Simple Pricing</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose the perfect plan for
            <span className="accent-gradient bg-clip-text text-transparent"> your team's needs</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Start free, upgrade when you're ready, 
            and scale as your team grows.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-card rounded-lg p-1 border border-card-border">
            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
              Yearly
              <span className="ml-1 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${plan.popular 
                  ? 'hero-gradient text-primary-foreground hover:shadow-lg' 
                  : 'border-card-border hover:border-primary hover:bg-primary/5'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Trial Info */}
              {plan.name !== 'Premium' && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  14-day free trial • No credit card required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Have questions? 
            <button className="text-primary hover:text-primary-glow ml-1 animated-underline">
              Check our FAQ
            </button>
            {' '}or{' '}
            <button className="text-primary hover:text-primary-glow animated-underline">
              contact our sales team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;