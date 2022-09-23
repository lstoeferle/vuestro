import { defineConfig } from 'astro/config'
import Vue from "@astrojs/vue"
import Icons from "unplugin-icons/vite"
import Tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [
      Vue(),
      Tailwind()
  ],
  vite: {
    plugins: [
      Icons({autoInstall: true, compiler: 'vue3'}),
    ]
  }
})
