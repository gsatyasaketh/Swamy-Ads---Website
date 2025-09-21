import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Building, Zap, Globe, Target, Megaphone } from 'lucide-react';

export default function Services() {
  // Todo: remove mock functionality - replace with real service data
  const services = [
    {
      icon: Monitor,
      title: "Digital Billboards",
      description: "High-impact LED displays in prime locations for maximum visibility and engagement.",
      features: ["HD LED Technology", "Dynamic Content", "Real-time Updates"]
    },
    {
      icon: Building,
      title: "Traditional Hoardings",
      description: "Classic outdoor advertising solutions with proven effectiveness and wide reach.",
      features: ["Prime Locations", "Weather Resistant", "Large Format"]
    },
    {
      icon: Zap,
      title: "Transit Advertising",
      description: "Mobile advertising solutions on buses, auto-rickshaws, and transport hubs.",
      features: ["High Mobility", "Daily Exposure", "Cost Effective"]
    },
    {
      icon: Globe,
      title: "Street Furniture",
      description: "Bus shelters, kiosks, and street-side advertising for urban engagement.",
      features: ["Urban Integration", "Community Reach", "Professional Design"]
    },
    {
      icon: Target,
      title: "Campaign Planning",
      description: "Strategic planning and execution of comprehensive advertising campaigns.",
      features: ["Market Analysis", "Strategic Placement", "ROI Optimization"]
    },
    {
      icon: Megaphone,
      title: "Brand Activation",
      description: "Creative brand experiences and activations for memorable customer engagement.",
      features: ["Event Management", "Interactive Experiences", "Brand Storytelling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-services">
            Our Advertising Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive outdoor advertising services designed to make your brand stand out 
            and connect with your target audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`title-service-${index}`}>
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base" data-testid={`description-service-${index}`}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      data-testid={`feature-service-${index}-${featureIndex}`}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We create tailored advertising strategies for your unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
}