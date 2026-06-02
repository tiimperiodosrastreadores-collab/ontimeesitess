import { navLinks, PLATFORM_URL } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Footer() {
  const quickLinks = navLinks.filter((link) => !link.external);

  return (
    <footer className="border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <Logo href="#inicio" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Plataforma completa de rastreamento veicular para empresas e
              gestores de frota.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  Plataforma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Acesso
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Entre na plataforma e comece a monitorar sua frota agora.
            </p>
            <div className="mt-4">
              <Button href={PLATFORM_URL} size="sm" external>
                Acessar Plataforma
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-500">
            OnTime Tracker © 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
