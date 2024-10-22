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
  [module.hugoVersion]
    extended = true
    min = "0.134.1"
```

You can use all configurations and features of all included theme components.

## Components

- [FixIt](https://github.com/hugo-fixit/FixIt)
- [cmpt-mdevtools](https://github.com/hugo-fixit/cmpt-mdevtools)
- [component-projects](https://github.com/hugo-fixit/component-projects)
- [hugo-json-feed](https://github.com/hugo-fixit/hugo-json-feed)
- [shortcode-caniuse](https://github.com/hugo-fixit/shortcode-caniuse)
- [shortcode-docs-bookmark](https://github.com/hugo-fixit/shortcode-docs-bookmark)
- [shortcode-rewards](https://github.com/hugo-fixit/shortcode-rewards)
