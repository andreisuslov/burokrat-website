import type { InitOptions } from "i18next";

export const i18nConfig = {
  // Supported languages.
  supportedLngs: ["ru", "en"],
  // Fallback language.
  fallbackLng: "ru",
  // Default namespace.
  defaultNS: "translations",
  // Disable suspense mode. (Recommended).
  react: {
    useSuspense: false,
  },
} satisfies InitOptions;
