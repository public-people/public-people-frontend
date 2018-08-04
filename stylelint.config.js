module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-prettier"
  ],
  plugins: ["stylelint-scss", "stylelint-no-unsupported-browser-features"],
  rules: {
    "no-empty-source": [
      true,
      {
        severity: "warning"
      }
    ],
    "value-list-comma-newline-after": null,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning"
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["for", "if", "return", "function", "mixin", "include"]
      }
    ],
    "unit-whitelist": ["rem", "em", "deg", "%", "vh", "vw"],
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always",
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ]
  }
};
