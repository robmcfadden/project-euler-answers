const target = 600851475143;
let primes = [2];
let primeFactors = [];

for (i = 3; i <= Math.sqrt(target); i++) {
    let isPrime = true;

    primes.forEach(prime => {
        if (i % prime === 0) {
            isPrime = false;
        }
    });

    if (isPrime) {
        primes.push(i);
    }
}

primes.forEach(prime => {
    if (target % prime === 0) {
        primeFactors.push(prime);
    }
});

console.log(primeFactors[primeFactors.length - 1]);
