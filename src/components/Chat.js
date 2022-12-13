import React, { useEffect, useState, useRef } from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import database from './firebase';
import firebase from 'firebase/compat/app';

function Chat() {
    const bottomRef = useRef(null);
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            database.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    }, [channelId]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'instant' });
    }, [messages]);

    function sendMessage(e) {
        e.preventDefault();
        if (input) {
            database.collection('channels').doc(channelId).collection('messages').add({
                message: input,
                user: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }

        setInput("");
    }

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />

            <div className="chat_messages">

                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
                <div ref={bottomRef} />
            </div>

            <div className="chat_input">
                <form>
                    <input value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)} placeholder={channelName != null ? `Nachricht an ${channelName}` : 'Kein Channel ausgewählt'} />


                    <button disabled={!channelId} onClick={sendMessage} className='chat_input_button' type='submit'>Senden</button>
                </form>
                <div className="chat_input_icons">

                </div>
            </div>
        </div>

    )
}

export default Chat