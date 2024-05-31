// cypress/support/page_objects/homePage.js
import BasePage from './basePage';

const SEARCH_INPUT = '#search-words';
const SEARCH_BUTTON = '.search--submit--2VTbd-T';
const PAGINATION = '.comet-pagination-item-2 > a';

class HomePage extends BasePage {
    searchProduct(text) {
        this.assertElementExists(SEARCH_INPUT);
        this.typeText(SEARCH_INPUT, text);
    }

    searchSubmit() {
        this.assertElementExists(SEARCH_BUTTON);
        this.clickElement(SEARCH_BUTTON);
    }

    navigateToPage(page) {
        this.assertElementExists(PAGINATION);
        cy.get(PAGINATION).contains(page).click();
    }
}

export default HomePage;
