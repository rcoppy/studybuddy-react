import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import BlockIcon from '@mui/icons-material/Block';
import GroupIcon from '@mui/icons-material/Group';
import Alert from '@mui/material/Alert';
import AvatarImage from './static/images/avatar.jpg';
import { GlobalContext } from './lib/GlobalContext';

function getUnopenedMessagesCount(messages, userId) {
    let count = 0; 
    for (const m of messages.values()) {
        if (m.recipient !== userId || m.wasOpened) {
            continue; 
        }

        count += 1; 
    }

    return count; 
}

function AppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <MuiAppBar position='sticky'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Stack component={Link} to="/" direction="row" spacing={0.5} sx={{ color: 'white', textDecoration: 'none', ml: 1, display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <GroupIcon fontSize='large' htmlColor='white' />
                            <Typography variant="h6" fontSize='1.15rem' fontWeight='bold'>
                                StudyBuddies
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={0.25} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <Link to="/">
                                <IconButton aria-label="see homepage" component="label">
                                    <HomeIcon htmlColor="white" />
                                </IconButton>
                            </Link>

                            <Link to="/messages">
                                <IconButton aria-label="see messages" component="label">
                                    <GlobalContext.Consumer>
                                        {({ store, myProfile }) =>
                                        <Badge badgeContent={getUnopenedMessagesCount(store.messages, myProfile.uuid)} color="warning">
                                            <MailIcon htmlColor="white" />
                                        </Badge>}
                                    </GlobalContext.Consumer>
                                </IconButton>
                            </Link>

                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ mr: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }} alt="Profile picture" src={AvatarImage} />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 23,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            >
                                <MenuItem component={Link} to="/profile/me">
                                    <Avatar alt="Profile badge" />Profile
                                </MenuItem>
                                {/* <MenuItem component={Link} to="/group/me">
                                    <ListItemIcon>
                                        <GroupIcon fontSize="small" />
                                    </ListItemIcon>
                                    My Groups
                                </MenuItem> */}
                                <Divider />
                                <MenuItem component={Link} to="/blocklist">
                                    <ListItemIcon>
                                        <BlockIcon fontSize="small" />
                                    </ListItemIcon>
                                    Blocklist
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <PrivacyTipIcon fontSize="small" />
                                    </ListItemIcon>
                                    Privacy
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Stack>
                    </Toolbar>
                </Container>
            </MuiAppBar>
            {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
        </>);
}

export default AppBar; 