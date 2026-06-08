"use client";

import { PLATFORM_URL } from "@/lib/constants";
import { openPlatformWithLogin } from "@/lib/platformAccess";
import { motion } from "framer-motion";
import { ExternalLink, LogIn, MousePointerClick, Radio } from "lucide-react";
import Image from "next/image";

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
            Plataforma OnTime
          </div>
          <button
            type="button"
            onClick={() => openPlatformWithLogin({ target: "popup" })}
            className="flex items-center gap-1 text-xs font-semibold text-accent-dark transition-colors hover:text-accent"
          >
            Tela cheia
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => openPlatformWithLogin({ target: "popup" })}
          className="group relative block w-full cursor-pointer text-left"
          aria-label="Acessar plataforma com login automático de demonstração"
        >
          <Image
            src="/plataforma-mapa.png"
            alt="Mapa da Plataforma OnTime com rastreamento em tempo real"
            width={1200}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />

          <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/25" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <motion.div
              className="flex flex-col items-center gap-3 rounded-sm border-2 border-white/30 bg-navy/75 px-6 py-5 text-center shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:border-accent/50 group-hover:bg-navy/85"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-accent text-black shadow-lg shadow-accent/40">
                <LogIn className="h-7 w-7" />
              </div>
              <div>
                <p className="text-base font-bold text-white sm:text-lg">
                  Acessar plataforma
                </p>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  Login automático na demonstração
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-black">
                <MousePointerClick className="h-4 w-4" />
                Entrar agora
              </span>
            </motion.div>
          </div>
        </button>
      </motion.div>

      <p className="mt-3 text-center text-xs text-muted">
        Abre{" "}
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent-dark underline-offset-2 hover:underline"
        >
          ontimetracker.com.br
        </a>{" "}
        já logado com a conta de demonstração.
      </p>
    </div>
  );
}
