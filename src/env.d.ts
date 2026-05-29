/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __updateNavLastY?: (y: number) => void;
  __loadGA4?: () => void;
  __GA4_LOADED__?: boolean;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
