"use client";

import { navLinks, PLATFORM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white transition-transform group-hover:scale-105">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-navy">
            OnTime <span className="text-accent">Tracker</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
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
          className="md:hidden rounded-lg p-2 text-navy hover:bg-surface"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
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
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div className="mt-2 px-4">
            <Button href={PLATFORM_URL} className="w-full" external>
              Acessar Plataforma
            </Button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
