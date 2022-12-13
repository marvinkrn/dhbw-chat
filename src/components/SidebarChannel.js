import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/appSlice';
import "./SidebarChannel.css";
import ChatIcon from '@mui/icons-material/Chat';

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div className='sidebar_channel' onClick={() => {
      dispatch(setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
      );

    }}>
      <h4>
        <span className="sidebar_channel_icon"><ChatIcon fontSize='medium' /></span>{channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel