// Fetch Accessibility Issues

const testAccessibility = async (e) => { /* The arrow function is declared with the async keyword, making it an asynchronous function. This allows the use of the await keyword within the function, which pauses the function's execution until a Promise is resolved.  */

    e.preventDefault(); // Avoid page reload on submit

    // Get Input URL
    const url = document.querySelector('#url').value;
    console.log(url);

}


// Listen for submit event in the form
document.querySelector('#form').addEventListener('submit', testAccessibility);





// TODOS:
    // Add Issues to DOM
    // Set Loading State
    // Escape HTML within text



