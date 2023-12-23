
let arr = [1,2,3,4,5,6,7,8,9,10]
let min = 0
let max = arr.length - 1;
let n = Math.round((min + max)/2) -1 ;

function recursiveBinarySearch(arr, t, n) {

    console.log("n", n)
    // n번째 인덱스가 t랑 같은 경우 n 반환 
    if(arr[n] === t) {
     return n       
    }
    if (min <= max) {
    // t보다 작은 경우, t를 찾아야하니까 오른쪽 search 
        if (arr[n] < t){
        min = n+1;
       } 
    //    반대의 경우
    else if (arr[n] > t) {
        max = n-1;
       }
       n = Math.round((min + max)/2)
       return recursiveBinarySearch(arr, t, n)
    } else {
        return -1
    }
}

// ! 재귀함수에서 리턴되는 값을 리턴하고 싶으면, 해당 함수앞에 return 을 적어주면 되는 거였다 ..
console.log(recursiveBinarySearch(arr, -1, n))