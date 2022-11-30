import * as React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Preview } from '@mui/icons-material';
import { Avatar, Paper, Badge, IconButton, Typography, Card, CardActionArea } from '@mui/material';
import { Stack } from '@mui/material';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import { messageTimeFromDate } from '../../utils/dateTime';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function ThreadPreview({ name, lastSender, message, isUnopened = false, openMessage = () => {}, threadId }) {
    const [pending, setPending] = React.useState(isUnopened);

    const handleClick = () => {
        setPending(false); 
        openMessage(message); // TODO: this only sets last unopened message in a chain to open, not all pending messages (shouldn't be noticeable but is lazy)
    };

    return (
        <Card direction='row' sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mb: 1
        }}>
            <Stack className='left'>
                <IconButton aria-label='avatar'>
                    <StyledBadge color="primary" badgeContent=' ' invisible={!pending}>
                        <Avatar sx={{ width: '3.5rem', height: '3.5rem' }}>{name}</Avatar>
                    </StyledBadge>
                </IconButton>
            </Stack>

            <CardActionArea className='right' component={Link} to={`/messages/${threadId}`} onClick={handleClick} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                flexGrow: 1,
                padding: 1,
                fontWeight: (pending ? 'bold' : 'normal'),
                minWidth: 0
            }}>
                <Stack direction='row' sx={{ alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="p">{name}</Typography>
                    <Typography variant="p">{messageTimeFromDate(message.timestamp)}</Typography>
                </Stack>
                <Stack sx={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="p" fontSize='0.7rem'>{lastSender}: {message.message}</Typography>
                </Stack>
            </CardActionArea>

            {/* <Stack className='right' sx={{
                width: '20%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <Typography sx={{ padding: 1 }} variant='p'>Hello</Typography>
            </Stack> */}
        </Card>
    );
}