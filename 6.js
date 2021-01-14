let squareOfSum = 0;
let sumOfSquares = 0;

let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

squareOfSum = Math.pow(numbers.reduce((a, b) => a + b), 2);

numbers.forEach(n => {
    sumOfSquares = sumOfSquares + (n * n)
});

console.log(squareOfSum - sumOfSquares);
