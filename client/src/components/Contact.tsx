import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleCallClick = () => {
    console.log('Call button clicked'); // Todo: remove mock functionality
    window.location.href = 'tel:+919440176321';
  };

  const handleEmailClick = () => {
    console.log('Email button clicked'); // Todo: remove mock functionality
    window.location.href = 'mailto:swamyadsrjy@gmail.com';
  };

  const handleWhatsAppClick = () => {
    console.log('WhatsApp button clicked'); // Todo: remove mock functionality
    window.open('https://wa.me/919440176321', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-contact">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Ready to elevate your brand with effective outdoor advertising? 
            Contact us today to discuss your advertising needs and get a custom quote.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span data-testid="title-address">Registered Office</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium text-foreground" data-testid="text-company-name">
                  Swamy Ads
                </p>
                <p className="text-muted-foreground" data-testid="text-address-line1">
                  88-2-39, Douglass Gardens, NH-16, Morampudi
                </p>
                <p className="text-muted-foreground" data-testid="text-address-line2">
                  Rajamahendravaram, East Godavari District
                </p>
                <p className="text-muted-foreground" data-testid="text-address-line3">
                  Andhra Pradesh - 533106
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span data-testid="title-branch-offices">Branch Offices</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="font-medium text-foreground" data-testid="text-branch-hyderabad">
                    Hyderabad
                  </p>
                  <p className="text-muted-foreground text-sm" data-testid="text-address-hyderabad">
                    2-1-414/1, F.No 401, Sai Krupa Residency, Mayuri Lane, Nallakunta, Hyderabad - 500044
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground" data-testid="text-branch-vijayawada">
                    Vijayawada
                  </p>
                  <p className="text-muted-foreground text-sm" data-testid="text-address-vijayawada">
                    Flat No. 501, Opposite Vijayawada Club, Tadepalli, Vijayawada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <span data-testid="title-hours">Business Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Saturday</span>
                  <span className="font-medium text-foreground" data-testid="text-weekday-hours">9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground" data-testid="heading-contact-methods">
            Contact Methods
          </h3>
          <p className="text-muted-foreground mt-2">Reach out to us through any of the following channels</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="hover-elevate cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={handleCallClick}>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-fit p-4 bg-primary/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2" data-testid="title-phone">
                Call Us
              </h4>
              <p className="text-muted-foreground" data-testid="text-phone-number">
                +91 9440176321
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={handleEmailClick}>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-fit p-4 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2" data-testid="title-email">
                Email Us
              </h4>
              <p className="text-muted-foreground" data-testid="text-email-address">
              swamyadsrjy@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={handleWhatsAppClick}>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-fit p-4 bg-primary/10 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2" data-testid="title-whatsapp">
                WhatsApp
              </h4>
              <p className="text-muted-foreground" data-testid="text-whatsapp-number">
                +91 9440176321
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}