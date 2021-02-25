module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": 0,
  }
};
