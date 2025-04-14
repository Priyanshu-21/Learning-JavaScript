// . (dot) signifies that the imported modules is in same path 
import "./a.js"

console.log("Program of Main Module starts");

for (let i = 0; i < 1_00_00_00_000; i++);

console.log("Program for Main Module ends");

// Program output (Module b runs) -> (Module a runs) -> Main Module (All execution is synchronous in nature)

// Import Module behaves like asynchronous module (Need to check on this later)