import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Heart, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Himalayan Adventures",
    description: "Home to 8 of the world's 14 highest peaks, including Mount Everest"
  },
  {
    icon: Heart,
    title: "Rich Culture",
    description: "Ancient traditions, vibrant festivals, and spiritual heritage"
  },
  {
    icon: Globe,
    title: "Diverse Landscapes",
    description: "From tropical jungles to alpine meadows in a compact area"
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description: "Experience the genuine warmth of Nepalese people"
  }
];

const AboutNepal = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why Choose Nepal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nepal is a land of incredible diversity, where ancient traditions meet breathtaking 
              natural beauty. From the world's highest peaks to the birthplace of Buddha, every 
              journey here is a life-changing experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">8,848m</div>
                <p className="text-sm text-muted-foreground">Mount Everest Height</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">10</div>
                <p className="text-sm text-muted-foreground">UNESCO Sites</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">125+</div>
                <p className="text-sm text-muted-foreground">Ethnic Groups</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">2,500</div>
                <p className="text-sm text-muted-foreground">Years of History</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNepal;