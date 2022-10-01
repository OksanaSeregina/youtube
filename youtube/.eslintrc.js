module.export = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.json",
          "tsconfig.app.json",
          "tsconfig.spec.json",
          "e2e/tsconfig.json",
        ],
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      extends: [
        "airbnb",
        "airbnb-typescript/base",
        "plugin:@angular-eslint/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "max-len": ["error", 140],
        "import/prefer-default-export": "off",
        "no-console": "warn",
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
      },
    },
  ],
};
