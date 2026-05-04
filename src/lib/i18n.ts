export type Locale = "fr" | "en";

export function getLocale(pathname: string | null): Locale {
  if (!pathname) return "fr";
  return pathname.startsWith("/en") ? "en" : "fr";
}

export function localePath(locale: Locale, path: string): string {
  // path always starts with "/"
  if (locale === "en") {
    if (path === "/") return "/en";
    return "/en" + path;
  }
  return path;
}
