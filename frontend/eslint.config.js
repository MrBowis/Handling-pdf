import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";

export default {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },

  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }], // Prohíbe console.log, permite console.warn y console.error
    eqeqeq: ["error", "always"], // Obliga a usar comparación estricta === y !==
    camelcase: ["error", { properties: "always" }], // Forzar camelCase en variables y propiedades
    "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }], // Marca variables no usadas (excluye variables que empiezan con mayúscula o _)
    quotes: ["error", "single"], // Forzar uso de comillas simples
    semi: ["error", "always"], // Forzar punto y coma
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
