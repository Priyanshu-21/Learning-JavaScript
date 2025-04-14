## Introduction to how Timers Loop works under the hood 
- Timers Module are the initial phase of the Event Loop 
- Thread is running **Asynchronously** in this loop 
- LibUV library is responsible to run the thread while main loop is getting executed
- Timers are very dependent on OS, file System, CPU, memory and other internal hardwares so we can't predict their actual behaviours. 
- Timers phase will choose to run the time callbacks in ascending order 
### Lets see how timers phase is working with a example 
For Example, these 3 processes are about to run in timers thread, so libUV will encounter this in following approach. 

| Processes      | Timers           |
| ------------- |:-------------:|
| Process 1      | 100 ms |
| Process 2     | 200 ms     |
| Process 3 | 300 ms    |

![alt text](/src/Node/Timers-Module/image.png)
