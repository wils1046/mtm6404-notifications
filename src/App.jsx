import { useState } from 'react';
import notifications from './notifications.js';
import './App.css';

const NotificationApp = ({ notifications, setNotifications, children }) => {
  const clearNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-container">
      <header className="notification-header">
        {children}
      </header>

      {notifications.length > 0 && (
        <div className="clear-all-container">
          <button onClick={clearAllNotifications} className="clear-all-btn">
            Clear All Notifications
          </button>
        </div>
      )}

      <div>
        {notifications.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-text">
              No notifications to display
            </p>
          </div>
        ) : (
          <ul className="notifications-list">
            {notifications.map(notification => (
              <li key={notification.id} className="notification-item">
                <div className="notification-content">
                  <h3 className="notification-name">
                    {notification.name}
                  </h3>
                  <p className="notification-message">
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() => clearNotification(notification.id)}
                  className="clear-btn"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

function App() {
  const [currentNotifications, setCurrentNotifications] = useState(notifications);

  return (
    <>
      <NotificationApp notifications={currentNotifications} setNotifications={setCurrentNotifications}>
        <h1 className="notification-title">
          Notifications
        </h1>
        <p className="notification-count">
          You have {currentNotifications.length} notification{currentNotifications.length !== 1 ? 's' : ''}
        </p>
      </NotificationApp>
    </>
  );
}

export default App;