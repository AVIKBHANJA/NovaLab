import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Mail, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold">
            Nova<span className="text-gradient">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact">
            <Button variant="hero" size="default" className="group">
              Book a Call
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/30 animate-fade-in">
          <div className="container-custom py-6 space-y-6">
            {/* Quick Actions Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-border/30">
              <span className="text-sm text-muted-foreground font-mono">Quick Actions</span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <a 
                  href="mailto:hello@novalabs.com" 
                  className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Primary CTA */}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button variant="hero" size="lg" className="w-full group">
                Book a Free Call
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;