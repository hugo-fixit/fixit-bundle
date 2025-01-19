# FixIt Bundle

👉 English README | [简体中文说明](/README.md)

🌲 Bundles the FixIt core theme and all hugo-fixit components into a single component.

## Install Component

First make sure that your project itself is a [Hugo module](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module).

Then add this theme component to your `hugo.toml` configuration file:

```toml
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/fixit-bundle"
```

On the first start of Hugo it will download the required files.

To update to the latest version of the module run:

```bash
hugo mod get -u
hugo mod tidy
```

## Usage

Add the following to your `hugo.toml`:

```toml
[params]
  # ...

[outputs]
  _merge = "shallow"

[taxonomies]
  _merge = "shallow"

[markup]
  _merge = "shallow"

[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/fixit-bundle"
```

You can use all configurations and features of all included theme components.

## Component List

<!-- HUGO_FIXIT_COMPONENTS:START -->
- [cmpt-flyfish](https://github.com/hugo-fixit/cmpt-flyfish)\
 🐟 一个 canvas 实现的小鱼游动动画效果。
- [cmpt-mdevtools](https://github.com/hugo-fixit/cmpt-mdevtools)\
 Mobile devtools component powered by vConsole and eruda.
- [cmpt-translate](https://github.com/hugo-fixit/cmpt-translate)\
 🌐 A component for site automatic translation.
- [component-projects](https://github.com/hugo-fixit/component-projects)\
 🐙 Display your GitHub projects in the FixIt theme and generate blog posts from readme.
- [hugo-atom-feed](https://github.com/hugo-fixit/hugo-atom-feed)\
 Hugo theme component for ATOM feed custom Output Format.
- [hugo-json-feed](https://github.com/hugo-fixit/hugo-json-feed)\
 Hugo theme component for JSON feed custom Output Format.
- [shortcode-asciinema](https://github.com/hugo-fixit/shortcode-asciinema)\
 A Hugo theme component with asciinema-embed shortcode.
- [shortcode-caniuse](https://github.com/hugo-fixit/shortcode-caniuse)\
 一个含有 caniuse shortcode 的 Hugo 主题组件。
- [shortcode-docs-bookmark](https://github.com/hugo-fixit/shortcode-docs-bookmark)\
 🔖 Embed bookmark of FixIt Docs.
- [shortcode-mmt-netease](https://github.com/hugo-fixit/shortcode-mmt-netease)\
 🎶 一个含有网易云随机评论 shortcode 的 Hugo 主题组件。
- [shortcode-rewards](https://github.com/hugo-fixit/shortcode-rewards)\
 A Hugo theme component with reward-log or sponsor-log shortcode.
<!-- HUGO_FIXIT_COMPONENTS:END -->
