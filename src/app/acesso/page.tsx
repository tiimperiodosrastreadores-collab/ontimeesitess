"use client";

import { openPlatformWithLogin } from "@/lib/platformAccess";
import { useEffect } from "react";

export default function AcessoPage() {
  useEffect(() => {
    openPlatformWithLogin({ target: "sameTab" });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-ice px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />
        <p className="text-lg font-semibold text-navy">Entrando na Plataforma OnTime...</p>
        <p className="mt-2 text-sm text-muted">Aguarde, você será redirecionado automaticamente.</p>
      </div>
    </main>
  );
}
