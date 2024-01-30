// vite.config.ts
import react from "file:///Users/rodo/Code/LosDemas/signify-browser-extension/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///Users/rodo/Code/LosDemas/signify-browser-extension/node_modules/vite/dist/node/index.js";
import { crx } from "file:///Users/rodo/Code/LosDemas/signify-browser-extension/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import merge from "file:///Users/rodo/Code/LosDemas/signify-browser-extension/node_modules/lodash/merge.js";
import { nodePolyfills } from "file:///Users/rodo/Code/LosDemas/signify-browser-extension/node_modules/vite-plugin-node-polyfills/dist/index.js";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "Signify Browser Extension",
  version: "0.0.1",
  background: {
    service_worker: "src/pages/background/index.ts"
  },
  action: {
    default_icon: {
      "32": "public/32_keri_logo.png",
      "128": "public/128_keri_logo.png"
    }
  },
  icons: {
    "32": "public/32_keri_logo.png",
    "128": "public/128_keri_logo.png"
  },
  permissions: [
    "activeTab",
    "storage",
    "alarms",
    "scripting"
  ],
  content_scripts: [
    {
      matches: ["http://www.es.com/*"],
      run_at: "document_end",
      js: ["src/pages/content/index.tsx"],
      css: ["contentStyle.css"]
    }
  ],
  web_accessible_resources: [
    {
      resources: [
        "src/assets/img/128_keri_logo.png"
      ],
      matches: ["<all_urls>"]
    }
  ],
  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval'"
  },
  externally_connectable: {
    matches: ["<all_urls>"]
  }
};

// manifest.dev.json
var manifest_dev_default = {};

// package.json
var package_default = {
  name: "signify-browser-extension",
  displayName: "Polaris",
  version: "0.0.1",
  description: "Signify Browser Extension",
  license: "APACHE 2.0",
  repository: {
    type: "git",
    url: "https://github.com/weboftrust/signify-browser-extension.git"
  },
  scripts: {
    build: "vite build",
    dev: "nodemon"
  },
  type: "module",
  dependencies: {
    lodash: "^4.17.21",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "webextension-polyfill": "^0.10.0"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.21",
    "@types/chrome": "^0.0.237",
    "@types/lodash": "^4.14.197",
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/webextension-polyfill": "^0.10.0",
    "@typescript-eslint/eslint-plugin": "^5.49.0",
    "@typescript-eslint/parser": "^5.49.0",
    "@vitejs/plugin-react": "^4.2.1",
    autoprefixer: "^10.4.13",
    eslint: "^8.32.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.32.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "fs-extra": "^11.1.0",
    nodemon: "^2.0.20",
    postcss: "^8.4.21",
    "rollup-plugin-bundle-imports": "^1.5.1",
    "signify-ts": "https://github.com/WebOfTrust/signify-ts",
    tailwindcss: "^3.2.4",
    "ts-node": "^10.9.1",
    typescript: "^4.9.4",
    vite: "^4.5.1",
    "vite-plugin-node-polyfills": "^0.17.0"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/rodo/Code/LosDemas/signify-browser-extension";
var root = resolve(__vite_injected_original_dirname, "src");
var pagesDir = resolve(root, "pages");
var assetsDir = resolve(root, "assets");
var componentsDir = resolve(root, "components");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var publicDir = resolve(__vite_injected_original_dirname, "public");
var isDev = process.env.__DEV__ === "false";
var extensionManifest = {
  ...merge(manifest_default, isDev ? manifest_dev_default : {}),
  manifest_version: 3,
  name: isDev ? `DEV: ${package_default.displayName}` : package_default.displayName,
  description: package_default.description,
  version: package_default.version
};
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
      "@components": componentsDir
    }
  },
  plugins: [
    react(),
    crx(
      {
        manifest: extensionManifest,
        contentScripts: {
          injectCss: true
        }
      }
    ),
    nodePolyfills()
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcm9kby9Db2RlL0xvc0RlbWFzL3NpZ25pZnktYnJvd3Nlci1leHRlbnNpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yb2RvL0NvZGUvTG9zRGVtYXMvc2lnbmlmeS1icm93c2VyLWV4dGVuc2lvbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcm9kby9Db2RlL0xvc0RlbWFzL3NpZ25pZnktYnJvd3Nlci1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBjcngsIE1hbmlmZXN0VjNFeHBvcnQgfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZSc7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9tYW5pZmVzdC5qc29uJztcbmltcG9ydCBkZXZNYW5pZmVzdCBmcm9tICcuL21hbmlmZXN0LmRldi5qc29uJztcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG5jb25zdCByb290ID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKTtcbmNvbnN0IHBhZ2VzRGlyID0gcmVzb2x2ZShyb290LCAncGFnZXMnKTtcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgJ2Fzc2V0cycpO1xuY29uc3QgY29tcG9uZW50c0RpciA9IHJlc29sdmUocm9vdCwgJ2NvbXBvbmVudHMnKTtcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpO1xuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKTtcblxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5fX0RFVl9fID09PSAnZmFsc2UnO1xuXG5jb25zdCBleHRlbnNpb25NYW5pZmVzdCA9IHtcbiAgLi4ubWVyZ2UobWFuaWZlc3QsIGlzRGV2ID8gZGV2TWFuaWZlc3QgOiB7fSksXG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIG5hbWU6IGlzRGV2ID8gYERFVjogJHsgcGtnLmRpc3BsYXlOYW1lIH1gIDogcGtnLmRpc3BsYXlOYW1lLFxuICBkZXNjcmlwdGlvbjogcGtnLmRlc2NyaXB0aW9uLFxuICB2ZXJzaW9uOiBwa2cudmVyc2lvbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0BzcmMnOiByb290LFxuICAgICAgJ0Bhc3NldHMnOiBhc3NldHNEaXIsXG4gICAgICAnQHBhZ2VzJzogcGFnZXNEaXIsXG4gICAgICAnQGNvbXBvbmVudHMnOiBjb21wb25lbnRzRGlyLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNyeChcbiAgICAgIHtcbiAgICAgIG1hbmlmZXN0OiBleHRlbnNpb25NYW5pZmVzdCBhcyBNYW5pZmVzdFYzRXhwb3J0LFxuICAgICAgY29udGVudFNjcmlwdHM6IHtcbiAgICAgICAgaW5qZWN0Q3NzOiB0cnVlLFxuICAgICAgfVxuICAgIH1cbiAgICApLFxuICAgIG5vZGVQb2x5ZmlsbHMoKVxuICBdLFxuICBwdWJsaWNEaXIsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyLFxuICAgIHNvdXJjZW1hcDogaXNEZXYsXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICB9LFxufSk7XG4iLCAie1xuICBcIm1hbmlmZXN0X3ZlcnNpb25cIjogMyxcbiAgXCJuYW1lXCI6IFwiU2lnbmlmeSBCcm93c2VyIEV4dGVuc2lvblwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcImJhY2tncm91bmRcIjoge1xuICAgIFwic2VydmljZV93b3JrZXJcIjogXCJzcmMvcGFnZXMvYmFja2dyb3VuZC9pbmRleC50c1wiXG4gIH0sXG4gIFwiYWN0aW9uXCI6IHtcbiAgICBcImRlZmF1bHRfaWNvblwiOiB7XG4gICAgICBcIjMyXCI6IFwicHVibGljLzMyX2tlcmlfbG9nby5wbmdcIixcbiAgICAgIFwiMTI4XCI6IFwicHVibGljLzEyOF9rZXJpX2xvZ28ucG5nXCJcbiAgICB9XG4gIH0sXG4gIFwiaWNvbnNcIjoge1xuICAgIFwiMzJcIjogXCJwdWJsaWMvMzJfa2VyaV9sb2dvLnBuZ1wiLFxuICAgIFwiMTI4XCI6IFwicHVibGljLzEyOF9rZXJpX2xvZ28ucG5nXCJcbiAgfSxcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAgXCJhY3RpdmVUYWJcIixcbiAgICBcInN0b3JhZ2VcIixcbiAgICBcImFsYXJtc1wiLFxuICAgIFwic2NyaXB0aW5nXCJcbiAgXSxcbiAgXCJjb250ZW50X3NjcmlwdHNcIjogW1xuICAgIHtcbiAgICAgIFwibWF0Y2hlc1wiOiBbXCJodHRwOi8vd3d3LmVzLmNvbS8qXCJdLFxuICAgICAgXCJydW5fYXRcIjogXCJkb2N1bWVudF9lbmRcIixcbiAgICAgIFwianNcIjogW1wic3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXgudHN4XCJdLFxuICAgICAgXCJjc3NcIjogW1wiY29udGVudFN0eWxlLmNzc1wiXVxuICAgIH1cbiAgXSxcbiAgXCJ3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXNcIjogW1xuICAgIHtcbiAgICAgIFwicmVzb3VyY2VzXCI6IFtcbiAgICAgICAgXCJzcmMvYXNzZXRzL2ltZy8xMjhfa2VyaV9sb2dvLnBuZ1wiXG4gICAgICBdLFxuICAgICAgXCJtYXRjaGVzXCI6IFtcIjxhbGxfdXJscz5cIl1cbiAgICB9XG4gIF0sXG4gIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgIFwiZXh0ZW5zaW9uX3BhZ2VzXCI6IFwic2NyaXB0LXNyYyAnc2VsZicgJ3dhc20tdW5zYWZlLWV2YWwnXCJcbiAgfSxcbiAgXCJleHRlcm5hbGx5X2Nvbm5lY3RhYmxlXCI6IHtcbiAgICBcIm1hdGNoZXNcIjogW1wiPGFsbF91cmxzPlwiXVxuICB9XG59IiwgIntcblxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwic2lnbmlmeS1icm93c2VyLWV4dGVuc2lvblwiLFxuICBcImRpc3BsYXlOYW1lXCI6IFwiUG9sYXJpc1wiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2lnbmlmeSBCcm93c2VyIEV4dGVuc2lvblwiLFxuICBcImxpY2Vuc2VcIjogXCJBUEFDSEUgMi4wXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vd2Vib2Z0cnVzdC9zaWduaWZ5LWJyb3dzZXItZXh0ZW5zaW9uLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImRldlwiOiBcIm5vZGVtb25cIlxuICB9LFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibG9kYXNoXCI6IFwiXjQuMTcuMjFcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjcnhqcy92aXRlLXBsdWdpblwiOiBcIl4yLjAuMC1iZXRhLjIxXCIsXG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yMzdcIixcbiAgICBcIkB0eXBlcy9sb2Rhc2hcIjogXCJeNC4xNC4xOTdcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjE4LjExLjE4XCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMC4yN1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4wLjEwXCIsXG4gICAgXCJAdHlwZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNS40OS4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjUuNDkuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4yLjFcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjEzXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC4zMi4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjguNi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI3LjVcIixcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNi43LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuMy4wXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4xLjBcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMi4wLjIwXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4yMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1idW5kbGUtaW1wb3J0c1wiOiBcIl4xLjUuMVwiLFxuICAgIFwic2lnbmlmeS10c1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9XZWJPZlRydXN0L3NpZ25pZnktdHNcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuMi40XCIsXG4gICAgXCJ0cy1ub2RlXCI6IFwiXjEwLjkuMVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl40LjkuNFwiLFxuICAgIFwidml0ZVwiOiBcIl40LjUuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHNcIjogXCJeMC4xNy4wXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxPQUFPLFdBQVc7QUFDN1YsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsV0FBNkI7QUFDdEMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMscUJBQXFCOzs7QUNMOUI7QUFBQSxFQUNFLGtCQUFvQjtBQUFBLEVBQ3BCLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFlBQWM7QUFBQSxJQUNaLGdCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxRQUFVO0FBQUEsSUFDUixjQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQjtBQUFBLE1BQ0UsU0FBVyxDQUFDLHFCQUFxQjtBQUFBLE1BQ2pDLFFBQVU7QUFBQSxNQUNWLElBQU0sQ0FBQyw2QkFBNkI7QUFBQSxNQUNwQyxLQUFPLENBQUMsa0JBQWtCO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQUEsRUFDQSwwQkFBNEI7QUFBQSxJQUMxQjtBQUFBLE1BQ0UsV0FBYTtBQUFBLFFB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
