function deleteItem(e) {
  
  let container = e.currentTarget.closest('section');
  console.log(container);
  container.innerHTML = '';
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  let input = document.getElementsByClassName('quantity');
  let unitCost = document.getElementsByClassName("unitCost");
  let subtotalPrice = document.getElementsByClassName("subtotalPrice");
  let totalPrice = document.getElementsByClassName("totalPrice");

  let sumOfPrices = 0;

  for (let i = 0; i < unitCost.length; i++) {
    if (input[i].value) {
      let subTotalValue = (input[i].value * Number(unitCost[i].innerText.substring(1))).toFixed(2);
      subtotalPrice[i].innerText = '$' + subTotalValue;
      sumOfPrices += Number(subTotalValue);
    }
  }
  totalPrice[0].innerText = '$' + sumOfPrices;
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(e, itemName, itemUnitPrice) {
  let referenceContainer = e.currentTarget.closest('section');

  let newContainer = document.createElement('section');
  newContainer.className = 'wrapper';

  newContainer.innerHTML +=
    `<div class="productName">
  <span>${itemName}</span>
</div>
<div class="unitCost">
  <span>$${itemUnitPrice}</span>
</div>
<div class="inputQty">
  <label for="input">QTY</label>
  <input type="number" class="quantity">
</div>
<div class="subtotal">
  <span class="subtotalPrice">$0.00</span>
</div>
<div>
  <button class="btn-delete">Delete</button>
</div>`;

  referenceContainer.before(newContainer);
  
  window.onload();
  

}

function createNewItem(e) {
  let newItemName = document.getElementById('nem-item-name');
  let newItemPrice = document.getElementById('new-item-price');
  
  createNewItemRow(e, newItemName.value, newItemPrice.value);

  console.log(newItemName, newItemPrice);

  newItemName.value = "";
   newItemPrice.value = "";


}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};