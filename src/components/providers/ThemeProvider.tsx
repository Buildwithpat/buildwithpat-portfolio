"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (originEl?: HTMLElement | null) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "bwp-theme";

function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The inline script in layout.tsx already applied the class before paint,
  // so reading it here at init time keeps React state and the DOM in sync
  // without an extra render-triggering effect.
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof document === "undefined"
      ? "dark"
      : document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
  );

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyThemeClass(next);
  }, []);

  const toggleTheme = useCallback(
    (originEl?: HTMLElement | null) => {
      // Read the DOM directly rather than closing over `theme` — some
      // callers (e.g. the command palette, which registers its actions
      // only once on mount) hold a stale closure of this function, and a
      // React-state-derived `next` would then always compute the same
      // flip. The DOM class is always current, so this stays correct no
      // matter how stale the calling closure is.
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const next: Theme = isCurrentlyDark ? "light" : "dark";

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (originEl) {
        const rect = originEl.getBoundingClientRect();
        document.documentElement.style.setProperty(
          "--theme-toggle-x",
          `${rect.left + rect.width / 2}px`,
        );
        document.documentElement.style.setProperty(
          "--theme-toggle-y",
          `${rect.top + rect.height / 2}px`,
        );
      }

      const supportsViewTransitions =
        !reduceMotion && "startViewTransition" in document;

      if (supportsViewTransitions) {
        (
          document as Document & {
            startViewTransition: (cb: () => void) => void;
          }
        ).startViewTransition(() => setTheme(next));
      } else {
        setTheme(next);
      }
    },
    [setTheme],
  );

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Dark is the default on first visit — we intentionally ignore the OS
// color-scheme preference and only honor an explicit stored choice.
// The <html> tag is already server-rendered with class="dark" (see
// layout.tsx), so there is zero flash on the very first load with no
// stored preference at all. This script's only job is to REMOVE the
// class if the visitor previously chose light — it runs before paint
// (next/script beforeInteractive), so that removal is also flash-free.
export const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    if (stored === 'light') document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`;

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
