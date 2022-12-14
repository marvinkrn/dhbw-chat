import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import SettingsModal from './Modal';
import Datainfo from './Datainfo';

function Login() {

  const [settingsModal, setSettingsModal] = useState(true);

  const signIn = () => {
    //google login
    auth.signInWithPopup(provider).catch((ex) => alert(ex.message));
  }

  return (
    <div className='login'>

        <SettingsModal trigger={settingsModal} setTrigger={setSettingsModal}>
          <Datainfo />
          <Button class="accept_button" onClick={() => setSettingsModal(false)} >Ich stimme zu</Button>
        </SettingsModal>
        

      <div className="login_overlay">
        <div className="login_header">
          <img src={'https://i.imgur.com/Y0R8xPZ.png'} alt="" />
          <h1>DHBW Chat</h1>
        </div>
      
        <Button onClick={signIn} style={{ textTransform: 'none' }}><GoogleIcon /> Weiter mit Google</Button>
      </div>
    </div>
  )
}

export default Login