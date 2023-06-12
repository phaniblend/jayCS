import React, { useEffect, useState } from 'react';

// We are creating a functional component called WebSocketComponent.
const WebSocketComponent = () => {
  // We declare a new state variable called 'message', and a function to update it, 'setMessage'. 
  // At the beginning, 'message' is just an empty string.
  const [message, setMessage] = useState('');

  // useEffect allows us to perform side effects in our component.
  // In this case, we use it to establish a WebSocket connection and handle incoming messages when the component is mounted.
  useEffect(() => {
    // We establish a WebSocket connection to "ws://localhost:8002".
    // This connection will allow us to receive real-time updates from the server.
    const socket = new WebSocket('ws://localhost:8002');

    // We set up an event handler for incoming messages from the server.
    // When the server sends a message, this function will be triggered.
    socket.onmessage = (event) => {
      // The server sends us data in the form of a JSON string.
      // We need to parse this string into an object to use it.
      const data = JSON.parse(event.data);

      // We update our 'message' state with the data we got from the server.
      setMessage(data.message);
    };

    // When the component is unmounted, we want to clean up after ourselves to avoid memory leaks.
    // In this case, we need to close the WebSocket connection.
    // The function we return from useEffect will be called when the component is about to be unmounted.
    return () => {
      socket.close();
    };
  }, []); // The empty array means that the effect runs once when the component is mounted, and cleanup runs when it is unmounted.

  // The component renders a div that displays the 'message' state.
  return (
    <div>
      <h2>WebSocket Example</h2>
      <p>Message: {message}</p>
    </div>
  );
};

// We export the component so that it can be used in other parts of our application.
export default WebSocketComponent;
