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

function MyProfile() {
    const [state, setState] = React.useState({
        amLookingForGroups: true,
    });

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setOpen(true);
    };

    const handleClose = (isConfirmed) => {
        setOpen(false);
        setState({
            ...state,
            amLookingForGroups: isConfirmed ? !state.amLookingForGroups : state.amLookingForGroups, // toggle based on confirmation
        });
    };

    return (
        <>
            <Typography variant="h3">My profile</Typography>

            <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 1 }}>
                <Avatar
                    alt="My profile photo"
                    // src="/static/images/avatar/1.jpg"
                    sx={{ width: '30vw', height: '30vw' }}
                />
            </Stack>

            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch checked={state.amLookingForGroups} onChange={handleChange} name="amLookingForGroups" />
                        }
                        label={state.amLookingForGroups ? "I'm looking for groups" : "I'm not looking for groups"}
                    />
                </FormGroup>
            </FormControl>

            <ConfirmStateChangeDialog
                open={open}
                onClose={handleClose}
                title={state.amLookingForGroups ? "Stop looking for groups?" : "Start looking for groups?"}
                message={state.amLookingForGroups ? "Other students won't be able to invite you to groups or see you in the profile gallery." 
                        : "Other students will be able to invite you to groups and see you in the profile gallery."}
            />
        </>
    );
}

export default MyProfile; 