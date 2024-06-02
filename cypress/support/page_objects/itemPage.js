import BasePage from './basePage';

const SECOND_ITEM = ':nth-child(2) > .multi--modalContext--1Hxqhwi > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .multi--shopCart--darm7xs > .image--wrapper--1E-TZ1I > .image--icon--HQGC-D_'
const BUY_BUTTON = '.action--stickyWrap--ZKtL0mk > .comet-v2-btn > span';

class ItemPage extends BasePage {

    checkItemAvailable()  {
        cy.get(SECOND_ITEM).click();
        this.clickElement(BUY_BUTTON, 'Unable to click button');
    }
}

export default ItemPage