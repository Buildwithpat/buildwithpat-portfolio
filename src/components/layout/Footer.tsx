import { SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-line-subtle px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-ink-3 md:flex-row">
        <p>
          © 2026 <span className="text-ink-1">{SITE.name}</span>
        </p>
        <p>Built with dedication & zero tech trends 🛠️</p>
      </div>
    </footer>
  );
}
