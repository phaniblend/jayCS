// Jay, we need to import the useEffect and useState hooks from the 'react' package.
// useEffect is used to perform side effects in functional components, such as making API calls.
// useState is used to manage state in functional components.
import React, { useEffect, useState } from 'react';

const LongPollComponent = () => {
  // State to store the message and error
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the server using long polling
    const fetchData = async () => {
      try {
        // Make a GET request to the server endpoint
        const response = await fetch('http://localhost:8001/data');

        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Error fetching data');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Update the message state with the received data
        setMessage(data.message);
      } catch (error) {
        // Handle the error by setting the error state
        setError('Error retrieving data');
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h2>Long Polling Example</h2>
      {/* Display the error message if an error occurs */}
      {error && <p>{error}</p>}
      <p>Message: {message}</p>
    </div>
  );
};

export default LongPollComponent;
