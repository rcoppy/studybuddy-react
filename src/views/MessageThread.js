import { Chip, createTheme, Icon, IconButton, ThemeProvider, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { useParams } from 'react-router-dom';
import ChatBubble from '../widgets/messaging/ChatBubble';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Send } from '@mui/icons-material';
import { GlobalContext } from '../lib/GlobalContext';
import { getHashFromUserIds } from '../utils/hashing';

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

function MessageThread() {
    let { id } = useParams();

    const theme = useTheme(); // createTheme({ palette: { mode: 'light' } });

    return (
        <GlobalContext.Consumer>
            {({ store, myProfile }) =>
                <>
                    <Stack direction='row'>
                        <IconButton component={Link} to="/messages"><ArrowBackIcon /></IconButton>
                        <Typography variant='h4'>Sean Bean</Typography>
                    </Stack>
                    <Stack sx={{ maxHeight: '80vh', overflowY: 'scroll' }}>
                        <Stack sx={{
                            width: '100%', display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <ThemeProvider theme={theme}>
                                <ChatBubbles currentUser={myProfile} messages={getThreadMessages(id, store.messages.values())} />
                            </ThemeProvider>

                        </Stack>
                    </Stack>
                    <Stack className="keyboard" direction='row' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Chip label="Text that I am typing right now..." />
                        <IconButton>
                            <Send />
                        </IconButton>
                    </Stack>
                </>
            }
        </GlobalContext.Consumer>
    );
}

export default MessageThread; 