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

//Promises

// A promise is a result object that may produce a value at some point in the future. It can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a callback function as an argument. The callback function is called when the promise is created, and it can return a value or throw an error.