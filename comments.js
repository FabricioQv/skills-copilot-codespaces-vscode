// Create web server

// Import express module
const express = require("express");

// Import body-parser module
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Add body-parser middleware
app.use(bodyParser.json());

// Create route for POST request
app.post("/", (req, res) => {
  // Log request body
  console.log(req.body);
  // Send response
  res.send("POST request received");
});

// Create route for GET request
app.get("/", (req, res) => {
  // Send response
  res.send("GET request received");
});

// Start server
app.listen(3000, () => {
  console.log("Server started");
});
