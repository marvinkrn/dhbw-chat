import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import SidebarChannel from './SidebarChannel';
import SettingsIcon from '@mui/icons-material/Settings';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import database from '../general/firebase';
import Modal from '../modal/Modal';
import Settings from '../modal/Settings';

function Sidebar() {

    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    const [modal, setModal] = useState(false);

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

    const handleAddChannel = () => {
        const channelName = prompt("Name für neuen Channel eingeben:");

        if (channelName) {
            database.collection('channels').add({
                channelName: channelName, // fires useEffect listener oben
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
                </div>

                <div className="sidebar_profile_settings">

                    <SettingsIcon onClick={() => setModal(true)} />

                    <Modal trigger={modal} setTrigger={setModal} >
                        <Settings />
                    </Modal>

                </div>

            </div>
        </div>



    )
}

export default Sidebar