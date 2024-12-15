# cucumber-playwright-fw


### Steps 1. Clone the Repo
git clone https://github.com/ADennis450/cucumber-playwright-fw.git

### Steps 2. Install Dependencies
npm install

### Steps 3 Optional. Get the Cucumber Extension
If using VS Code it's recommended that you get the official cucumber extension for gherkin syntax highlighting and step autocompletion
https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official

Adjust cucumber settings to include the following configurations:

```
{
    "typescript.updateImportsOnFileMove.enabled": "always",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "cucumber.glue": [
        "src/test/**/*.ts"
    ],
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "cucumber.features": [
        
        "src/test/**/*.feature",
    ]
} 
```

### Steps 4. Run a test
(Run locally)
```
npx cross-env ENV={env} cucumber-js --tags "@{tagName}"
```

(Run via Docker Container)
 ```
 docker run --rm {container-name} npx cross-env ENV={env} cucumber-js --tags "@{tagName}"
 ```

### Steps 5. Generate a cucumber test report
npx ts-node generate-report.ts