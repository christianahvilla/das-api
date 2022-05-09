module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  "rules": {
        // windows linebreaks when not in production environment
        "linebreak-style": ["error", "unix" ]
    }
};
