let fibonacci = [0, 1]
// 다 풀었었는데 1번 라인만 4번에 넣었어서 안됐었다.
// 명선님이 도와주심.ㄷㄷ
function recursiveFibonacci (n){
    // n < 0 이면 false 
    if(n<0){
        return false
    }

    // n이 1일 때 첫번째 인덱스 1
    if(n===0 || n===1) {
        return fibonacci.slice(0, n+1)
        }

    // n > 1 인 경우 전 인덱스와, 전전 인덱스 합친 값을 새로운 인덱스에 넣어줌 
    if (n > 1){
        // 인덱스 -1 이랑 -2 가 없는 경우 
        if(!fibonacci[n-1]){
            recursiveFibonacci(n-1)
        }
    fibonacci[n] = (fibonacci[n-2]+fibonacci[n-1])

}
return fibonacci;
}

console.log(recursiveFibonacci(15))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(2))
// console.log(recursiveFibonacci(10))


// (0) => [0]
// (1) => [0, 1]
// (2) => [0, 1, 1]
// (3) => [0, 1, 1, 2]
// (4) => [0, 1, 1, 2, 3]