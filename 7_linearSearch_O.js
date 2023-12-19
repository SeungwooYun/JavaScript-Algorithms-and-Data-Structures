// Given an array of 'n' elements and a target element 't', find the inidex of 't' in the array.
// Return -1 if the target element is not found
// arr = [-5, 2, 10, 4, 6], t=10 -> return 2

let arr = [-5, 2, 10, 4, 6]
function linearSearch (arr, t) {
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]===t) {
            return i
        } 
    }
    return -1  
}
console.log(linearSearch(arr, 6))

// O(n)