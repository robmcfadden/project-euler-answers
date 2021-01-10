let fib = [1, 2];
let evenTerms = [2];
let i = fib[fib.length - 1];

while (i) {
    const newTerm = fib[fib.length - 1] + fib[fib.length - 2];

    if (newTerm > 4000000) {
        break;
    }

    fib.push(newTerm);
    i = newTerm;

    if (newTerm % 2 === 0) {
        evenTerms.push(newTerm);
    }
}

console.log(evenTerms.reduce((a, b) => a + b));
