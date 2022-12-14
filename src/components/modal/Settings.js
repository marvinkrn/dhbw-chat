import React from 'react'
import Button from '@mui/material/Button';
import { auth } from '../general/firebase';
import "./InnerModal.css";

function Settings() {

    const toggleMode = () => {
        if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        } else if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add("light")
            } else {
                document.documentElement.classList.add("dark")
            }
        }
    }

    return (
        <div className='inner_modal'>
            <h2>Einstellungen</h2>

            <h3>Erscheinungsbild</h3>

            <div className="settings_section">
                <h4 id="resizeTxt">Farbschema</h4>
                <Button id="test_btn" onClick={() => toggleMode()} >Farbschema wechseln</Button>
            </div>

            <div className='settings_logout'>
                <Button onClick={() => auth.signOut()} style={{ textTransform: 'none' }}> Abmelden</Button>
            </div>

        </div>

    )
}

export default Settings