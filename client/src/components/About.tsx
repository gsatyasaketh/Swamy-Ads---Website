import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target, Heart, Users } from 'lucide-react';
import teamImage from '@assets/generated_images/Advertising_team_at_work_534df93b.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="heading-about">
              Our Story of Excellence
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p data-testid="text-company-founding">
                <strong className="text-foreground">Swamy Ads</strong> was founded under the visionary leadership of 
                <strong className="text-foreground"> Sri Gorripoti Tata Rao</strong>, who built a strong reputation 
                for trust and excellence in the advertising industry.
              </p>
              <p data-testid="text-current-leadership">
                Today, his legacy continues under the dynamic leadership of his son, 
                <strong className="text-foreground"> Mr. Gorripoti Bhaskara Rao</strong>, an ambitious entrepreneur 
                who brings fresh perspectives and innovative thinking to the business.
              </p>
              <p data-testid="text-team-commitment">
                Supported by a team of skilled and dedicated professionals, we consistently deliver 
                effective and impactful advertising solutions with a commitment to innovation and client success.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={teamImage}
              alt="Swamy Ads team at work" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              data-testid="img-team"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl" data-testid="title-mission">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-mission">
                To deliver innovative and effective outdoor advertising solutions that help businesses 
                connect with their target audience, drive growth, and achieve lasting success through 
                strategic placement and creative excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl" data-testid="title-vision">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-vision">
                To be the leading outdoor advertising company in Andhra Pradesh, recognized for our 
                innovation, integrity, and impact in transforming brands and driving business success 
                through powerful visual communication.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-values">
            Our Core Values
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Swamy Ads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3" data-testid="title-value-trust">
              Trust & Integrity
            </h4>
            <p className="text-muted-foreground" data-testid="text-value-trust">
              Building lasting relationships through honest communication and reliable service delivery.
            </p>
          </div>

          <div className="text-center">
            <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3" data-testid="title-value-innovation">
              Innovation
            </h4>
            <p className="text-muted-foreground" data-testid="text-value-innovation">
              Embracing new technologies and creative approaches to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3" data-testid="title-value-excellence">
              Excellence
            </h4>
            <p className="text-muted-foreground" data-testid="text-value-excellence">
              Striving for exceptional quality in every project and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}