import "./Modal.css";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

function SettingsModal(props) {

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27)
            props.setTrigger(false)

        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [props]);

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
