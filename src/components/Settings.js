import React from 'react'
import Button from '@mui/material/Button';
import { auth } from './firebase';
import "./Settings.css";
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

function Settings() {



    return (
        <div className='settings'>
            <h2>Einstellungen</h2>

            <h3>Erscheinungsbild</h3>

            <h4>Farbschema</h4>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    
                  
                >
                    <FormControlLabel  control={<Radio />} label="Hell" />
                    <FormControlLabel  control={<Radio />} label="Dunkel" />
                </RadioGroup>
            </FormControl>
            <h4>Schriftgröße</h4>
            <div className='settings_fontSize'>
                <FontDownloadIcon fontSize="small" />
                <FontDownloadIcon fontSize="medium" />
                <FontDownloadIcon fontSize="large" />
            </div>

            <div className='settings_logout'>
                <Button onClick={() => auth.signOut()} style={{ textTransform: 'none' }}> Abmelden</Button>
            </div>

        </div>

    )
}

export default Settings