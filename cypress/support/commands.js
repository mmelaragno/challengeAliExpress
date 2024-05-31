// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let url = "https://www.aliexpress.com";

Cypress.Commands.add('enterAliExpress', () => {
    cy.clearCookies();
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
            return false; // Prevents Cypress from failing the test
        }
    });
    cy.visit(url);
});

Cypress.Commands.add('acceptPromps', () => {
    cy.get('body').then((body) => {
        if (body.find('.next-dialog-close').length > 0) {
            cy.get('.next-dialog-close').click();
        }
    });
});