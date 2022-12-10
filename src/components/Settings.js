import React from 'react'
import Button from '@mui/material/Button';
import { auth } from './firebase';
import "./Settings.css";
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FontSizeChanger from 'react-font-size-changer';


function Settings() {
    return (
        <div className='settings'>
            <h2>Einstellungen</h2>

            <h3>Erscheinungsbild</h3>

            <h3>Schriftgröße</h3>
            <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}                 
        />
                
            <div className='settings_fontSize'>
                <FontDownloadIcon fontSize="small"/>
                <FontDownloadIcon fontSize="medium"/>
                <FontDownloadIcon fontSize="large"/>
            </div>

            <div className='settings_logout'>
                <Button onClick={() => auth.signOut()} style={{ textTransform: 'none' }}> Abmelden</Button>
            </div>

        </div>

    )
}

export default Settings