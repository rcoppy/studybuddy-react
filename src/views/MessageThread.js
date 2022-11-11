import { Chip, createTheme, Icon, IconButton, ThemeProvider, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { useParams } from 'react-router-dom';
import ChatBubble from '../widgets/messaging/ChatBubble';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Send } from '@mui/icons-material';

function MessageThread() {
    let { id } = useParams();

    const theme = useTheme(); // createTheme({ palette: { mode: 'light' } });

    return (
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
                        <ChatBubble isSender={true} />
                        <ChatBubble isSender={true} />
                        <ChatBubble isSender={false} />
                        <ChatBubble isSender={true} />
                        <ChatBubble isSender={false} />
                        <ChatBubble isSender={true} />
                        <ChatBubble isSender={true} />
                        <ChatBubble isSender={false} />
                        <ChatBubble isSender={true} />
                        <ChatBubble isSender={false} />
                        <ChatBubble isSender={false} />
                        <ChatBubble isSender={true} />
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
    );
}

export default MessageThread; 