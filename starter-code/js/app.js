'use strict';

const cartKey = 'cart'

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // DONE: Fill in this instance method to create a new CartItem and add it to this.items
  let newItem = new CartItem(product,quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  // use pseudo-code
  // get all things in the cart
  // stringify the array
  const stringifiedCart = JSON.stringify(this.items);
  localStorage.setItem(cartKey, stringifiedCart);
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  /// ----------------- try googling splice ------------- ///
};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};




// create a function that gets the cart's total quantity
Cart.prototype.totalCartQuantity = function() {

  let totalQuantity = 0;

  for (let cartItem of this.items) {
    // we need to count every item

    totalQuantity = totalQuantity + cartItem.quantity;
    // totalQuantity += cartItem.quantity;
    // this does the same thing as line above
  }
  return totalQuantity;

}





// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
