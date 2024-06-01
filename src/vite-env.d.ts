/// <reference types="vite/client" />

declare module 'vite' {
  interface ServerOptions {
    mimeTypes?: Record<string, string[]>;
  }
}