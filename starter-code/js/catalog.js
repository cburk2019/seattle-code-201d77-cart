/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
/// ----------------------------- cart is and instance of a CART -------------------////
/// ------------------- use cmd/ctl f to look for words in your code ------------------///

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // TODO(done): Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');

  for (let product of Product.allProducts) {
    let optionElement = document.createElement('option');
    optionElement.textContent = product.name;
    selectElement.appendChild(optionElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO(done): Prevent the page from reloading
  event.preventDefault();

  /// --------------- at this point you know which item was picked from the list, how many ----------- ///
  const t = event.target;
  const productName = t.items.value;
  const productQuantity = parseInt(t.quantity.value);


  // Do all the things ...

 // add a filter to find the product selected in the proudct array and add it to the cart

  addSelectedItemToCart(productName, productQuantity);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(productName, productQuantity);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(product, quantity) {
  // TODO: suss out the item picked from the select list
  cart.addItem(product, quantity);

  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // get header nav element to be able to add cart count in cart button
  let itemCount = document.getElementById('itemCount');
  itemCount.textContent = cart.totalCartQuantity();

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(productName, productQuantity) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information

  const cartContentsDiv = document.getElementById('cartContents');
  // pointer to where you will be putting the element, "parent"
  const productDivElem = document.createElement('div');
  // creating the child element
  productDivElem.textContent = productName;


  cartContentsDiv.appendChild(productDivElem);
  // populating the child element, appending to parent

  // lazy loaded, not loaded until they're called
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');

catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
