# FixIt Bundle

👉 简体中文说明 | [English README](/README.en.md)

🌲 将 FixIt 核心主题和所有 hugo-fixit 组件捆绑成一个单一组件。

## 安装组件

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后在你的 `hugo.toml` 配置文件中添加这个主题组件：

```toml
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/fixit-bundle"
```

在 Hugo 首次启动时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

## 使用方法

在你的 `hugo.toml` 中添加以下内容：

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

你可以使用所有包含的主题组件的配置和功能。

## 组件

- [FixIt](https://github.com/hugo-fixit/FixIt)
- [cmpt-flyfish](https://github.com/hugo-fixit/cmpt-flyfish)
- [cmpt-mdevtools](https://github.com/hugo-fixit/cmpt-mdevtools)
- [cmpt-mdevtools](https://github.com/hugo-fixit/cmpt-translate)
- [component-projects](https://github.com/hugo-fixit/component-projects)
- [hugo-json-feed](https://github.com/hugo-fixit/hugo-json-feed)
- [shortcode-caniuse](https://github.com/hugo-fixit/shortcode-caniuse)
- [shortcode-docs-bookmark](https://github.com/hugo-fixit/shortcode-docs-bookmark)
- [shortcode-mmt-netease](https://github.com/hugo-fixit/shortcode-mmt-netease)
- [shortcode-rewards](https://github.com/hugo-fixit/shortcode-rewards)
