"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sorting Array (Comparison Sort)
var node_fs_1 = require("node:fs");
// 1. Bubble Sort: 
var bubbleSort = function (arr) {
    var n = arr.length;
    var swapped;
    for (var i = 0; i < n - 1; i++) {
        swapped = false;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return arr;
};
// 2. Selection Sort: 
var selectionSort = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var minValue = Number.MAX_VALUE;
        var k = 0; // keep track of swapping value 
        for (var j = i + 1; j < n; j++) {
            // find smallest element 
            if (arr[j] <= minValue) {
                minValue = arr[j];
                k = j;
            }
        }
        if (minValue <= arr[i]) {
            var temp = arr[i];
            arr[i] = minValue;
            arr[k] = temp;
        }
    }
    return arr;
};
// 3. Insertion Sort: 
var insertionSort = function (arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] <= arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
// 4. Merge Sort:
function merge(left, right) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    // for remaining elements (if any)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
var mergeSort = function (arr) {
    var n = arr.length;
    if (n === 1)
        return arr;
    var mid = n / 2;
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid, n));
    return merge(left, right);
};
// 5. Quick Sort: 
function partition(low, high, arr) {
    var _a, _b;
    // Pivot approach 
    var pivot = arr[Math.floor((low + high) / 2)];
    var eq = low;
    var lt = low;
    var gt = high;
    while (eq <= gt) {
        if (arr[eq] < pivot) {
            // Swap arr[eq] with arr[lt]
            _a = [arr[lt], arr[eq]], arr[eq] = _a[0], arr[lt] = _a[1];
            lt++;
            eq++;
        }
        else if (arr[eq] > pivot) {
            //Swap arr[eq] with arr[gt]
            _b = [arr[gt], arr[eq]], arr[eq] = _b[0], arr[gt] = _b[1];
            gt--;
        }
        else {
            eq++;
        }
    }
    return [lt, gt];
}
var quickSort = function (arr) {
    var n = arr.length;
    if (n > 1) {
        var result = partition(0, n - 1, arr);
        var lt = result[0];
        var gt = result[1];
        // Recursive approach 
        quickSort(arr.slice(0, lt));
        quickSort(arr.slice(gt + 1, n));
    }
    return arr;
};
// const arr = [12, 10, 0, 9, -1, 5, 11, -3]; 
// const result = quickSort(arr); 
// console.log(result); 
try {
    var data = node_fs_1.default.readFileSync("sample.txt", "utf8");
    var numberData = JSON.parse(data);
    var start = new Date().getTime();
    var result = quickSort(numberData);
    var end = new Date().getTime();
    console.log("Sorted array: ", result);
    console.log("Time Taken to sort array: ", (end - start));
    // Save resulted array in file 
    var stringData = JSON.stringify(result);
    node_fs_1.default.writeFile("resut.txt", stringData, function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Sorted Array Saved to result file");
        }
    });
}
catch (err) {
    console.error(err);
}
// TODO: Quick Sort: Error in approach (need to check on this) 
