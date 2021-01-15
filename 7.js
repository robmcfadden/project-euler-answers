let primes = [2];

for (i = 3; primes.length < 10001; i++) {
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

console.log(primes[primes.length - 1]);
