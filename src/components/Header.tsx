import { Button } from "@/components/ui/button";
import { Menu, Mountain } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Mountain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Nepal Guide Connect</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#destinations" className="text-sm font-medium hover:text-primary transition-colors">
            Destinations
          </a>
          <a href="#guides" className="text-sm font-medium hover:text-primary transition-colors">
            Find Guides
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Nepal
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Login
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Sign Up
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;