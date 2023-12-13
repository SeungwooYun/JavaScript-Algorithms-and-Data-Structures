// // 내 풀이
// function fibonacci (n)  {
//     let arr = []
//     // 인덱스 0-0 1-1 2-1 3-3 
//     // n-1이랑 인덱스 수 맞아야함
//     // n이 1일 때, [0] 이어야함
//     // n이 2일 때, [0, 1] 이어야함

//     // n이 1,2인 경우
//     if(n<3) {
//         for (let i=0; i < n; i++){
//             arr[i] = i
//             }
//     } else { 
//         // n이 3 이상일 때 인덱스 1,2 정의해주기 
//         for (let i=0; i < 2; i++){
//             arr[i] = i
//         }
//     // 2번 인덱스(세번째 수) 이후 로직 
//     for (let i=2; i < n; i++){
//     arr[i] = arr[i-2] + arr[i-1] 
//     }
// }
//     return arr
// }


// 다풀었다 


// 강사 풀이
// 첫 두 인덱스 고정 
function fibonacci (n) {
    const arr = [0, 1]
    for (let i = 2; i < n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
}
// 이 풀이가 훨씬 간단하네 아오 인덱스 조금 더 고민했어야 했다.
// Big O 는 O(n) - loop가 하나 있기 때문 

console.log(fibonacci(20))