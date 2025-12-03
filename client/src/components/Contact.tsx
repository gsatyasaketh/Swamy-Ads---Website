import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleCallClick = () => {
    console.log('Call button clicked'); // Todo: remove mock functionality
    window.location.href = 'tel:+919876543210';
  };

  const handleEmailClick = () => {
    console.log('Email button clicked'); // Todo: remove mock functionality
    window.location.href = 'mailto:info@swamyads.com';
  };

  const handleWhatsAppClick = () => {
    console.log('WhatsApp button clicked'); // Todo: remove mock functionality
    window.open('https://wa.me/919876543210', '_blank');
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
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

            <Card>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span data-testid="title-hours">Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-medium" data-testid="text-weekday-hours">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium" data-testid="text-sunday-hours">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="heading-contact-methods">
                Contact Methods
              </h3>
              
              <Card className="hover-elevate cursor-pointer transition-all duration-300" onClick={handleCallClick}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid="title-phone">
                        Call Us
                      </h4>
                      <p className="text-muted-foreground" data-testid="text-phone-number">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate cursor-pointer transition-all duration-300" onClick={handleEmailClick}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid="title-email">
                        Email Us
                      </h4>
                      <p className="text-muted-foreground" data-testid="text-email-address">
                        info@swamyads.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate cursor-pointer transition-all duration-300" onClick={handleWhatsAppClick}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid="title-whatsapp">
                        WhatsApp
                      </h4>
                      <p className="text-muted-foreground" data-testid="text-whatsapp-number">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Quote Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle data-testid="title-quote-form">Get a Quick Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select 
                    className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    data-testid="select-service"
                  >
                    <option value="">Select a service</option>
                    <option value="hoardings">Hoardings</option>
                    <option value="cantilevers">Cantilevers</option>
                    <option value="central-medians">Central Medians</option>
                    <option value="pole-kiosks">Pole Kiosks</option>
                    <option value="led-screens">LED Screens</option>
                    <option value="bus-shelters">Bus Shelters</option>
                    <option value="rtc-bus-stands">RTC Bus Stands</option>
                    <option value="trains">Trains</option>
                    <option value="railway-stations">Railway Stations</option>
                    <option value="auto-moving-media">Auto Moving Media</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your advertising requirements..."
                    data-testid="textarea-details"
                  ></textarea>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => console.log('Quote request submitted')} // Todo: remove mock functionality
                  data-testid="button-submit-quote"
                >
                  Submit Quote Request
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours with a customized quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}