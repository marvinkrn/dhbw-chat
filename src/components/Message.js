import React from 'react'
import './Message.css';
import Avatar from '@mui/material/Avatar';

function Message({ timestamp, user, message }) {
  return (
    <div className='message'>
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>{user.displayName}
          <span className='message_time'>
            {new Date(timestamp?.toDate()).toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
            &nbsp;Uhr
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message