import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default () => {
    const [newMessageText, setNewMessageText] = useState('');
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = io('http://localhost:3001');
        setSocket(socket);
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('new message posted', newMessage => {
                console.log('New Message!')
                setMessages([...messages, newMessage]);
            });
        }
    }, [messages, socket]);

    return (
        <>
        <div>
            <h3>Messages</h3>
            {messages.map(message => (
                <p key={message}>{message}</p>
            ))}
        </div>
        <input value={newMessageText} onChange={e => setNewMessageText(e.target.value)} />
        <button onClick={() => {
            socket.emit('new message', newMessageText);
            setNewMessageText('');
        }}>Send</button>
        </>
    )
}