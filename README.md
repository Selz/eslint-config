[ESLint](http://eslint.org/) configurations for Selz JavaScript projects.

# Using the package

This package is hosted on GitHub Packages rather than npm, so you need to configure npm to fetch it from the GitHub registry:

```
@selz:registry=https://npm.pkg.github.com/
```

# ES6

`.eslintrc`:

```javascript
{
    "extends": "@selz/eslint-config/es6"
}
```

# React

`.eslintrc`:

```javascript
{
    "extends": "@selz/eslint-config/react"
}
```

# Publishing

This is a private [GitHub Package](https://github.com/features/packages). You need to:

1. [Setup npm for GitHub Packages](https://github.com/Selz/Documentation/blob/master/Frontend/setting-up-profiles.md#github-packages).
2. Then run `npm publish` as normal.
