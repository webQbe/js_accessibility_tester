/* Import Express, Pally, & PORT */
const express = require('express');
const pa11y = require('pa11y');
const PORT = process.env.PORT || 5000; // Use 5000 if it is not in process.env

// Intialize Express
const app = express();

// Run server & listen to port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));