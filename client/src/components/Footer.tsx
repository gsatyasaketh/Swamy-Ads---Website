import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import swamyLogo from '@assets/swamy-ads_1758482983439.jpg';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={swamyLogo} 
                alt="Swamy Ads Logo" 
                className="h-12 w-auto"
                data-testid="logo-footer"
              />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed" data-testid="text-footer-description">
              Leading outdoor advertising company in Andhra Pradesh & Telangana, delivering effective and impactful 
              advertising solutions with innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6" data-testid="heading-quick-links">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-background/80 hover:text-primary transition-colors"
                data-testid="footer-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-background/80 hover:text-primary transition-colors"
                data-testid="footer-nav-services"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-background/80 hover:text-primary transition-colors"
                data-testid="footer-nav-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-background/80 hover:text-primary transition-colors"
                data-testid="footer-nav-contact"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6" data-testid="heading-contact-info">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/80" data-testid="text-footer-address">
                  <p>88-2-39, Douglass Gardens, NH-16, Morampudi</p>
                  <p>Rajamahendravaram, East Godavari District</p>
                  <p>Andhra Pradesh - 533106</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+919440176321" 
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 9440176321
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:swamyadsrjy@gmail.com" 
                  className="text-background/80 hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  swamyadsrjy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="text-center text-background/60">
            <p data-testid="text-copyright">
              © 2025 Swamy Ads. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}