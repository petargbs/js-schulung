/**
 * Test 08 - Shopping cart
 */

var shoppingCart = [];

var buy = function(product) {
  shoppingCart.push(product);
};

/*
  Calculate taxes and filter products bought
*/
var checkout = function(products) {
  return products.filter(function(item) {
    return item.price && item.name;
  }).filter(function(item) {
    return (!item.code || item.code === '1337');
  }).map(function(item) {
    item.tax = item.price * 0.19;
    return item;
  }).reduce(function(state, next) {
    state.sum += next.price;
    state.products.push(next.name);
    state.tax += next.tax;
    return state;
  }, { // return invoice object back
    sum: 0,
    products: ['pen'],
    tax: 0
  });
}

buy({
    price: 80,
    name: 'Handy'
  });
buy({
    price: 100,
    name: 'Computer'
  });
buy({
    price: 5,
    name: 'Keyboard',
    quantity: 100
  });
buy({
    price: 55,
    name: 'TV'
  });
buy({
  price: -10,
  name: 'Voucher',
  code: '1337'
});

var invoice = checkout(shoppingCart);
console.log(invoice);