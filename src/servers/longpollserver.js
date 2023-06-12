// We require the 'express' module because Node.js still uses CommonJS modules. In CommonJS, we use the 'require' function to import modules. Here, we are importing the 'express' module, which is a popular framework for building web applications in Node.js.

// We then create an instance of the express application by invoking the express function. This gives us access to all the features and functionalities provided by the express module, allowing us to build a web server
const express = require('express');
const app = express();
const port = 8001;

// bro, simulating a long poll request to make this approach work for you locally; your real-time server will not need this

app.get('/data', (req, res) => {
  // Simulating a long running process
  setTimeout(() => {
    // Sending a response with a 1000-character long sample JSON object
    const response = {
      message: 'Long Polling Example',
      data: '...1000-character-long-sample-JSON-object...',
    };
    res.json(response);
  }, 5000); // Simulating a delay of 5 seconds
});

// Start the server
app.listen(port, () => {
  console.log(`Long polling server is running on port ${port}`);
});
