// Understanding how event loop works under the hood in node architecture 
import fs from "node:fs";

const outputReadFile = () => {
    setTimeout(() => console.log("Hello"), 1);
    console.log("Queue Callback's completed");
}
const readFromFile = () => {
    fs.readFile("a.txt", outputReadFile);
    console.log("Read the file");
}
const callBackFunction = () => {
    setTimeout(readFromFile, 1);
    console.log("We have written successfully in a file")
}
const writeFileFunction = () => {
    fs.writeFile("a.txt", "data", callBackFunction);
    console.log("Successfully Written to file");
}
fs.readFile("a.txt", writeFileFunction);
