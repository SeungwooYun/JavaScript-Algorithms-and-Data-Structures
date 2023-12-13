// Prime nubmer 구하기
// 소수(素數, 발음: [소쑤], 문화어: 씨수, 영어: prime number)는 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수다.
// function isPrime(n) {
//     // 2의 뱌수 중 2를 제외하고 - false 
//     // 3의 배수 중 3을 제외하고 false 
//     // 5의 배수중 5를 제외하고 false 
//     // 7의 배수중 7을 제외하고 false 
//     // modulo 쓰면 될 거 같은데 - 나머지값으로 계산
//     // break 안걸면 해당 값이 참일시 다음 case실행되는구나 
//     // if ( n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && )
    

// }
// GG. 소수 구하는 방법이 직접 나눠보는게 아니라면 온갖 수학자들이 만든 공식들인데
// 내가 어케풀음
// 해답은 아래에





























// 강사의 정답 
function isPrime (n){
// n은 1보다 큰 자연수여야 함 
if(n<2) {
    return false;
}
// n보다 작은 값중에 나눠지는 수가 있는지를 for loop로 돌리면 되는 거였다. 
// i가 2부터 시작해서 n까지 루프로 나눴으면 됐네;
// i를 n까지 걸어서 무한정이 아닌 해당 수의 내부에서만 루프돌리면 되는 거였네  
for(let i=2; i < n; i++){
if(n%i === 0){
    return false
}
}
return true
}
console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))

// bigO - O(n)