import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, MapPin } from 'lucide-react';
import heroImage from '@assets/generated_images/Outdoor_advertising_billboard_showcase_0dfc01d8.png';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Outdoor advertising billboards" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-testid="heading-hero">
            Making Advertising{' '}
            <span className="text-primary">Truly Work</span>{' '}
            for Your Business
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed" data-testid="text-hero-description">
            Leading outdoor advertising company delivering effective and impactful advertising 
            solutions with a commitment to innovation and client success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-get-started"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Award className="h-6 w-6 text-white" />
                <span className="text-2xl font-bold text-white" data-testid="stat-years">25+</span>
              </div>
              <p className="text-gray-300" data-testid="text-years-experience">Years of Excellence</p>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="h-6 w-6 text-white" />
                <span className="text-2xl font-bold text-white" data-testid="stat-clients">500+</span>
              </div>
              <p className="text-gray-300" data-testid="text-satisfied-clients">Satisfied Clients</p>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <MapPin className="h-6 w-6 text-white" />
                <span className="text-2xl font-bold text-white" data-testid="stat-locations">50+</span>
              </div>
              <p className="text-gray-300" data-testid="text-prime-locations">Prime Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}