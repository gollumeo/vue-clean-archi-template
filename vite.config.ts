import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            '@application': path.resolve(__dirname, './src/Application'),
            '@domain': path.resolve(__dirname, './src/Domain'),
            '@framework': path.resolve(__dirname, './src/Framework'),
            '@infrastructure': path.resolve(__dirname, './src/Infrastructure'),
            '@persistence': path.resolve(__dirname, './src/Persistence'),
            '@presentation': path.resolve(__dirname, './src/Presentation'),
            '@cli': path.resolve(__dirname, './src/Presentation/CLI'),
            '@tests': path.resolve(__dirname, './src/Presentation/Tests'),
        },
    },
} as UserConfig);
