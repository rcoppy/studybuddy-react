import { Chip, createTheme, Icon, IconButton, ThemeProvider, Typography, useTheme, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useParams } from 'react-router-dom';
import ChatBubble from '../widgets/messaging/ChatBubble';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Send } from '@mui/icons-material';
import { GlobalContext } from '../lib/GlobalContext';
import { getHashFromUserIds } from '../utils/hashing';
import { useEffect, useRef, useState } from 'react';
import MessageModel from '../lib/MessageModel';
import { findDOMNode } from 'react-dom';

function getThreadMessages(id, allMessages) {
    if (!allMessages) return [];
    return Array.from(allMessages)
        .filter(msg => id === getHashFromUserIds(msg.recipient, msg.sender).toString());
}

function ChatBubbles({ currentUser, messages }) {
    return <>
        {messages.map(msg => {
            const isSender = currentUser.uuid === msg.sender;
            return <ChatBubble message={msg} isSender={isSender} />;
        })}
    </>
}

const dispatchMessage = (senderId, recipientId, messageHandler, message) => {
    // needs to be in list form
    const messageInstance = [new MessageModel({ sender: senderId, recipient: recipientId, message: message, wasOpened: true })];
    messageHandler(messageInstance);
};

function MessageThread() {
    let { id } = useParams();
    const theme = useTheme(); // createTheme({ palette: { mode: 'light' } });
    const [messageText, setMessageText] = useState('Compose message');
    const messagesRef = useRef(null);

    useEffect(() => {
        messagesRef.current.lastChild.scrollIntoView({ behavior: 'smooth' }); 
    });

    return (
        <GlobalContext.Consumer>
            {({ store, myProfile }) => {
                const messages = getThreadMessages(id, store.messages.values());

                let recipientId = null;
                let recipientName = "";
                if (messages.length > 0) {
                    recipientId = messages[0].sender === myProfile.uuid
                        ? messages[0].recipient : messages[0].sender;

                    const profile = store.profiles.get(recipientId);
                    recipientName = profile.firstName + " " + profile.lastName;
                }

                return <>
                    <Stack direction='row'>
                        <IconButton component={Link} to="/messages"><ArrowBackIcon /></IconButton>
                        <Typography variant='h4'>{recipientName}</Typography>
                    </Stack>
                    <Stack sx={{ height: '70vh', overflowY: 'scroll' }}>
                        <Stack sx={{
                            width: '100%', display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <ThemeProvider theme={theme}>
                                <div style={{width: "100%"}} ref={messagesRef}>
                                    <ChatBubbles currentUser={myProfile} messages={messages} />
                                </div>
                            </ThemeProvider>

                        </Stack>
                    </Stack>
                    <Stack noValidate autoComplete="off" component="form" className="keyboard" direction='row' sx={{ mt: 1, mb: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="filled"
                            size="small"
                            value={messageText}
                            onInput={e => setMessageText(e.target.value)}
                        />
                        <IconButton onClick={() => dispatchMessage(myProfile.uuid, recipientId, store.sendMessages, messageText)}>
                            <Send />
                        </IconButton>
                    </Stack>
                </>
            }}
        </GlobalContext.Consumer>
    );
}

export default MessageThread; 