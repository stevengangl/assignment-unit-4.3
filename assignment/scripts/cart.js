console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item1) {
    basket.push(item1)
    return true;
}
console.log(addItem(1));
console.log(addItem(2));
console.log(addItem(3));

console.log(basket);

function listItems() {
    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);

    }
}
listItems();