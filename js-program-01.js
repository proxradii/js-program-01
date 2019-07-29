/*
Program calculates the total price of a purchase. It will keep purchasing until you can no longer afford to buy anymore. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold. After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
*/

const tax_rate = 0.08;
const phone_price = 50.00;
const accessories = 10.00;
const spending_thresold = 200.00;
let bank_balance = 300;
let amount = 0;



function phonePrice() {
while (amount < bank_balance) {
    
    amount = amount + phone_price;
    
    if (amount < spending_thresold) {
        amount = amount + accessories;
        }
    }
}

phonePrice();

function calculateTax(amount) {
	return amount * tax_rate;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

amount = amount + calculateTax( amount );
console.log("Your purchase: " + formatAmount( amount ));
