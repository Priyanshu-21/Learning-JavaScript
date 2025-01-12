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

try {
    const data = fs.readFileSync("sample.txt", "utf8"); 
    const numberData = JSON.parse(data);
    const start = new Date().getTime(); 
    const result = bubbleSort(numberData); 
    const end = new Date().getTime(); 
    console.log("Bubble Sorted array: ", result); 
    console.log("Time Taken to sort array: ", (end - start)); 
} catch (err) {
    console.error(err); 
}

// TODO: Selection Sort, Insertion Sort, Quick Sort, Merge Sort. 