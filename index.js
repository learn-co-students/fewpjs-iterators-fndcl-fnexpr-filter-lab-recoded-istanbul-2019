const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];
function getTotalAmountForProducts(products) {
  let totalPrice = 0;
 
  products.forEach(function(product) {
    totalPrice += product.price;
  });
 
  return totalPrice;
}
 
console.log(getTotalAmountForProducts(products));
const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];
 
function ourReduce(arr, reducer, init) {
    let accum = init;
    arr.forEach(element => {
        accum = reducer(accum, element);
    });
    return accum;
}
 
function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}
 
console.log(ourReduce(couponLocations, couponCounter, 0)); // prints 15
console.log(ourReduce(couponLocations, couponCounter, 3));
console.log(couponLocations.reduce(couponCounter, 0)); 
let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 0)
let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ return element * 2 + total})
let doubledAndSummedFromTen = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 10)
let hogwarts_houses = {
  "Slytherin": [],
  "Gryffindor": [],
  "Hufflepuff": [],
  "Ravenclaw": []
}
 
/*
Assume sorting_hat.assign() returns a String ("Slytherin", "Gryffindor",
"Hufflepuff", "Ravenclaw") based on the argument passed in.
*/
 
incoming_students.reduce(function(houses, student) { houses[sorting_hat.assign(student)].push(student)} , hogwarts_houses)
hogwarts_houses["Gryffindor"]
