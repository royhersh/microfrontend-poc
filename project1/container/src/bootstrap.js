import { mount as mountProduct } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

const productsEl = document.querySelector('#my-products');
const cartEl = document.querySelector('#my-cart');
mountProduct(productsEl);
mountCart(cartEl);
console.log('container');