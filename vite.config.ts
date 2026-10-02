import { existsSync } from "node:fs";
import { varlockVitePlugin } from "@varlock/vite-integration";
import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const inDocker = existsSync("/.dockerenv");

const config: UserConfig = {
  plugins: [varlockVitePlugin(), sveltekit()],
  css: { devSourcemap: true },
  server: inDocker
    ? { host: true, watch: { usePolling: true, interval: 1000 } }
    : undefined,
};

export default config;
