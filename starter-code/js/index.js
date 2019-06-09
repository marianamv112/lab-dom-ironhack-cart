function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  calculatePriceButton.onclick = function() {
    let input = document.querySelector('input');
    let unitCost = document.getElementsByClassName("unitCost");
    let totalPrice = document.getElementsByClassName("totalPrice");
  
    if (input.value) {
      totalPrice[0].innerText = '$' + (input.value * Number(unitCost[0].innerText.substring(1))).toFixed(2);
      
    }
  }

};
