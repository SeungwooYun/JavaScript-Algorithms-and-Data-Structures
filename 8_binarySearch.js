// Given a !sorted! array of 'n' elements and a target element 't', find the index of 't' in the array. 
// Return -1 if the target element is not found
// Array sort 먼저 진행할 것 


let arr = [1, 2, 3, -6, -10, 6, 7, 8, 9, 10]
function binarySearch (arr, t) {
    // sorting 어떻게 하지? 0부터 마지막까지 한바퀴 돌면서 두개 비교했을 때 무조건 뒷 인덱스가 더 크게 
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
    
    // n은 인자로 받은 array 의 중앙값. 소수의 경우 반올림
    let n = Math.round(arr.length / 2);
    console.log("첫 평균인덱스", n)
    console.log("첫 평균밸류", arr[n])
    
    let min = 0;
    let max = arr.length-1;
    if(arr[n]===t){return n};
    while (arr[n]!==t){
        if(arr[0] > t){
            break
        } else if (arr[arr.length-1] < t){
            break
        } else if (arr[n] < t) {
            // console.log("arr[n]", arr[n])
            // console.log("t", t)
            // n번째 인덱스가 t보다 작으면, 찾아야하는 t는더 배열의 오른쪽에 있다는 것. 
            // - min 은 n 다음밸류부터. 
            min = n+1;
            // n은 기존 max 와 기존n의 평균값 
            n = Math.round((min + max)/2)
            console.log("test1", n)
        } else if (arr[n] > t){
            console.log(arr)
            console.log("n", n)
            console.log("arr[n]", arr[n])
            console.log("t", t)
        // n번째 밸류의 값이 t보다 큰 경우 t는 배열의 왼 쪽에 있음. 
        // 최대로 확인해야할 인덱스는 n보다 하나 적을듯.
            max = n-1
            // min부터 n 사이 중간값을 다시 확인해줘야함
            n = Math.round((min+max)/2)
            // console.log("test2", n)
        }
    }
    if(arr[n]===t){return n} else {
    return -1
}
}

// 만약에 더 큰 경우에는 뒤에있는 것들의 중간값을 봐줘야함 

console.log(binarySearch(arr, -5))
    // for (let i=0 ; i < arr.length; i++){
    //     if(arr[i] === t) {
    //         console.log(arr)
    //         return i
    //     } 
    //    }
    //    return -1
// 여기는 무지성 linear searching
