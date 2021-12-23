import {Given, Then} from "cypress-cucumber-preprocessor/steps"

Given('I search {string}', (keyword: string) => {
    cy.get("[aria-label='Search']").type(`${keyword}{enter}`);
})
