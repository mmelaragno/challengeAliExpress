class BasePage {
    clickElement(locator, errorMessage) {
        cy.get(locator).should('exist', errorMessage).click();
    }

    typeText(locator, text, errorMessage) {
        cy.get(locator).should('exist', errorMessage).clear().type(text);
    }

    assertElementExists(locator, errorMessage) {
        cy.get(locator, { timeout: 50000 }).should('exist', errorMessage);
    }

    assertButtons(locator, errorMessage) {
        cy.get(locator, { timeout: 50000 }).should('exist', errorMessage)
            .and('be.visible', errorMessage).and('be.enabled', errorMessage);
    }
}

export default BasePage;
