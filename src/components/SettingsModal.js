import React, { useEffect } from 'react'
import "./SettingsModal.css";
import CloseIcon from '@mui/icons-material/Close';

function SettingsModal(props) {

    useEffect((props) => {
        const close = (e) => {
            if (e.keyCode === 27) {
                props.setTrigger(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    return (props.trigger && (
        <div className='settings_overlay'>
            <div className="settings_inner">

                <CloseIcon onClick={() => props.setTrigger(false)} />
                <p>ESC</p>


                {props.children}
            </div>
        </div>
    ));
}

export default SettingsModal
