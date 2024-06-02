// cypress/support/page_objects/homePage.js
import BasePage from './basePage';

const SEARCH_INPUT = '#search-words';
const SEARCH_BUTTON = '.search--submit--2VTbd-T';
const PAGINATION = '.comet-pagination-item-2 > a';

class HomePage extends BasePage {
    searchProduct(text) {
        this.assertElementExists(SEARCH_INPUT,'No search input button found');
        this.typeText(SEARCH_INPUT, text,'Unable to enter text');
    }

    searchSubmit() {
        this.assertElementExists(SEARCH_BUTTON,'No search button found');
        this.clickElement(SEARCH_BUTTON,'Unable to click button ');
    }

    navigateToPage(page) {
        this.assertElementExists(PAGINATION,'No pagination found');
        cy.get(PAGINATION).contains(page).click();
    }
}

export default HomePage;
