import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Signpost, Car, Lamp, Monitor, Bus, MapPin, Train, TrainFront, Navigation } from 'lucide-react';

export default function Services() {
  // Todo: remove mock functionality - replace with real service data
  const services = [
    {
      icon: Building,
      title: "Hoardings",
      description: "Large-format outdoor advertising displays positioned in high-traffic areas for maximum brand visibility and impact.",
      features: ["Prime Locations", "High Visibility", "Large Format"]
    },
    {
      icon: Signpost,
      title: "Cantilevers",
      description: "Overhead advertising structures extending from poles or buildings, capturing attention from multiple directions.",
      features: ["360° Visibility", "Strategic Placement", "Durable Construction"]
    },
    {
      icon: Car,
      title: "Central Medians",
      description: "Eye-catching advertisements placed along road dividers, reaching commuters and travelers throughout the day.",
      features: ["Road-Level Exposure", "Continuous Visibility", "High Traffic Areas"]
    },
    {
      icon: Lamp,
      title: "Pole Kiosks",
      description: "Compact advertising displays mounted on street poles, ideal for localized marketing and community engagement.",
      features: ["Street-Level Impact", "Cost Effective", "Wide Coverage"]
    },
    {
      icon: Monitor,
      title: "LED Screens",
      description: "Dynamic digital displays with vibrant visuals and motion graphics for modern, attention-grabbing advertisements.",
      features: ["HD Digital Display", "Dynamic Content", "Day & Night Visibility"]
    },
    {
      icon: Bus,
      title: "Bus Shelters",
      description: "Strategic advertising at bus stop locations, engaging commuters during their daily wait times.",
      features: ["Captive Audience", "Urban Reach", "Extended Exposure"]
    },
    {
      icon: MapPin,
      title: "RTC Bus Stations",
      description: "High-footfall advertising at major bus terminals reaching thousands of daily commuters and travelers.",
      features: ["Mass Reach", "Diverse Demographics", "Prime Terminal Locations"]
    },
    {
      icon: TrainFront,
      title: "Railway Station",
      description: "Strategic placements at railway stations capturing attention of thousands of daily passengers and visitors.",
      features: ["High Footfall", "Waiting Area Visibility", "Multi-Platform Reach"]
    },
    {
      icon: Train,
      title: "Trains",
      description: "Mobile advertising on train exteriors and interiors, traveling across cities and reaching diverse audiences.",
      features: ["Regional Coverage", "Moving Billboards", "Long Journey Exposure"]
    },
    {
      icon: Navigation,
      title: "Auto Moving Media",
      description: "Mobile advertising on auto-rickshaws navigating through busy streets and neighborhoods for grassroots reach.",
      features: ["Hyper-Local Reach", "Mobile Visibility", "Cost Effective"]
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