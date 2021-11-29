import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";
const pathSrc = path.resolve(__dirname, "./src");

export default ({ command }) => ({
    base: command === "serve" ? "" : "/build/",
    publicDir: "fake_dir",
    build: {
        outDir: "public/build",
        rollupOptions: {
            input: [
                "resources/js/app.js",
                "resources/css/app.css",
            ],
        },
    },
    server: {
        strictPort: true,
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/src/"),
        },
    },
    plugins: [createVuePlugin()],
});
