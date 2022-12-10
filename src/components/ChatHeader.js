import React from 'react'
import './ChatHeader.css';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';

function ChatHeader({ channelName }) {
  return (
    <div className='chat_header'>
      <div className="chat_header_left">

        {channelName != null ? <ChatIcon /> : <SpeakerNotesOffIcon />}

        <h3>{channelName}</h3>
      </div>

      <div className="chat_header_search">
        <input placeholder='Suche' />
        <SearchIcon />
      </div>

    </div>
  )
}

export default ChatHeader