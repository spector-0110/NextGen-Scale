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
  } from "@/app/components/ui/navbar/index";
import { useState } from "react";

export function Header({children}) {
  const navItems = [
    {
      name: "services",
      link: "#features",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "About Us",
      link: "#about",
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
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
      {/* <DummyContent2 /> */}

      {children}
    </div>
  );
}


const DummyContent2 = () => {
  return(
    <div className="flex flex-col items-center justify-center text-center px-4 py-24 space-y-6">
  <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
    <span className="text-yellow-400">NextGen</span>{" "}
    <span className="font-light">Scale</span>
  </h1>
  <p className="max-w-xl text-lg text-neutral-700 dark:text-neutral-300">
    Scaling your future with clarity, design, and speed.
  </p>
</div>
  )
}
