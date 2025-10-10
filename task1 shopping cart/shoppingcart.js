// 1. VARIABLES & DATA TYPES

var taxRate = 0.07;               // number (using var - global/function scoped)
let cart = [];                    // array to hold cart items
const storeName = "SuperShop";    // string (constant, does not change)

let customer = {                  // object with a boolean
    name: "sriram",
    isMember: true
};


// 2. ADD ITEMS (SCOPE EXAMPLE)

function addItem(name, price, quantity) {
    // function scoped variable
    let item = { name, price, quantity };

    // block scoped variable
    if (quantity > 0) {
        let message = `${quantity} x ${name} added to cart`;
        console.log(message);
    }

    cart.push(item); // accessing global "cart"
}

// 3. CALCULATE TOTAL (OPERATORS)

function calculateTotal() {

    
    let subtotal = 0;

    // arithmetic + assignment operator
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    let tax = subtotal * taxRate;

    // comparison + logical + ternary operator
    let discount = (subtotal > 50 && customer.isMember) ? 10 : 0;

    let total = subtotal + tax - discount;

    console.log("----- Receipt -----");
    console.log("Subtotal:", subtotal);
    console.log("Tax:", tax.toFixed(2));
    console.log("Discount:", discount);
    console.log("Final Total:", total.toFixed(2));
    console.log("-------------------");
}

// 4. JAVASCRIPT RUNTIME DEMO
console.log("Welcome to", storeName);
console.log("Start shopping...");

setTimeout(() => {
    addItem("Shoes", 40, 1);
    addItem("Hat", 15, 2);

    setTimeout(() => {
        calculateTotal();
    }, 1000);

}, 1000);

console.log("You can keep browsing while we prepare your cart...");

