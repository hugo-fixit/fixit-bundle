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
- [FixIt v0.3.16](https://github.com/hugo-fixit/FixIt)
- [cmpt-flyfish v1.0.1](https://github.com/hugo-fixit/cmpt-flyfish)
- [cmpt-mdevtools v1.0.1](https://github.com/hugo-fixit/cmpt-mdevtools)
- [cmpt-translate v1.5.2](https://github.com/hugo-fixit/cmpt-translate)
- [component-projects v1.5.3](https://github.com/hugo-fixit/component-projects)
- [hugo-json-feed v1.0.2](https://github.com/hugo-fixit/hugo-json-feed)
- [shortcode-asciinema v1.0.0](https://github.com/hugo-fixit/shortcode-asciinema)
- [shortcode-caniuse v1.2.2](https://github.com/hugo-fixit/shortcode-caniuse)
- [shortcode-docs-bookmark v1.0.3](https://github.com/hugo-fixit/shortcode-docs-bookmark)
- [shortcode-mmt-netease v1.1.1](https://github.com/hugo-fixit/shortcode-mmt-netease)
- [shortcode-rewards v1.0.5](https://github.com/hugo-fixit/shortcode-rewards)
<!-- HUGO_FIXIT_COMPONENTS:END -->
