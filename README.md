# Cypress + Cucumber

This is a demo project based on Cypress and Cucumber.

---

## Install

```shell
npm i
```

## Run tests in headless mode

```shell
npm test
```

## Debug tests in Cypress UI

```shell
npm run cy:debug
```

## Tips

- All your feature files should be placed in `integration/features`
- The step files for all features should be placed in `integration/common`
- The step files for a specific feature should be placed in the folder with the same name next to the feature
- Check https://github.com/TheBrainFamily/cypress-cucumber-preprocessor for more configurations and usages