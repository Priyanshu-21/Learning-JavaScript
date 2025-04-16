import net from "net"
import fs from "node:fs"

console.log("Start!!!");
const client1 = new net.Socket();
const client2 = new net.Socket();

// Pending callback phase 
client1.connect(9999, '192.168.4.21', () => {
    console.log(`Client connected successfully to ${'192.168.4.21'} on Port ${9999}`);
});

client2.connect(80, '192.0.2.0', () => {
    console.log(`Client connected successfully to ${'192.0.2.0'} on Port ${80}`);
});

// Error Handling 
client1.on('error', (err) => {
    console.err(`Connection failed: ${err.message}`);
});

client1.on('error', (err) => {
    console.err(`Connection failed: ${err.message}`);
});
console.log("End!!!");

/* Predict the output: - 
1. Import Module will run 
2. Synchronous Modules will run start & stop
3. Timers Phase (Not present)
4. Pending callback phase 
*/

// Need to check on some of the IP's to run this code logic correctly. 