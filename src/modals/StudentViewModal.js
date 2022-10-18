import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { truncateClassYear } from '../lib/StudentProfileModel';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SuccessAlertSnackbar from '../widgets/SuccessAlertSnackbar';

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


function dropdown(classes, handler, activeClass) {
    const handleChange = (event) => {
        handler(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeClass}
                    label="Class"
                    onChange={handleChange}
                >
                    {classes.map((value, index) => {
                        return (<MenuItem key={index} value={value}>{value}</MenuItem>);
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default function StudentViewModal({ handleClose, open, student }) {

    const [activeClass, setActiveClass] = React.useState(student.classes[0]);
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
                        {student.firstName}
                    </Typography>
                    <Typography id="modal-modal-description" mb={2}>
                        {student.program} {truncateClassYear(student.classYear)}
                    </Typography>

                    {dropdown(student.classes, setActiveClass, activeClass)}

                    <Button variant="contained" sx={{ my: 2 }} startIcon={<AddIcon />} onClick={goToConfirmation}>
                        Invite to {activeClass}
                    </Button>
                </Box>
            </Modal>
            <SuccessAlertSnackbar open={alertOpen} setOpen={setAlertOpen} message={"Invited " + student.firstName + " to " + activeClass + "!"}/>
        </div>
    );
}
