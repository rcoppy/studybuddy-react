import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ConfirmStateChangeDialog from '../modals/ConfirmStateChangeDialog';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import StudentProfileModel from '../lib/StudentProfileModel';
import { GlobalContext } from '../lib/GlobalContext';

function truncateClassYear(year) {
    const str = year.toString();
    return "'" + str.substring(str.length - 2, str.length);
}

function MyProfile() {
    // const [myProfile, setProfile] = React.useState(new StudentProfileModel());

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setOpen(true);
    };

    const handleClose = (isConfirmed, currentProfile, updateMyProfile) => {
        setOpen(false);

        // toggle based on confirmation
        currentProfile.amLookingForGroups = isConfirmed ? !currentProfile.amLookingForGroups : currentProfile.amLookingForGroups;
        updateMyProfile(currentProfile);
    };

    return (
        <>
            <GlobalContext.Consumer>
                {({myProfile, updateMyProfile}) => (<>
                    <Typography variant="h3">My profile</Typography>

                    <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 1 }}>
                        <Stack direction="column" spacing={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                alt="My profile photo"
                                // src="/static/images/avatar/1.jpg"
                                sx={{ width: '30vw', height: '30vw', mb: 1 }}
                            />
                            <Typography variant="h4" sx={{ textAlign: 'center' }}>{myProfile.firstName} {myProfile.lastName}, {myProfile.program} {truncateClassYear(myProfile.classYear)}
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Typography>
                            <Typography variant="h5" sx={{ textAlign: 'center' }}>{myProfile.contactInfo.email}, {myProfile.contactInfo.phone}
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Typography>

                            <FormControl component="fieldset" variant="standard">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch checked={myProfile.amLookingForGroups} onChange={handleChange} name="amLookingForGroups" />
                                        }
                                        label={myProfile.amLookingForGroups ? "I'm looking for groups" : "I'm not looking for groups"}
                                    />
                                </FormGroup>
                            </FormControl>
                        </Stack>
                    </Stack>



                    <Typography variant="h4">My classes
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Typography>

                    <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', mr: 2, ml: 2, mb: 2 }} spacing={1}>
                        {myProfile.classes.map((c, index) => {
                            return (
                                <Chip key={index} label={c} variant="outlined" />
                            );
                        })}
                    </Stack>

                    <Typography variant="h4">My interests
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Typography>

                    <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', mr: 2, ml: 2, mb: 2 }} spacing={1}>
                        {myProfile.interests.map((c, index) => {
                            return (
                                <Chip key={index} label={c} variant="outlined" />
                            );
                        })}
                    </Stack>

                    <Typography variant="h4">My availability
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Typography>

                    <ConfirmStateChangeDialog
                        open={open}
                        onClose={(isConfirmed) => handleClose(isConfirmed, myProfile, updateMyProfile)}
                        title={myProfile.amLookingForGroups ? "Stop looking for groups?" : "Start looking for groups?"}
                        message={myProfile.amLookingForGroups ? "Other students won't be able to invite you to groups or see you in the profile gallery."
                            : "Other students will be able to invite you to groups and see you in the profile gallery."}
                    />
                </>)}
            </GlobalContext.Consumer>
        </>
    );
}

export default MyProfile; 