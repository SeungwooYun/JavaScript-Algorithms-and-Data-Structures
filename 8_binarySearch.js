// Given a !sorted! array of 'n' elements and a target element 't', find the index of 't' in the array. 
// Return -1 if the target element is not found
// Array sort 먼저 진행할 것 


let arr = [2, -5, 10, -15, 6]

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
    for (let i=0 ; i < arr.length; i++){
        if(arr[i] === t) {
            console.log(arr)
            return i
        } 
       }
       return -1
}

console.log(binarySearch(arr, 7))