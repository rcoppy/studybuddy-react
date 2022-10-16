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

function AppBar() {
    return (
        <MuiAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2 }} />
                        <Typography variant="h6">
                            StudyBuddies
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Badge badgeContent={14} color="secondary">
                            <MailIcon color="primary[50]" />
                        </Badge>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon color="primary[50]" />
                        </Badge>
                    </Stack>
                </Toolbar>
            </Container>
        </MuiAppBar>);
}

export default AppBar; 