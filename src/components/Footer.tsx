import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Nepal Guide Connect</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Connecting travelers with authentic Nepalese experiences through 
              local expertise and genuine hospitality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#destinations" className="hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="#guides" className="hover:text-accent transition-colors">Find Guides</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Nepal</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Trekking Tours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cultural Tours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Wildlife Safari</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Itineraries</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+977-1-234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@nepalguideconnect.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Nepal Guide Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;