import React from 'react'
import './Message.css';
import Avatar from '@mui/material/Avatar';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function Message({ timestamp, user, message }) {


  const replaceStringWithEmoji = (string) => {
    const emojiMap = {
      ':)': '😊',
      ':(': '🙁',
      ':D': '😁',
      ';(': '😥',
      ':O': '😮',
      ';)': '😉',
      '8)': '😎',
      '>:@': '😡',
    };
    let regex = /(?::\)|:\(|:D|;\(|:O'|;\)|8\)|>:@)/g
    return string.replace(regex,(m)=>emojiMap[m] || m)
  };


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
        <div className="message_content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ h1: 'p', h2: 'p', h3: 'p', h4: 'p', h5: 'p', h6: 'p' }}>
            {replaceStringWithEmoji(message)}
          </ReactMarkdown>

        </div>

      </div>
    </div>
  )
}

export default Message