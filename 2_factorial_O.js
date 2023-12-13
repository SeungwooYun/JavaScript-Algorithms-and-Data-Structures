const factorial = (n) => {
    // result 선언만 해놓고 1로 두면 뭘곱해도 됨. 
    let result = 1
    if (n === 0) {
        return result
    } else {
        for (let i = n; i >= 1; i--) {
            result = i * result
        }
    }
    return result
}

console.log(factorial(20))

// big O - lenear complexity 