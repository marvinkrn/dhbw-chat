import "./SettingsModal.css";
import CloseIcon from '@mui/icons-material/Close';

function SettingsModal(props) {

    

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
