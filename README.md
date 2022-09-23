<h1 align="center">Vuestro 🚀</h1>

<p align="center">
  An opinionated Astro starter template with Vue, TailwindCSS and DaisyUI integration.
</p>

## 💫 Features

* 🚀 [Astro](https://astro.build/) - build faster websites
* ✨ [Vue](https://vuejs.org/) - the progressive JavaScript framework
* 🎨 [TailwindCSS](https://tailwindcss.com) - utility-first CSS framework
* 🌼 [DaisyUI](https://daisyui.com/) - the most popular, free and open-source Tailwind CSS component library
* 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)
* 🧰 [VueUse](https://github.com/vueuse/vueuse) - collection of essential Vue composition utilities
* ⚖️ ESlint
* 🦾 Typescript, of course

## ✨ Astro Integrations

* [Vue](https://docs.astro.build/en/guides/integrations-guide/vue/) - server-side rendering and client-side hydration for Vue 3 components
* [TailwindCSS](https://docs.astro.build/en/guides/integrations-guide/tailwind/) - utility class support for `.astro` files

## 💻 Try it now!

### GitHub template

[Create a repo from this template on GitHub](https://github.com/lstoeferle/vuestro/generate)

### Clone 

If you prefer to do it manually with a cleaner git history

```bash
npx degit lstoeferle/vuestro my-astro-app
cd my-astro-app
yarn install
```

## 🗂 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).