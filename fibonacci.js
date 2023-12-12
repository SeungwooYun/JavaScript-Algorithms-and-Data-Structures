// 내 풀이
function fibonacci (n)  {
    let arr = []
    // 인덱스 0-0 1-1 2-1 3-3 
    // n-1이랑 인덱스 수 맞아야함
    // n이 1일 때, [0] 이어야함
    // n이 2일 때, [0, 1] 이어야함

    // n이 1,2인 경우
    if(n<3) {
        for (let i=0; i < n; i++){
            arr[i] = i
            }
    } else { 
        for (let i=0; i < 2; i++){
            arr[i] = i
        }
    // n에 3 이상인 경우 
    for (let i=2; i < n; i++){
    arr[i] = arr[i-2] + arr[i-1] 
    }
}
    return arr
}

console.log(fibonacci(20))
// 다풀었다 
