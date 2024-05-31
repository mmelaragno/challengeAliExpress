import HomePage from '../../support/page_objects/homePage';
import ItemPage from '../../support/page_objects/itemPage';
import CartPage from '../../support/page_objects/cartPage';


describe('AliExpress', () => {
    const homePage = new HomePage()
    const itemPage = new ItemPage()
    const cartPage = new CartPage()

    before(() => {
        cy.enterAliExpress();
    });

    it('Search for "instax mini" and check the second item on the second page', () => {
        const product = "instax mini"
        const page = "2"

        cy.acceptPromps();
        homePage.searchProduct(product)
        homePage.searchSubmit();
        homePage.navigateToPage(page);
        itemPage.checkItemAvailable();
        cartPage.goCart();
    });
});