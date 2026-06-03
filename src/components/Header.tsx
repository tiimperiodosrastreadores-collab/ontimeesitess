"use client";

import { navLinks, PLATFORM_URL, WHATSAPP_DEMO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo priority size="large" onDark={!scrolled} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted transition-colors hover:text-accent-dark"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent-dark",
                  scrolled ? "text-muted" : "text-slate-300"
                )}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button href={PLATFORM_URL} size="sm" external>
            Acessar Plataforma
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "md:hidden rounded-lg p-2 hover:bg-surface",
            scrolled ? "text-navy" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden md:hidden bg-white border-b border-slate-100"
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-accent-dark"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-accent-dark"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div className="mt-2 space-y-2 px-4">
            <Button href={WHATSAPP_DEMO_URL} variant="secondary" className="w-full" external>
              Solicitar Demonstração
            </Button>
            <Button href={PLATFORM_URL} className="w-full" external>
              Acessar Plataforma
            </Button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
