import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Mountain } from "lucide-react";
import pokharaImg from "@/assets/pokhara.jpg";
import everestImg from "@/assets/everest-base-camp.jpg";
import chitvanImg from "@/assets/chitwan.jpg";
import kathmanduImg from "@/assets/kathmandu.jpg";

const destinations = [
  {
    id: 1,
    name: "Everest Base Camp",
    image: everestImg,
    description: "Epic trek to the base of the world's highest mountain",
    duration: "12-16 days",
    difficulty: "Hard",
    groupSize: "2-12 people",
    tags: ["Trekking", "Adventure", "Mountains"],
    price: "From $1,500"
  },
  {
    id: 2,
    name: "Pokhara Valley",
    image: pokharaImg,
    description: "Serene lakes with stunning Annapurna mountain views",
    duration: "3-7 days",
    difficulty: "Easy",
    groupSize: "1-20 people",
    tags: ["Culture", "Relaxation", "Photography"],
    price: "From $300"
  },
  {
    id: 3,
    name: "Chitwan National Park",
    image: chitvanImg,
    description: "Wildlife safari in Nepal's premier national park",
    duration: "2-4 days",
    difficulty: "Easy",
    groupSize: "2-15 people",
    tags: ["Wildlife", "Safari", "Nature"],
    price: "From $400"
  },
  {
    id: 4,
    name: "Kathmandu Valley",
    image: kathmanduImg,
    description: "Ancient temples and vibrant cultural heritage",
    duration: "2-5 days",
    difficulty: "Easy",
    groupSize: "1-25 people",
    tags: ["Culture", "Heritage", "Spiritual"],
    price: "From $200"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Top Destinations in Nepal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From towering peaks to cultural treasures, discover the most breathtaking 
            destinations Nepal has to offer with our expert guides.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={destination.difficulty === 'Hard' ? 'destructive' : 
                           destination.difficulty === 'Medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {destination.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-primary">{destination.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {destination.groupSize}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mountain className="h-4 w-4 mr-2" />
                    {destination.price}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Select Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Destinations
            <MapPin className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;