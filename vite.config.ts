import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer"; // Import the Visualizer plugin

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({ open: true, gzipSize: true }), // Configure the Visualizer plugin
        // ... other Rollup plugins ...
      ],
    },
  },
});
