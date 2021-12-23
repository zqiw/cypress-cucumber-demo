import {Then} from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} on the page`, (keyword: string) => {
    cy.contains(keyword);
})
