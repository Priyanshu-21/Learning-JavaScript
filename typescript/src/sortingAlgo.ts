// Sorting Array (Comparison Sort)
import fs from "node:fs"; 

// 1. Bubble Sort: 
const bubbleSort = (arr: number[]) => {
    const n = arr.length; 
    let swapped: boolean; 
    for (let i = 0; i < n - 1; i++) {
        swapped = false; 
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]; 
                arr[j] = arr[j + 1]; 
                arr[j + 1] = tmp;
                swapped = true; 
            }
        }
        if (!swapped) break; 
    }

    return arr; 
}

// 2. Selection Sort: 
const selectionSort = (arr: number[]) => {
    const n = arr.length; 
    for (let i = 0; i < n; i++) {
        let minValue = Number.MAX_VALUE; 
        let k = 0; // keep track of swapping value 
        for (let j = i + 1; j < n; j++) {
            // find smallest element 
            if (arr[j] <= minValue) {
                minValue = arr[j];
                k = j; 
            } 
        }
        if (minValue <= arr[i]) {
            let temp = arr[i]; 
            arr[i] = minValue; 
            arr[k] = temp; 
        }
    }

    return arr; 
} 

// 3. Insertion Sort: 
const insertionSort = (arr: number[]) => {
    const n = arr.length; 
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] <= arr[j]) {
                let temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            }
        }
    }
    return arr; 
}

// 4. Merge Sort:
function merge(left: number[], right: number[]) {
    let i = 0; 
    let j = 0; 
    const result: number[] = []; 
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]); 
            i++;
        } else {
            result.push(right[j]); 
            j++; 
        }
    }
    // for remaining elements (if any)
    while (i < left.length) {
        result.push(left[i])
        i++;
    }
    while (j < right.length) {
        result.push(right[j]); 
        j++; 
    }

    return result; 
}
const mergeSort = (arr: number[]) => {
    const n = arr.length; 
    if (n === 1) return arr; 

    const mid = n / 2; 
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid, n)); 

    return merge(left, right); 
}

// const arr = [12, 10, 0, 9, -1, 5, 11, -3]; 
// const result = mergeSort(arr); 
// console.log(result); 

try {
    const data = fs.readFileSync("sample.txt", "utf8"); 
    const numberData = JSON.parse(data);
    const start = new Date().getTime(); 
    const result = mergeSort(numberData); 
    const end = new Date().getTime(); 
    console.log("Sorted array: ", result); 
    console.log("Time Taken to sort array: ", (end - start)); 

    // Save resulted array in file 
    const stringData = JSON.stringify(result); 
    fs.writeFile("resut.txt", stringData, (error) => {
        if (error) {
            console.log(error); 
        } else {
            console.log("Sorted Array Saved to result file"); 
        }
    }); 
} catch (err) {
    console.error(err); 
}

// TODO: Quick Sort. 