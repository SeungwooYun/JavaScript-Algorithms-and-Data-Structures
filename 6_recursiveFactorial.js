
function recursiveFactorial (n) {
    if (n <=1) {
        return 1
    }
return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(5))