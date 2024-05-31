import BasePage from './basePage';

const CART_BUTTON = '.shop-cart--responsive--NnGUleD > .shop-cart--number--axE62FE';
const PAY_BUTTON = '.cart-summary > .comet-v2-btn';


class CartPage extends BasePage {

goCart()  {
    this.clickElement(CART_BUTTON);
    this.assertButtons(PAY_BUTTON);
  }
}

export default CartPage