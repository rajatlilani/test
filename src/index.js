import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:3001/')
      .build();

    connection.on('ReceiveData', (newData) => {
      setData(prevData => [...prevData, newData]);
      sendNotification('New Data Received', { body: `New Data: ${newData}` });
    });

    connection.start().catch(err => console.error(err));

    return () => {
      connection.stop();
    };
  }, []);

  function requestNotificationPermission() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permission granted for notifications');
        }
      });
    }
  }

  function sendNotification(title, options) {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    }
  }

  return (
    <div>
      <h1>Data Stream</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;






import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const SignalRHub = () => {
  const [hubConnection, setHubConnection] = useState(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:3001/dataHub')
      .build();

    connection.start().then(() => {
      setHubConnection(connection);
    });

    return () => {
      if (hubConnection !== null) {
        hubConnection.stop();
      }
    };
  }, [hubConnection]);

  return null;
};

export default SignalRHub;





import React, { useEffect, useState } from 'react';
import SignalRHub from './SignalRHub';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const notificationPermission = Notification.permission;
    if (notificationPermission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>SignalR Web Push Notification Demo</h1>
      <SignalRHub />
    </div>
  );
};

export default App;







export function requestNotificationPermission() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Permission granted for notifications");
      }
    });
  }
}

export function sendNotification(title, options, timeout) {
  if (Notification.permission === "granted") {
    setTimeout(() => {
      new Notification(title, options);
    }, timeout);
  }
}





const mockHub = {
  on: (eventName, callback) => {
    const events = {
      ReceiveMessage: "This is a mock message",
    };

    if (events[eventName]) {
      callback(events[eventName]);
    }
  },
  start: () => Promise.resolve(),
};

export default mockHub;





import React, { useEffect } from "react";
import { requestNotificationPermission, sendNotification } from "./PushNotification";
import mockHub from "./MockSignalRHub";

const App = () => {
  useEffect(() => {
    requestNotificationPermission();
    mockHub.start();

    const notificationInterval = setInterval(() => {
      mockHub.on("ReceiveMessage", (message) => {
        sendNotification("New Message", { body: message }, 0);
      });
    }, 10000);

    return () => clearInterval(notificationInterval);
  }, []);

  return <div>React App with Mock SignalR and Web Push Notifications</div>;
};

export default App;






import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
