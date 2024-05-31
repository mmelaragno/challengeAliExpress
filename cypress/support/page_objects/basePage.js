class BasePage {


    clickElement(locator)  {
    let element = cy.get(locator).should('exist');
    element.click();
}

   typeText(locator, text)  {
    cy.get(locator).clear().type(text);
}
assertElementExists(locator){
    cy.get(locator, { timeout: 50000 }).should('exist');
}

containsElement(locator, text){
    cy.get(locator).contains(text).should('be.visible');
}

assertButtons(locator)  {
    cy.get(locator, { timeout: 50000 }).should('exist').and('be.visible').and('be.enabled');
}

}

export default BasePage