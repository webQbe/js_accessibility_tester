// Fetch Accessibility Issues

const testAccessibility = async (e) => { /* The arrow function is declared with the async keyword, making it an asynchronous function. This allows the use of the await keyword within the function, which pauses the function's execution until a Promise is resolved.  */

    e.preventDefault(); // Avoid page reload on submit

    // Get Input URL
    const url = document.querySelector('#url').value;

    // Check for blank input
    if(url === ''){

        alert('Please add a url!');

    } else {

        // Set Loading State to true
        setLoading(); // Show spinner
       
       // Make fetch() request
        
    }

}

 // Set Loading State
 const setLoading = (isLoading = true) => {

    // Select Loader Element
    const loader = document.querySelector('.loader');

    // Check if loading is true
    if(isLoading){
        // Show spinner
        loader.style.display = 'block';
    } else {
        // Hide spinner
        loader.style.display = 'none';
    }
 }



// Listen for submit event in the form
document.querySelector('#form').addEventListener('submit', testAccessibility);





// TODOS:
    // Add Issues to DOM
    // Escape HTML within text



