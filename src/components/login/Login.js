import React from 'react'
import Button from '@mui/material/Button';
import { auth, provider } from '../general/firebase';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch((ex) => alert(ex.message));
  }

  return (
    <div className='login'>
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