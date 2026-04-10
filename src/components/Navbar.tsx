import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/mockData";

interface NavbarProps {
  readonly className?: string;
}

export const Navbar: React.FC<Readonly<NavbarProps>> = ({ className = "" }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5 md:py-6">
        <Link
          to="/"
          className="font-headline font-black text-lg md:text-xl text-on-surface tracking-tight hover:opacity-80 transition-opacity"
        >
          The Editorial Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`font-headline font-bold tracking-tight uppercase text-xs transition-all duration-300 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="text-on-surface p-1"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl">
                menu
              </span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-surface border-outline-variant/15 w-72"
            >
              <nav className="flex flex-col gap-6 mt-12 px-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={`font-headline font-bold uppercase text-sm tracking-wide transition-colors ${
                        isActive ? "text-primary" : "text-on-surface hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
