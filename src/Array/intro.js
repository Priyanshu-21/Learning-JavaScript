// Introduction to typescript: Learning array, map
// Problem: sort array in ascending order
var arr = [10, 12, 9, -1, 5, 11];
// Selection Sort Alogrithm: 
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var result = selectionSort(arr);
console.log("Sorted Array in ascending order: ", arr);
