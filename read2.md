# Multi-User Shopping Cart Application

This is a simple multi-user shopping cart web application built using HTML, CSS, and JavaScript. The application allows users to log in using a unique username and manage their own shopping cart. Each user's cart data is stored in localStorage as a JSON object, so that cart information persists across sessions on the same browser.

## Features

- **User Login**:  
  Users enter a unique username to log in. If the username does not exist, the application initializes an empty cart for that user.

- **Individual Shopping Carts**:  
  Each user has their own cart stored in localStorage. The localStorage structure is a JSON object where each key is a username, and the corresponding value is an array of items.

- **Cart Functionality**:  
  - **Add Items**: Add an item to the cart by providing the item name, price, and quantity.  
  - **Edit Quantity**: Update the quantity of any item.  
  - **Remove Items**: Delete items from the cart.  
  - **Dynamic Totals**: The application automatically recalculates the total cost per item and the grand total for the cart.

- **Storage Structure**:  
  Example localStorage structure:
  ```json
  {
    "user1": [
      { "itemName": "Laptop", "price": 1000, "quantity": 1 },
      { "itemName": "Mouse", "price": 20, "quantity": 2 }
    ],
    "user2": [
      { "itemName": "Keyboard", "price": 50, "quantity": 1 }
    ]
  }
