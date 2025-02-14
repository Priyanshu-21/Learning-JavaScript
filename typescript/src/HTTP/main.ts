import { Issue } from "./types";

const issues = await getIssueData(); 

// console.log(issues); // Get the whole API 
logIssues(issues); // Call to get the issues title 

// API for get request 
async function getIssueData(): Promise<Issue[]> {
    // Generate API key 
    const apiKey = generateApiKey(); 
    const response = await fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/issues", {
        method: "GET", 
        mode: "cors", 
        headers: {
            "x-API-Key": apiKey, 
            "Content-Type": "application/json",
        },
    }); 
    const result = await response.json() as Issue[]; 
    return result; 
}

function generateApiKey(): string {
    const characters = "ABCDEF0123456789"; 
    let result = ""; 
    // Generate 16 digit of random number (Hash Value)
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length)); 
    }
    return result; 
}

// Handles promise data & list out issues title 
function logIssues(issues: Issue[]): void {
    for (const issue of issues) {
        console.log(issue.title);
    }
}

// Learning: Introduction to HTTP, get method and intro to async/await method 