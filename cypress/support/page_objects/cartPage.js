import BasePage from './basePage';

const CART_BUTTON = '.shop-cart--responsive--NnGUleD > .shop-cart--number--axE62FE';
const PAY_BUTTON = '.cart-summary > .comet-v2-btn';


class CartPage extends BasePage {

    goCart()  {
        this.clickElement(CART_BUTTON, 'Shopping cart button not found');
        this.assertButtons(PAY_BUTTON,'No payment button found on the shopping cart page');
    }
}

export default CartPage