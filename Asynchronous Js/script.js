// Asynchronous JavaScript
// Callback function
function add(num1, num2, callback) {
    setTimeout(() => {
        const result = num1 + num2;
        callback(result);
    }, 2000);
}

// Calling the function
add(5, 7, (result) => {
    console.log(result); // Output: 12
    
    // Fetching data
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data)) // Logs the fetched data
        .catch(error => console.error('Error fetching data:', error));
});
//Explanation: The add function takes two numbers and a callback function as arguments. The callback function is called after a 2-second delay, passing the result of the addition as an argument. This is an example of asynchronous programming, where the function does not block the execution of other code while waiting for the result.

//what does the fetchdata do: The fetchdata function is not defined in the code snippet. However, based on the context, it appears to be a function that fetches data from a URL and logs it to the console. The fetch function is used to make a GET request to the specified URL, and the response is then parsed as JSON and logged to the console. If there is an error during the fetch process, it is caught and logged to the console.

//Callback hell: The code snippet demonstrates a common problem in asynchronous programming known as "callback hell." This occurs when a function calls another function, which in turn calls another function, and so on, creating a nested structure of callbacks. This can make the code difficult to read and understand. In this example, the add function calls a callback function, which in turn calls the fetch function. This creates a nested structure of callbacks that can be challenging to navigate. To avoid callback hell, developers often use alternative approaches such as promises or async/await.
//Callback hell example:
function add(num1, num2, callback) {
    setTimeout(() => {
        const result = num1 + num2;
        callback(result);
    }, 2000);
}
add(5, 7, (result) => {
    console.log(result); // Output: 12
    // Fetching data
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data)) // Logs the fetched data
        .then(() => {
            // Fetching more data
            fetch('https://jsonplaceholder.typicode.com/comments')
        })
        .catch(error => console.error('Error fetching data:', error));
});
//Explanation: This code snippet demonstrates a classic example of callback hell. The add function calls a callback function, which in turn calls the fetch function. The fetch function returns a promise, which is then chained to another then block that calls the fetch function again. This creates a nested structure of callbacks that can be challenging to read and understand.

//Promises

// A promise is a result object that may produce a value at some point in the future. It can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a callback function as an argument. The callback function is called when the promise is created, and it can return a value or throw an error.

//example
function add(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = num1 + num2;
            resolve(result);
        }, 2000);
    });
}

//Event Loop
//The event loop is a mechanism that allows JavaScript to handle multiple tasks concurrently. It is a single -threaded loop that runs continuously, checking for and executing tasks as they become available. The event loop is responsible for managing the execution of tasks, including function calls, event handling, and asynchronous operations.
//The event loop is a key component of the JavaScript engine, and it plays a crucial role in enabling the creation of responsive and interactive web applications. By allowing tasks to be executed concurrently, the event loop helps to improve the performance and responsiveness of web applications.

//Event Loop Example
function add(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = num1 + num2;
            resolve(result);
        }, 2000);
    });
}
    add(5, 7).then(result => {
        console.log(result); // Output: 12
        // Fetching data
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data)) // Logs the fetched data
            .then(() => {
                // Fetching more data
                fetch('https://jsonplaceholder.typicode.com/comments')
            })
            .catch(error => console.error('Error fetching data:', error));
    });
//Explanation: This code snippet demonstrates the event loop in action. The add function returns a promise that resolves after 2 seconds, and the then block is executed when the promise is resolved . The fetch function is called within the then block, and it returns a promise that resolves with the fetched data. The event loop allows the fetch function to be executed concurrently with the add function, improving the performance and responsiveness of the application.

//Async/Wait

//Async/await is a syntax sugar that allows you to write asynchronous code that looks and feels like synchronous code. It is a combination of the async keyword and the await keyword, which is used to pause the execution of the code until a promise is resolved or rejected. Async/await is a more readable and maintainable way to write asynchronous code, and it is widely supported in modern JavaScript environments. 

async function add(num1, num2) {
    const result = await add(num1, num2);
    console.log(result); // Output: 12
};
//Explanation: This code snippet demonstrates the use of async/await to write asynchronous code that looks and feels like synchronous code. The add function is marked as async, and the await keyword is used to pause the execution of the code until the promise returned by the add function is resolved. The result of the promise is then logged to the console. The async/await syntax makes the code more readable and maintainable, and it is widely supported in modern JavaScript environments.