const express = require('express');
const app = express();
const port = 8002;

// SSE server to send real-time updates

app.get('/events', (req, res) => {
  // Set the response headers for Server-Sent Events
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Send a sample SSE event every 5 seconds
  setInterval(() => {
    const event = {
      message: 'Server-Sent Event Example',
      data: 'Sample SSE data',
      timestamp: Date.now(),
    };
    res.write(`data: ${JSON.stringify(event)}\n\n`);
  }, 5000);
});

// Start the server
app.listen(port, () => {
  console.log(`SSE server is running on port ${port}`);
});
