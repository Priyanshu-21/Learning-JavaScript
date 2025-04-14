// Introduction to timers phase in Event Loop 
/* Starting phase in the Event loop
   Asynchoronous Callbacks in nature
   LibUV library is responsible to run the pending callbacks (Thread Execution)
   Main Module of Loop will continue to run
*/

const runTimerLoop = (a, b) => console.log(`Timer ${a} elapsed from ${Date.now() - start - b} ms`);
const start = Date.now();

// setTimeout(callback, time, param 1, param 2, ..., param N)
setTimeout(runTimerLoop, 100, '100 ms', 100);
setTimeout(runTimerLoop, 200, '200 ms', 200);
setTimeout(runTimerLoop, 900, '900 ms', 900);

// for loop to make the timer elapsed for some more time 
for (let i = 0; i < 1_00_00_00_00; i++);