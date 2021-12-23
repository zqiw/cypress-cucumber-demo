import {Given} from "cypress-cucumber-preprocessor/steps"

Given('I open Google page', () => {
    cy.clearCookies()
    cy.visit(`https://www.google.com/`)
})
