# FixIt Bundle

🌲 Include FixIt core theme and every FixIt theme components in one bundle component.

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

## References

- [FixIt - Theme for Hugo](https://fixit.lruihao.cn/)
