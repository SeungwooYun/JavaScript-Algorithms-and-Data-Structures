// Given a !sorted! array of 'n' elements and a target element 't', find the index of 't' in the array. 
// Return -1 if the target element is not found
// Array sort 먼저 진행할 것 


let arr = [1, 2, 3, -6, -10, 6, 7, 8, 9]

function binarySearch (arr, t) {
    for (let j = 0; j < arr.length ; j++){
        for (let i = 0; i< arr.length; i++){
        if (arr[i] > arr[i+1]){
            let temp;
            temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp 
        }
       }
    }
    // 솔팅완료 
    console.log("sorted array", arr)
    
//     // n은 인자로 받은 array 의 중앙값. 소수의 경우 반올림, 인덱스로 써야하기 때문에 -1
    let n = Math.round(arr.length / 2)-1;
    console.log("첫 n", n)
    console.log("첫 arr[n]", arr[n])
    
    let min = 0;
    // max도 인덱스로 써야하기 때문에 -1 
    let max = arr.length-1;
    if(arr[n]===t){return n};

    // 배열 바깥의 수가 들어온 경우 -1 반환 
    if(arr[0] > t || arr[arr.length-1] < t){
        return -1
     }

         // 첫 n번째 인덱스가 t가 아닌경우 while loop.
    while (arr[n]!==t){
        // 솔팅된 배열의 첫번쨰(가장 작은 수) 보다 t(찾는 수)가 큰 경우 
       if (arr[n] < t) {
            // t는더 배열의 오른쪽에 있다는 것. 
            // - min 은 n 다음밸류부터. 
            min = n+1;
            // n은 기존 max 와 기존n의 평균값 
            n = Math.round((min + max)/2)
            if( t < arr[min]){
                return -1 
            }
        } else if (arr[n] > t){
        // n번째 밸류의 값이 t보다 큰 경우 t는 배열의 왼 쪽에 있음. 
        // 최대로 확인해야할 인덱스는 n보다 하나 적을듯.
            max = n-1
            // min부터 n 사이 중간값을 다시 확인해줘야함
            n = Math.round((min+max)/2)
            if( t > arr[max]){
                return -1 
            }
        }
    }
    if(arr[n]===t){return n} 
}
// O(log n) - every iteration the input size reduced by half 

// 만약에 더 큰 경우에는 뒤에있는 것들의 중간값을 봐줘야함 

console.log(binarySearch(arr, 5))










    // for (let i=0 ; i < arr.length; i++){
    //     if(arr[i] === t) {
    //         console.log(arr)
    //         return i
    //     } 
    //    }
    //    return -1
// 여기는 무지성 linear searching
