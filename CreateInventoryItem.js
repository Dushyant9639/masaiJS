function createInventoryItem(name, category, price) {
  return {
    name: name,        
    category: category, 
    price: price,    

    describeItem: function() {
      console.log(`Item: ${this.name}, Category: ${this.category}, Price: $${this.price}`);
    }
  };
}
function addItemDiscount(inventoryItem, discountPercent) {
  inventoryItem.discountedPrice = inventoryItem.price - (inventoryItem.price * discountPercent / 100);

  inventoryItem.applyDiscount = function() {
    console.log(`Discounted Price for ${this.name}: $${this.discountedPrice.toFixed(2)}`);
  };
  return inventoryItem;
}

const item1 = createInventoryItem("Laptop", "Electronics", 1000);
item1.describeItem(); // Output: Item: Laptop, Category: Electronics, Price: $1000

const discountedItem1 = addItemDiscount(item1, 15); // 15% discount
discountedItem1.applyDiscount(); // Output: Discounted Price for Laptop: $850.00
