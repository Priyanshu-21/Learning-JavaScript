// Program to generate ramdom set of array to test sorting algo's 
import fs from "node:fs";
const arrayLength = 100000;
const minValue = 0;
const maxValue = 1000;
let unsortedArray = Array.from({ length: arrayLength }, () => {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
});
// Convert Array as string format 
const data = JSON.stringify(unsortedArray);
fs.writeFile("sample.txt", data, (error) => {
    if (error) {
        console.log("Error while writing to file: ", error);
    }
    else {
        console.log("Added to text file");
    }
});
//# sourceMappingURL=sample.js.map