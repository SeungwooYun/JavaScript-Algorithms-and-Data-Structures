arr = [-10, 5, 2, 6, 10]
let swapped;
function bubbleSort (arr) {
    do {
    swapped=false
    for(let i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        number ++;
        swapped=true
    }
}
} while (swapped)
return arr
}

// O(n^2)
console.log(bubbleSort(arr))