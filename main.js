//What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?

var natural = [1,2,3,4,5,6,7,8,9,10];
var squares = [];
var sums =0;
var sumSquare = 0;
var squareSum = 0;

//Square all 10 natural numbers

for (var i=0; i<natural.length; i++){
  squares[i] = natural[i] * natural[i];
}

//add those values together
for (var i=0; i<squares.length; i++){
  sumSquare += squares[i];
}


//add all 10 natural numbers together

for (var i=0; i<natural.length; i++){
  sums += natural[i];
}
//square that value

squareSum = sums * sums;

//subtract the squaredSum from the sumSquare

console.log("the total of the sum of the squares of the first 10 natural numbers is " + sumSquare);
console.log("the total of the square of the sum of the first 10 natural numbers is " + squareSum);

var total = sumSquare - squareSum;

console.log("The difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers is " + total);