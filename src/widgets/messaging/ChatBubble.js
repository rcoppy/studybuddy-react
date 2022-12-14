import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Card, CardContent, ThemeProvider, Typography, useTheme } from '@mui/material';
import { createTheme } from '@mui/system';
import { messageTimeFromDate } from '../../utils/dateTime';

export default function ChatBubble({ isSender, message }) {

    const baseTheme = useTheme();

    const offset = isSender ? '16%' : '-16%';
    const msgColor = isSender ? baseTheme.palette.primary : baseTheme.palette.secondary;

    const theme = createTheme(baseTheme, {
        palette: {
            mode: 'light',
            background: {
                paper: msgColor[200],
                chip: msgColor[100],
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{borderRadius: 3, mb: 3, width: '65%', position: 'relative', left: offset }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='p'>{message.message}</Typography>
                    <Typography fontSize='0.8rem' variant='p' textAlign='right'>{messageTimeFromDate(message.timestamp)}</Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
