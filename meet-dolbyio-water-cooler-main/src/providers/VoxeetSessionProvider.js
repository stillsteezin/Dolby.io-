import { useState, useEffect } from 'react';
import { session } from '@voxeet/voxeet-web-sdk';

const name = 'Test User';

export const VoxeetSessionProvider = ({ children }) => {
  const [isSessionLoaded, setIsSessionLoaded] = useState(false);

  useEffect(() => {
    session.open({ name }).then(() => {
      console.log('created a session');
      setIsSessionLoaded(true);
    });
  }, []);

  return isSessionLoaded ? children : <div>Loading session...</div>;
};
