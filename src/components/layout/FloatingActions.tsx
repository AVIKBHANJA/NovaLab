import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Mail, Phone, Calendar } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-50 md:hidden flex flex-col items-end gap-3">
      {/* Theme Toggle - Always visible */}
      <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-1 shadow-lg">
        <ThemeToggle />
      </div>

      {/* Expanded Actions */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Book a Call</span>
          </Link>
          <a
            href="mailto:avikbhanja3@gmail.com"
            className="flex items-center gap-2 bg-background border border-border/50 px-4 py-2.5 rounded-full shadow-lg hover:bg-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Email Us</span>
          </a>
          <a
            href="tel:+918910782478"
            className="flex items-center gap-2 bg-background border border-border/50 px-4 py-2.5 rounded-full shadow-lg hover:bg-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Call Now</span>
          </a>
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-muted text-muted-foreground rotate-0" 
            : "bg-primary text-primary-foreground"
        }`}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingActions;
