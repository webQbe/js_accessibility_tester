/* Testing Pa11y */

const pa11y = require('pa11y');

// Pa11y returns promise, so we're using an async-await function
async function run(){ /* The function is declared with the async keyword, making it an asynchronous function. This allows the use of the await keyword within the function, which pauses the function's execution until a Promise is resolved. */

    const res = await pa11y('https://young-peak-39197-f21896c45771.herokuapp.com/'); /* await pauses the execution of the function until the Pa11y Promise is resolved. This ensures that res contains the response from the server. */
    
    console.log(response);

}

run();