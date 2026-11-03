import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (stored === "light" || stored === "dark" || stored === "system") {
          return stored;
        }
      } catch {
        // Fallback if localStorage access is blocked
      }
    }
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (stored === "light" || stored === "dark") return stored;
      } catch {
        // Fallback
      }
      return getSystemTheme();
    }
    return "light";
  });

  // Apply theme to DOM and meta tag
  const applyTheme = useCallback((targetResolvedTheme: ResolvedTheme, activeTheme: Theme) => {
    if (typeof document === "undefined") return () => {};
    const root = document.documentElement;

    // Add temporary transitioning class for smooth color changes
    root.classList.add("theme-transitioning");

    if (targetResolvedTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // Update meta color-scheme
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute(
        "content",
        activeTheme === "system" ? "light dark" : targetResolvedTheme
      );
    }

    const timer = setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      const runUpdate = () => {
        setThemeState(newTheme);

        let nextResolved: ResolvedTheme;
        if (newTheme === "system") {
          try {
            localStorage.removeItem(STORAGE_KEY);
          } catch {}
          nextResolved = getSystemTheme();
        } else {
          try {
            localStorage.setItem(STORAGE_KEY, newTheme);
          } catch {}
          nextResolved = newTheme;
        }

        setResolvedTheme(nextResolved);
        applyTheme(nextResolved, newTheme);
      };

      // Support View Transitions API if available and user doesn't prefer reduced motion
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Type-safe check for View Transitions API
      const doc = document as unknown as { startViewTransition?: (cb: () => void) => void };
      if (typeof doc.startViewTransition === "function" && !prefersReducedMotion) {
        doc.startViewTransition(() => {
          runUpdate();
        });
      } else {
        runUpdate();
      }
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    const nextTheme: ResolvedTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [resolvedTheme, setTheme]);

  // Listen to OS system preference changes
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const nextResolved = e.matches ? "dark" : "light";
        setResolvedTheme(nextResolved);
        applyTheme(nextResolved, "system");
      }
    };

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const newStored = (e.newValue as Theme | null) ?? "system";
        setThemeState(newStored);
        const nextResolved =
          newStored === "system" ? getSystemTheme() : newStored;
        setResolvedTheme(nextResolved);
        applyTheme(nextResolved, newStored);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyTheme]);

  // Initial sync on mount
  useEffect(() => {
    const initialResolved = theme === "system" ? getSystemTheme() : theme;
    setResolvedTheme(initialResolved);
    applyTheme(initialResolved, theme);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
