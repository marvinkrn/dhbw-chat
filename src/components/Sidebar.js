import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import SidebarChannel from './SidebarChannel';
import SettingsIcon from '@mui/icons-material/Settings';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import database from './firebase';
import Tooltip from '@mui/material/Tooltip';
import SettingsModal from './SettingsModal';
import Settings from './Settings';

function Sidebar() {

    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    const [settingsModal, setSettingsModal] = useState(false);

    useEffect(() => {
        database.collection('channels').onSnapshot(snapshot =>
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            )
        );
    }, []);


    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27)
                setSettingsModal(false);

        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Chat hinzufügen:");

        if (channelName) {
            database.collection('channels').add({
                channelName: channelName, //fires useEffect Listener oben
            })
        }
    }



    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <div className="sidebar_top_logo">
                    <img src={'https://i.imgur.com/Y0R8xPZ.png'} alt="" />
                </div>

                <h1>DHBW Chat</h1>
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channels_header">
                    <div className="sidebar_channels_heading">
                        <h4>Channels</h4>
                    </div>
                    <div className='sidebar_add_channel'>
                        <AddIcon onClick={handleAddChannel} />
                    </div>

                </div>

                <div className="sidebar_channels_list">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                    ))}
                </div>
            </div>

            <div className="sidebar_profile">
                <Avatar src={user.photo} />
                <div className="sidebar_profile_info">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid}</p>
                </div>

                <div className="sidebar_profile_settings">
                    <Tooltip title="Einstellungen" arrow
                        componentsProps={{
                            tooltip: {
                                sx: {
                                    bgcolor: 'common.black',
                                    fontSize: 15,

                                    '& .MuiTooltip-arrow': {
                                        color: 'common.black',
                                    },

                                },
                            },
                        }}>

                        <SettingsIcon onClick={() => setSettingsModal(true)} />

                    </Tooltip>

                    <SettingsModal trigger={settingsModal} setTrigger={setSettingsModal} >
                        <Settings />
                    </SettingsModal>

                </div>

            </div>
        </div>



    )
}

export default Sidebar