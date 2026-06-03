"use client";

import { BRAND_NAME } from "@/lib/constants";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <AnimatedSection
      id="sobre"
      className="py-20 md:py-28 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Sobre a Plataforma
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              O que é a {BRAND_NAME}?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted text-justify">
              A {BRAND_NAME} é uma plataforma completa de monitoramento e
              rastreamento veicular desenvolvida para empresas, associações de
              proteção veicular, transportadoras e gestores de frota que precisam
              de informações precisas e atualizadas sobre seus veículos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted text-justify">
              Com uma interface intuitiva e recursos avançados, a plataforma
              oferece total controle operacional e segurança para seus clientes.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-2xl" />
              <div className="relative space-y-4 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50">
                {[
                  "Rastreamento GPS de alta precisão",
                  "Interface intuitiva e moderna",
                  "Suporte a múltiplos tipos de veículos",
                  "Relatórios e alertas em tempo real",
                  "Acesso via web e mobile",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-navy font-medium text-justify">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  );
}
