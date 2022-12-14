import React, { useState } from 'react';
import './ChatHeader.css';
import ChatIcon from '@mui/icons-material/Chat';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import HelpIcon from '@mui/icons-material/Help';
import Help from './Help';
import SettingsModal from './Modal';

function ChatHeader({ channelName }) {

  const [settingsModal, setSettingsModal] = useState(false);

  return (
    <div className='chat_header'>
      <div className="chat_header_left">

        {channelName != null ? <ChatIcon /> : <SpeakerNotesOffIcon />}

        <h3>{channelName}</h3>
      </div>

      <div className="chat_header_right">
        {/**<div className="chat_header_search">
          <input placeholder='Suche' />
          <SearchIcon />
          </div>**/}
        <HelpIcon onClick={() => setSettingsModal(true)} />

        <SettingsModal trigger={settingsModal} setTrigger={setSettingsModal}>
          <Help />
        </SettingsModal>
      </div>


    </div>
  )
}

export default ChatHeader