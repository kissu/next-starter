# Good workflow to work with Next

## Bundler

Next v12 is using [SWC as a bundler](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler), so the usage of [Vite](https://vitejs.dev/) is not needed. It's fast enough as by default.

## PNPM

You do love:
- not having a bizzilion of _node_modules_ eating your tasty NVME SSD
- having to only download the packages needed and not download a damn `axios` for the 324th time on your machine
- monorepos

Alright, then please just use [PNPM](https://pnpm.io/) and treat yourself to a nice, fast, and efficient package manager. The transition is not difficult, trust us.

PS: if you ever have an issue, dumping the following into a `.npmrc` file should be enough:

```bash
# https://pnpm.io/npmrc#shamefully-hoist
shamefully-hoist=true
```

Btw, it is already configured here and working like a charm. Heh, how do you like modern tooling? 😉

## ESlint

For obvious reasons, using ESlint is a must have. The configuration is based on Next.js' [default configuration](https://nextjs.org/docs/basic-features/eslint). `next/core-web-vitals` being the recommended way of doing things.

PS: I've dumped one of my minimal configuration into the `.vscode` directory to have the whole linting working, either let it in the project (should be enough) or append it to your own code editor settings.

Want to have a quick view of your actual code's state? Check it with `pnpm lint:js`. Otherwise, code, commit and the project will tell you by itself if you're missing something via `pnpm lint:js:fix` (if possible).

PS: you **LOVE** being yelled at? You'll enjoy this [extension](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens), for real. 😍

You'll get this kind of error if something is wrong with your ESlint

![](https://i.imgur.com/MO3nOwB.png)

## Prettier

On top of providing an analytical view of the code, Prettier is a great tool to format the code and avoid bike-shedding around formatting. On top of it, it helps you win some time overall! I've set some of my defaults but feel free to discuss this with your own team and define a [set of preferences](https://prettier.io/docs/en/options.html) that everybody agrees on.

Also, **DO NOT** install the Prettier extension in your VScode. Simply the ESlint one, indeed the Prettier formatting is bundled inside of ESlint's configuration already. Also, not everybody is using VScode...

PS: if you edit the `.prettierrc` file but still don't see any changes applied, feel free to restart the server aka `Commande Palette >> ESLINT: restart ESLint Server` and it should then work fine.

## Git flow

Want to make clean stuff? Alright, there is a template in the `.github` directory that will be used by default for any of your future Pull Requests. (you can of course also find a Gitlab variant online if needed)

## Auto-importing optimized icons

You can read this [4-parts blog article](https://antfu.me/posts/icons-in-pure-css) on how to setup some agnostic icons in your project. I'm not exactly sure but you could maybe subscribe to [this issue](https://github.com/antfu/unplugin-icons/issues/103) and see how to set it up with the actual `next.config.js` file. Could be really useful to just aim at [Icons.js](https://icones.js.org/) and paste an icon without messing around with too much libs etc...

## Stylelint

Linting your CSS can look like it's overkill, actually it matters more than you can think. Especially when you do have a lot of CSS in your project. Not sure how to setup it actually, but a quick look into [the documentation](https://stylelint.io/) could maybe help.

## Fixxxeuh, blblblblblbl

👆 Sounds like a commit written by somebody drunk? Hehe, put a stop 🛑 to this. [`commitlint`](https://commitlint.js.org/#/reference-rules) can help you with this, aim at `commitlint.config.js` to find a decent-looking configuration that will require a bit more effort from your team, into writing commits with more meaning.

PS: it does not stop you from squashing your commits at the end of an approved PR, of course.

PS: if you're a bad boii, you'll gonna `--no-verify` still, we do see you there. 😈

This is how an error of this kind looks like:

![](https://i.imgur.com/RdnQTte.png)

## Husky

You do [like dogs](https://github.com/typicode/husky)  🐶 and git hooks to allow people to work with you without asking them to use a specific code editor? Make the changes at specific keys points, without putting to much pressure on your team's mind.

The configuration for this can be found in the `.husky` directory. Some tests could run locally before pushing remotely.

PS: not sure but you may need to run `pnpm prepare` for an initial setup (actually you should not, it's already done but I'm leaving it here in case it does not work).

## lint-staged

You'd like to run some scripts on freshly added git files rather than always linting your whole project? [lint-staged](https://github.com/okonet/lint-staged) will help you achieve exactly that.

The configuration is in the `package.json` file.

## Editorconfig

Simple yet powerful edit configuration. Gives some clear hints on the used conventions in this project.

## *Bonus*: UnoCSS

You can give a read to [this article](https://antfu.me/posts/reimagine-atomic-css) if you want to go even deeper than Tailwind JIT in terms of performance/speed.
