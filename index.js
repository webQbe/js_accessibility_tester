/* Import Express, Pally, & PORT */
const express = require('express');
const pa11y = require('pa11y');
const PORT = process.env.PORT || 5000; // Use 5000 if it is not in process.env

// Intialize Express
const app = express();

// Middleware for public/
app.use(express.static('public')); 


// Define app route
app.get('/api/test', async (req, res) => {/* The arrow function is declared with the async keyword, making it an asynchronous function. This allows the use of the await keyword within the function, which pauses the function's execution until a Promise is resolved.  

The GET request looks like this: http://localhost:5000/api/test?url=${TESTING_URL} */

    // Check if GET request url exists
    if(!req.query.url){ 

        // Return error response as json
        res.status(400).json({ error: 'url is required'});

    } else {
        
        // Pass url & Get results
        const results = await pa11y(req.query.url); /* await pauses the execution of the async arrow function until the Pa11y Promise is resolved. This ensures that results contains the response from the server. */

        // Return json response
        res.status(200).json(results);

    }
});

// Run server & listen to port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));