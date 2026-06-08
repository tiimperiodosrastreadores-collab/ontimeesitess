"use client";

import { PLATFORM_PREVIEW_URL, PLATFORM_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLink, Radio } from "lucide-react";

export function HeroPlatformImage() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      <motion.div
        className="absolute -inset-3 bg-accent/15 blur-3xl animate-pulse-glow"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm border-2 border-accent/25 bg-white shadow-2xl glow-accent"
      >
        <div className="flex items-center justify-between border-b border-accent/15 bg-ice px-4 py-2.5">
          <div className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Radio className="h-4 w-4 text-accent" />
            Plataforma ao vivo
          </div>
          <a
            href={PLATFORM_PREVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-accent-dark transition-colors hover:text-accent"
          >
            Tela cheia
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <iframe
          src={PLATFORM_PREVIEW_URL}
          title="Plataforma OnTime — visualização interativa do mapa"
          className="block w-full h-[380px] sm:h-[440px] lg:h-[520px] border-0 bg-slate-100"
          loading="lazy"
          allow="geolocation; fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <p className="mt-3 text-center text-xs text-muted">
        Navegue pelo mapa em tempo real.{" "}
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent-dark underline-offset-2 hover:underline"
        >
          Acessar plataforma completa
        </a>
      </p>
    </div>
  );
}
