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
