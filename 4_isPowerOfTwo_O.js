// function PowerOfTwo (n) {
// n을 넣었을 때 n이 power of 2 이면 true 반환, 아니면 false 나오도록 
// let arrOfPowerOfTwo = []
// for (let i = 1; i <= n; i++){
//     arrOfPowerOfTwo.push(Math.pow(2, i));
//     if(arrOfPowerOfTwo.includes(n)){
//         return true
//     }
// }
// return false
// }
// console.log(PowerOfTwo(512))


// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2 !==0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }


// n이 1보다 작은 경우는 무조건 false 뜨도록 했어야 했음
// while 루프로 n이 1보다 큰 경우 -
// n이 2의 배수가 아닌 경우 - 바로 false  -- 연산을 최대한 줄일 수 있도록 만드는 거네. 
//  Big-O = O(log n)


function isPowerOfTwoBitWise(n){
    if(n<1){
        return false 
    } 
    return (n & (n-1)) === 0
}

// bitwise and operator & 
// 비트로 따지면(2진법) 이전 숫자와 비트간 겹치는 부분 거르는 것. 다 0나옴 
// 이 경우는 O(1)

