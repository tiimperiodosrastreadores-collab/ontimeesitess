import { navLinks, PLATFORM_URL } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer>
      <div className="border-t border-accent/15 bg-ice">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div>
              <Logo href="#inicio" size="large" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted text-justify">
                Plataforma completa de rastreamento veicular para empresas e
                gestores de frota.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
                Links rápidos
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks
                  .filter((link) => !link.external)
                  .map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-accent-dark"
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
                    className="text-sm text-muted transition-colors hover:text-accent-dark"
                  >
                    Plataforma
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
                Acesso
              </h3>
              <p className="mt-4 text-sm text-muted text-justify">
                Entre na plataforma e comece a monitorar sua frota agora.
              </p>
              <div className="mt-4">
              <Button href={PLATFORM_URL} size="sm" external>
                Acessar Plataforma
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-8">
        <p className="text-center text-sm text-muted">
          Plataforma OnTime © 2026. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
