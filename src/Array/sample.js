"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Program to generate ramdom set of array to test sorting algo's 
var node_fs_1 = require("node:fs");
var arrayLength = 100000;
var minValue = 0;
var maxValue = 1000;
var unsortedArray = Array.from({ length: arrayLength }, function () {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
});
// Convert Array as string format 
var data = JSON.stringify(unsortedArray);
node_fs_1.default.writeFile("sample.txt", data, function (error) {
    if (error) {
        console.log("Error while writing to file: ", error);
    }
    else {
        console.log("Added to text file");
    }
});
