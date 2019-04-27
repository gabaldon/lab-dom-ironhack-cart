function deleteItem(e){

}

function getPriceByProduct(itemNode){
  l
  return
}

function updatePriceByProduct(productPrice, index){

}

//RETRIEVE TOTAL PRICE
function getTotalPrice() {
  let unitPrice = document.getElementById("cost")
  let userInput = document.getElementByClassName("input")[0].value;
  for()

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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
