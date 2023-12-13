function PowerOfTwo (n) {
// n을 넣었을 때 n이 power of 2 이면 true 반환, 아니면 false 나오도록 
let arrOfPowerOfTwo = []
for (let i = 1; i <= n; i++){
    arrOfPowerOfTwo.push(Math.pow(2, i));
    if(arrOfPowerOfTwo.includes(n)){
        return true
    }
}
return false
}
console.log(PowerOfTwo(512))