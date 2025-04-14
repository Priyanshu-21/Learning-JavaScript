"use strict";
// Introduction to typescript: Learning array, map
// Problem: sort array in ascending order
let arr = [10, 12, 9, -1, 5, 11];
// Selection Sort Alogrithm: 
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const result = selectionSort(arr);
console.log("Sorted Array in ascending order: ", arr);
//# sourceMappingURL=intro.js.map