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

function AppBar() {
    return (
        <MuiAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Link to="/profile/me">
                            <Avatar sx={{ mr: 2 }} />
                        </Link>
                        <Typography variant="h6">
                            StudyBuddies
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <Link to="/messages">
                            <IconButton aria-label="see messages" component="label">
                                <Badge badgeContent={14} color="warning">
                                    <MailIcon color="primary[50]" />
                                </Badge>
                            </IconButton>
                        </Link>
                        
                        <Link to="/invites">
                            <IconButton aria-label="see invites" component="label">
                                <Badge badgeContent={14} color="warning">
                                    <NotificationsIcon color="primary[50]" />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Stack>
                </Toolbar>
            </Container>
        </MuiAppBar>);
}

export default AppBar; 