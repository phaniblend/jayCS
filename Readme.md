# JayCS
client server req-resp optimization for Jay
### Below instructions will allow you to run the app and servers simultaneously in all three approaches.

 1. Open separate terminals or command prompt windows.
In the first terminal, navigate to the directory where the long polling server file (longpollserver.js) is located. 
 - [ ] Run the command node longpollserver.js to start the long polling server.
 - [ ] In the second terminal, navigate to the directory where the SSE server file (sseserver.js) is located. Run the command node sseserver.js to start the SSE server.
 - [ ] In the third terminal, navigate to the directory where the WebSocket server file (websocketserver.js) is located. Run the command node websocketserver.js to start the WebSocket server.
 - [ ] In a new terminal, navigate to the directory where your React app is located. Run the command`npm install` and  `npm start` to start the React development server.
The React app should open in your browser, and the ***long polling***, ***SSE,*** and ***WebSocket*** components will communicate with their respective servers running on separate ports.
By following these steps, you will be able to run the app and servers simultaneously in all three approaches.
