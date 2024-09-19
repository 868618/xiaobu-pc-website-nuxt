// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  devtools: { enabled: true },

  devServer: {
    port: 8800,
  },

  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt", "@nuxtjs/i18n"],

  tailwindcss: {
    viewer: false,
  },

  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5566",
          changeOrigin: true,

          // configure() {
          //   console.log("AT-[ configure 进入到代理器里 xxxxxx &&&&&********** ]");
          // },
        },
      },
    },
  },
});
