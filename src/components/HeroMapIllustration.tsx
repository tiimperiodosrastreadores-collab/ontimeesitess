"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Radio, Truck } from "lucide-react";

const vehicles = [
  { x: 120, y: 180, label: "Caminhão", delay: 0 },
  { x: 280, y: 120, label: "Van", delay: 0.3 },
  { x: 420, y: 200, label: "Moto", delay: 0.6 },
  { x: 340, y: 280, label: "Carro", delay: 0.9 },
];

export function HeroMapIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-light/80 glow-accent">
        <svg
          viewBox="0 0 520 380"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="520" height="380" fill="url(#mapGrad)" />

          {/* Grid lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 32}
              x2="520"
              y2={i * 32}
              stroke="#334155"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}
          {Array.from({ length: 17 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 32}
              y1="0"
              x2={i * 32}
              y2="380"
              stroke="#334155"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}

          {/* Roads */}
          <path
            d="M 60 190 Q 160 160 260 190 T 460 170"
            fill="none"
            stroke="#475569"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M 100 80 L 100 320"
            fill="none"
            stroke="#475569"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M 380 60 L 380 340"
            fill="none"
            stroke="#475569"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Route path animated */}
          <motion.path
            d="M 120 180 Q 200 140 280 120 Q 360 100 420 200 Q 380 240 340 280"
            fill="none"
            stroke="url(#routeGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            filter="url(#glow)"
          />

          {/* Connection lines between vehicles */}
          <motion.line
            x1="120" y1="180" x2="280" y2="120"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.line
            x1="280" y1="120" x2="420" y2="200"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.line
            x1="420" y1="200" x2="340" y2="280"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />

          {/* Vehicle markers */}
          {vehicles.map((v) => (
            <g key={v.label}>
              <motion.circle
                cx={v.x}
                cy={v.y}
                r="24"
                fill="#22c55e"
                opacity="0.15"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2,
                  delay: v.delay + 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <motion.circle
                cx={v.x}
                cy={v.y}
                r="8"
                fill="#22c55e"
                stroke="#ffffff"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: v.delay + 0.8 }}
                filter="url(#glow)"
              />
            </g>
          ))}
        </svg>

        {/* Floating cards overlay */}
        <motion.div
          className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-navy/90 px-3 py-2 text-xs text-white backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Radio className="h-3.5 w-3.5 text-accent" />
          <span>4 veículos online</span>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-navy/90 px-3 py-2 text-xs text-white backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Navigation className="h-3.5 w-3.5 text-accent" />
          <span>Tempo real ativo</span>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-6 -translate-y-1/2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-black shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            GPS Ativo
          </div>
        </motion.div>
      </div>

      {/* Decorative icons */}
      <motion.div
        className="absolute -bottom-3 -left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-black shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Truck className="h-6 w-6" />
      </motion.div>
    </div>
  );
}
