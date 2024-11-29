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
       const res = await fetch(`/api/test?url=${url}`); /* await pauses the execution of the async testAccessibility() until the fetch() Promise is resolved. This ensures that res contains the response from the server. */

       // Check if response status is NOT success
       if(res.status !== 200){

            setLoading(false); // Hide spinner when requesting is done
            alert('Something went wrong!');

       } else {

            // Status 200
            const { issues } = await res.json(); /* await pauses the execution of the async testAccessibility() again until the res.json() Promise is resolved. This ensures that { issues } contains the results from the server. */

            // Output results to UI
            addIssuestoDOM(issues);

            // Hide spinner when requesting is done
            setLoading(false);

       }
    }
}

// Add Issues to DOM
const addIssuestoDOM = (issues) => {

    // Log results from Pa11y
    console.log(issues);

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
    // Escape HTML within text



