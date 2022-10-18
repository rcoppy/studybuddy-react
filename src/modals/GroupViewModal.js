import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { truncateClassYear } from '../lib/StudentProfileModel';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SuccessAlertSnackbar from '../widgets/SuccessAlertSnackbar';
import { Stack } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function IntroMessage() {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Class</InputLabel> */}
                <TextField
                    id="outlined-multiline-static"
                    label="Intro message"
                    multiline
                    rows={4}
                    defaultValue="" />
            </FormControl>
        </Box>
    );
}

export default function GroupViewModal({ handleClose, open, group }) {

    const [alertOpen, setAlertOpen] = React.useState(false);

    const goToConfirmation = () => {
        handleClose();
        setAlertOpen(true);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {group.title}
                    </Typography>
                    <Typography id="modal-modal-description" mb={2}>
                        {group.subject}, {group.students.length} members
                    </Typography>

                    <Typography variant="p" mb={3}>Send a greeting with your invite!</Typography>
                    <IntroMessage mt={2} />
                    <Stack sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" sx={{ my: 2, mx: 3}} startIcon={<SendIcon />} onClick={goToConfirmation}>
                            Ask to join {group.title}
                        </Button>
                    </Stack>
                </Box>
            </Modal>
            <SuccessAlertSnackbar open={alertOpen} setOpen={setAlertOpen} message={"Asked to join " + group.title + " for " + group.subject + "!"} />
        </div>
    );
}
