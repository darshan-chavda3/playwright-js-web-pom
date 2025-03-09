# Playwright Page Object Model with JavaScript

This repository demonstrates the implementation of the Page Object Model (POM) design pattern with Playwright. This project is designed to provide a robust and maintainable testing framework for web applications using Playwright and JavaScript, with a focus on the Page Object Model pattern. The site under test is [Swag Labs](https://www.saucedemo.com) , a demo eCommerce store.

## Installation
Before following the steps given below, please ensure that npm and node are installed on your machine.
- **Step1:** Install Playwright's latest version `npm init playwright@latest`
- **Step2:** Install Playwright supported browsers `npx playwright install`

## Execution
- Run all the test cases from the "./tests" folder
  ```bash
  npm run test
  ```
- Run test cases for a specific file
  ```bash
  npm run test {file-name.spec.ts}
  ```
- Run test cases in headed mode
  ```bash
  npm run test -- --headed
  ```
- Run test cases using tag
  ```bash
  npm run test -- --grep "{@tag-name}"
  ```
- Run test cases with a specific browser
  ```bash
  npm run test -- --project {browser-name}
  ```