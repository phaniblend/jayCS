// Jay, here we are importing the useEffect and useState hooks from the 'react' package.
// useEffect is used to perform side effects in functional components, such as subscribing to server-sent events.
// useState is used to manage state in functional components.
import React, { useEffect, useState } from 'react';

// We are creating a functional component called ServerSentEventsComponent.
const ServerSentEventsComponent = () => {
  // We declare a new state variable called 'message', and a function to update it, 'setMessage'. 
  // At the beginning, 'message' is just an empty string.
  const [message, setMessage] = useState('');

  // useEffect lets us perform side effects in our component.
  // In this case, we use it to subscribe to server-sent events when the component is mounted.
  useEffect(() => {
    // We create an EventSource that will open a persistent connection to "/api/server-sent-events".
    // This allows us to receive real-time updates from the server.
    const eventSource = new EventSource('/api/server-sent-events');
    
    // We add an event listener for 'message' events. 
    // When we receive a message from the server, we update our 'message' state with the event data.
    eventSource.addEventListener('message', (event) => {
      setMessage(event.data);
    });

    // We return a cleanup function that closes the EventSource when the component is unmounted.
    // This is necessary to avoid memory leaks.
    return () => {
      eventSource.close();
    };
  }, []); // The empty array means that the effect runs once when the component is mounted, and cleanup runs when it is unmounted.

  // The component renders a div that displays the 'message' state.
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

// We export the component so that it can be used in other parts of our application.
export default ServerSentEventsComponent
