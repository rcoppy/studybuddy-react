import { Chip, createTheme, Icon, IconButton, ThemeProvider, Typography, useTheme, TextField, Paper, Avatar } from '@mui/material';
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
                let recipientAvatarPath = ""; 
                if (messages.length > 0) {
                    recipientId = messages[0].sender === myProfile.uuid
                        ? messages[0].recipient : messages[0].sender;

                    const profile = store.profiles.get(recipientId);
                    recipientName = profile.firstName + " " + profile.lastName;
                    recipientAvatarPath = profile.avatarImagePath; 
                }

                return <>
                    <Paper elevation={4} sx={{ backgroundColor: theme.palette.primary[50] }}>
                        <Stack direction='row'>
                            <IconButton sx={{ px: 2 }}component={Link} to="/messages"><ArrowBackIcon /></IconButton>
                            <Avatar src={recipientAvatarPath} alt="conversation partner's name" sx={{ alignSelf: 'center', mr: 2, ml: 1 }}/> 
                            <Typography variant='h4' py={1}>{recipientName}</Typography>
                        </Stack>
                    </Paper>
                    <Stack sx={{ pt: 2, height: '70vh', overflowY: 'scroll', backgroundColor: theme.palette.grey[200] }}>
                        <div ref={messagesRef} style={{
                            width: '100%', display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <ThemeProvider theme={theme}>
                                <ChatBubble message={new MessageModel({ message: "hello" })} isSender={false} />
                                <ChatBubbles currentUser={myProfile} messages={messages} />
                            </ThemeProvider>
                        </div>
                    </Stack>
                    <Paper>
                        <Stack noValidate autoComplete="off" component="form" className="keyboard" direction='row' sx={{ backgroundColor: theme.palette.primary[50], pt: 1, pb: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                variant="filled"
                                size="small"
                                value={messageText}
                                onInput={e => setMessageText(e.target.value)}
                                sx={{ width: '35ch' }}
                            />
                            <IconButton onClick={() => dispatchMessage(myProfile.uuid, recipientId, store.sendMessages, messageText)}>
                                <Send />
                            </IconButton>
                        </Stack>
                    </Paper>
                </>
            }}
        </GlobalContext.Consumer>
    );
}

export default MessageThread; 