"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    MobileNavItems,
  } from "@/components/ui/navbar/index";
import { useState } from "react";

export default function Header({children}) {
  const navItems = [
    {
      name: "services",
      link: "#services",
    },
    {
      name: "Process",
      link: "#process",
    },
    {
      name: "About Us",
      link: "#services",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody visible={true}>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="#form">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav visible={true}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            <MobileNavItems 
              items={navItems} 
              onItemClick={() => setIsMobileMenuOpen(false)} 
            />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
      {children}
    </div>
  );
}
