import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink } from 'lucide-react';
import portfolioImage from '@assets/generated_images/Digital_billboard_advertising_display_d4604ddb.png';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'clients' | 'projects'>('projects');

  // Todo: remove mock functionality - replace with real client and project data
  const projects = [
    {
      id: 1,
      title: "Metro Shopping Mall Campaign",
      client: "Metro Shopping Complex",
      category: "Digital Billboard",
      image: portfolioImage,
      description: "Large-scale digital billboard campaign for grand opening of Metro Shopping Mall"
    },
    {
      id: 2,
      title: "Regional Bank Branding",
      client: "Andhra Pradesh Bank",
      category: "Traditional Hoarding",
      image: portfolioImage,
      description: "Strategic placement of traditional hoardings across major commercial areas"
    },
    {
      id: 3,
      title: "Festival Celebration Campaign",
      client: "Local Government",
      category: "Multiple Formats",
      image: portfolioImage,
      description: "Comprehensive festival advertising across digital and traditional media"
    },
    {
      id: 4,
      title: "Educational Institution Drive",
      client: "Engineering College",
      category: "Transit Advertising",
      image: portfolioImage,
      description: "Bus and auto-rickshaw advertising for student admission campaigns"
    }
  ];

  const clients = [
    {
      name: "Metro Shopping Complex",
      industry: "Retail & Shopping",
      partnership: "3+ Years",
      projects: "15+ Campaigns"
    },
    {
      name: "Andhra Pradesh Bank",
      industry: "Banking & Finance",
      partnership: "5+ Years", 
      projects: "25+ Campaigns"
    },
    {
      name: "Godavari Motors",
      industry: "Automotive",
      partnership: "2+ Years",
      projects: "10+ Campaigns"
    },
    {
      name: "Sri Venkateswara University",
      industry: "Education",
      partnership: "4+ Years",
      projects: "20+ Campaigns"
    },
    {
      name: "East Godavari Hospitals",
      industry: "Healthcare",
      partnership: "3+ Years",
      projects: "12+ Campaigns"
    },
    {
      name: "Rajahmundry Municipal Corporation",
      industry: "Government",
      partnership: "6+ Years",
      projects: "30+ Campaigns"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-portfolio">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
            Showcasing our successful partnerships and impactful advertising campaigns 
            that have helped businesses grow and reach their goals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            <Button
              variant={activeTab === 'projects' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('projects')}
              className="px-6 py-2"
              data-testid="tab-projects"
            >
              Previous Works
            </Button>
            <Button
              variant={activeTab === 'clients' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('clients')}
              className="px-6 py-2"
              data-testid="tab-clients"
            >
              Our Clients
            </Button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="section-projects">
            {projects.map((project) => (
              <Card key={project.id} className="group hover-elevate transition-all duration-300 overflow-hidden" data-testid={`card-project-${project.id}`}>
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button variant="secondary" size="sm" className="w-full" data-testid={`button-view-project-${project.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground" data-testid={`title-project-${project.id}`}>
                      {project.title}
                    </h3>
                    <Badge variant="secondary" data-testid={`badge-category-${project.id}`}>
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2" data-testid={`client-project-${project.id}`}>
                    {project.client}
                  </p>
                  <p className="text-muted-foreground" data-testid={`description-project-${project.id}`}>
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="section-clients">
            {clients.map((client, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-client-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`name-client-${index}`}>
                    {client.name}
                  </h3>
                  <p className="text-primary font-medium mb-4" data-testid={`industry-client-${index}`}>
                    {client.industry}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Partnership</span>
                      <span className="text-sm font-medium" data-testid={`partnership-client-${index}`}>
                        {client.partnership}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Projects</span>
                      <span className="text-sm font-medium" data-testid={`projects-client-${index}`}>
                        {client.projects}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our growing list of successful clients?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-start-project"
          >
            Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}