let highestProduct = 0;

for (let a = 999; a >= 500; a--) {
    for (let b = 999; b >= 500; b--) {
        let product = a * b;
        product = product.toString();
        let reversedProduct = '';
        for (let i = product.length - 1; i >= 0; i--) {
            reversedProduct =  reversedProduct + product.charAt(i);
        }

        if (product === reversedProduct) {
            highestProduct = product > highestProduct ? product : highestProduct;
        }
    }
}

console.log(highestProduct);
