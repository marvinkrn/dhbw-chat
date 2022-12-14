import React, { useState } from 'react'
import './ChatHeader.css';
import ChatIcon from '@mui/icons-material/Chat';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import HelpIcon from '@mui/icons-material/Help';
import Help from '../modal/Help';
import Modal from '../modal/Modal';

function ChatHeader({ channelName }) {

  const [modal, setModal] = useState(false);

  return (
    <div className='chat_header'>
      <div className="chat_header_left">

        {channelName != null ? <ChatIcon /> : <SpeakerNotesOffIcon />}

        <h3>{channelName}</h3>
      </div>

      <div className="chat_header_right">
        <HelpIcon onClick={() => setModal(true)} />

        <Modal trigger={modal} setTrigger={setModal}>
          <Help />
        </Modal>
      </div>


    </div>
  )
}

export default ChatHeader