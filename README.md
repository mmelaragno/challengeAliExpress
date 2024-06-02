# challenge AliExpress

## Objective
The purpose of this project is to demonstrate automation skills by completing a code test. The test involves automating the following scenario:

"As a customer, we want to see if the second item from the second results page when searching for "instax mini" on AliExpress has at least 1 item available for purchase."

## Technologies Used
- **JavaScript**
- **Cypress**
- **IDE**: Aqua 2024.1 EAP (https://www.jetbrains.com/es-es/aqua/download)
- **Design Pattern**: Page Object Model (POM)
- **Reporting**: Mocha and Mochawesome

## Cypress Installation

 **Install Cypress**: Run the following command in your terminal to install Cypress as a development dependency:
   ```sh ```
   npm install cypress --save-dev
     ```sh ```
   cypress open
   

## Running the Tests
To execute the tests and generate a report, run the following command:

```sh ```
cypress run 

## Generating Reports
This project uses Mocha and Mochawesome to generate test reports. After running the tests with cypress run, the report will be generated in the cypress/reports directory.

## Project Structure
- **cypress/**
  - **e2e/**
    - **integration/**
      - **testSearchProduct.cy.js**: Contains the main test case.
    - **fixtures/**: Contains test data.
    - - **reports/**: Contains reports.
    - **screenshots/**: Contains screenshots taken during tests.
  - **support/**
    - **page_objects/**: Contains page object models following the Page Object Model (POM) pattern.
      - **basePage.js**
      - **cartPage.js**
      - **homePage.js**
      - **itemPage.js**
    - **commands.js**: Custom Cypress commands.
    - **e2e.js**: Cypress support configuration.
- **node_modules/**: Library dependencies.
- **.gitignore**: Specifies files to be ignored by git.
- **cypress.config.js**: Cypress configuration file.
- **package.json**: Project metadata and dependencies.
- **package-lock.json**: Locked versions of project dependencies.
- **README.md**: Project documentation (this file).

# Design Decisions
### Constants Outside the Class
In this project, constants such as locators are defined outside the class for several reasons:

- **Simplicity**: The structure of the code is more straightforward and easier to read.
- **Reusability**: Constants can be reused across multiple classes or files, promoting modularity.
- **Maintainability**: Having a central location for constants makes it easier to update them if the selectors change.
  
## Verification Method
Due to the unavailability of direct stock information for items on AliExpress, the verification of the item's availability was conducted by attempting a purchase and checking if the "pay" button is available in the shopping cart. This ensures that the item can be added to the cart and is available for purchase.

### Test Case
The main test case is located in `cypress/integration/testSearchProduct.cy.js` and follows these steps:

1. Navigate to AliExpress home page.
2. Perform a search for "instax mini".
3. Navigate to the second results page.
4. Verify if the second item on the page has at least 1 item available for purchase by adding it to the cart
5. Checking for the "pay" button.

## Conclusion
This project demonstrates the simplicity and effectiveness of using Cypress for automated testing. With Cypress, writing and executing tests becomes straightforward, allowing for efficient verification of product availability on e-commerce websites. The detailed commits provide insight into the thought process and development steps, showcasing how Cypress can streamline the testing process.



