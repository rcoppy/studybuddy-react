import * as React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Preview } from '@mui/icons-material';
import { Avatar, Paper, Badge, IconButton, Typography, Card, CardActionArea, Button } from '@mui/material';
import { Stack } from '@mui/material';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
// import { messageTimeFromDate } from '../../utils/dateTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function InviteCard({ avatarImagePath, memberCount, senderName, groupName, handleAccept = () => { }, handleReject = () => { } }) {
    // const [pending, setPending] = React.useState(isUnopened);

    // const handleClick = () => {
    //     setPending(false); 
    //     openMessage(message); // TODO: this only sets last unopened message in a chain to open, not all pending messages (shouldn't be noticeable but is lazy)
    // };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleDotsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDotsClose = () => {
        setAnchorEl(null);
    };

    const closeAndReject = () => {
        handleReject(); 
        handleDotsClose(); 
    }

    return (
        <Card direction='row' sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mb: 1
        }}>
            <Stack className='left'>
                <IconButton aria-label='avatar'>
                    {/* <StyledBadge color="primary" badgeContent=' ' invisible={true}> */}
                    <Avatar src={avatarImagePath} sx={{ width: '3.5rem', height: '3.5rem' }} />
                    {/* </StyledBadge> */}
                </IconButton>
            </Stack>

            <CardActionArea className='right' sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                flexGrow: 1,
                padding: 1,
                // fontWeight: (pending ? 'bold' : 'normal'),
                minWidth: 0
            }}>
                <Stack direction='row' sx={{ alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', whiteSpace: 'normal', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="p">{senderName} invited you to <strong>{groupName}</strong></Typography>
                    {/* <Button variant="outlined" size="small" onClick={handleAccept}>Accept</Button> */}
                </Stack>
                {/* <Stack sx={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="p" fontSize='0.7rem'>Group has {memberCount} member{memberCount !== 1 && 's'}</Typography>
                </Stack> */}
            </CardActionArea>

            <Stack className='right' sx={{
                width: '20%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                {/* <Typography sx={{ padding: 1 }} variant='p'>Hello</Typography> */}
                <Button variant="outlined" size="small" onClick={handleAccept} sx={{ mx: 1, alignSelf: 'center' }}>Accept</Button>

                <IconButton size='small' id="basic-button"
                    aria-controls={menuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? 'true' : undefined}
                    onClick={handleDotsClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleDotsClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeAndReject}>
                        <ListItemIcon>
                            <RemoveCircleOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Dismiss</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={closeAndReject}>
                        <ListItemIcon>
                            <BlockIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Block {senderName}</ListItemText>
                    </MenuItem>
                </Menu>
            </Stack>
        </Card>
    );
}