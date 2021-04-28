import React from 'react';
import './scss/NotificationList.scss';
import image from '../images/orange.png';
import closeImg from '../images/close.svg';

class NotificationsListItem extends React.Component {

  render() {

    return (
      <div className="NotifsListItem">
        <img
          className="NotifsListItem__avatar"
          src = {image}
          alt={`${this.props.notif.name} ${this.props.notif.typeN}`}
        />

        <div className = "Detail">
          <strong>
            {this.props.notif.name} 
            <br/>
            {this.props.notif.typeN}
          </strong>
          <br />
          {this.props.notif.detail}

        </div>
    
      <button className="button_close">
      <img
          className="NotifsListItem__close"
          src = {closeImg}
          alt="Clear Notification"
          />
      </button>
        
      </div>
    );
  }
}

class NotificationsList extends React.Component {
  render() {
    return (
      <div className="NotifsList">
        <ul className="list-unstyled">
          {this.props.notifications.map(notif => {
            return (
              <li key={notif.id}>
                <NotificationsListItem notif={notif} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NotificationsList; 