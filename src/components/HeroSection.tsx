import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Star } from "lucide-react";
import nepalHero from "@/assets/nepal-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nepalHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover the Magic of
          <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
            Nepal
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Connect with experienced local guides and explore the breathtaking Himalayas, 
          rich culture, and ancient heritage of Nepal with personalized adventures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Find Your Guide
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Explore Destinations
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold">50+</span>
            </div>
            <p className="text-gray-300">Destinations</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold">200+</span>
            </div>
            <p className="text-gray-300">Expert Guides</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold">4.9</span>
            </div>
            <p className="text-gray-300">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;