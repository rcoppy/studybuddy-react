import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { truncateClassYear } from '../lib/StudentProfileModel';
import { FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SuccessAlertSnackbar from '../widgets/SuccessAlertSnackbar';
import { GlobalContext } from '../lib/GlobalContext';

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


function dropdown(classes, groups, handler, activeGroup) {

    const handleChange = (event) => {
        handler(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeGroup}
                    label="Group"
                    onChange={handleChange}
                >
                    {Array.from(groups.values()).map((group, index) => {
                        if (!classes.includes(group.subject)) return <></>;

                        const concat = `${group.title} (${group.subject})`;
                        return (<MenuItem key={index} value={concat}>{concat}</MenuItem>);
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default function StudentViewModal({ handleClose, open, student }) {

    const [activeGroup, setActiveGroup] = React.useState('');
    const [alertOpen, setAlertOpen] = React.useState(false);

    const goToConfirmation = () => {
        handleClose();
        setAlertOpen(true);
    };

    return (
        <div>
            <GlobalContext.Consumer>
                {({ myGroups }) => 

                    <>
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
                                <Typography mb={2}> {/* id="modal-modal-description" */}
                                    {student.program} {truncateClassYear(student.classYear)}
                                </Typography>
                                <Typography mb={2}>
                                    Enrollment in-common
                                </Typography>

                                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    {student.classes.map((c, index) => {
                                        return (
                                            <Box mr={1} mb={1}>
                                                <Chip key={index} label={c} variant="outlined" size="small" />
                                            </Box>
                                        );
                                    })}
                                </Box>

                                {dropdown(student.classes, myGroups, setActiveGroup, activeGroup)}

                                <Button variant="contained" sx={{ my: 2 }} startIcon={<AddIcon />} onClick={goToConfirmation}>
                                    Invite to {activeGroup}
                                </Button>
                            </Box>
                        </Modal>
                        <SuccessAlertSnackbar open={alertOpen} setOpen={setAlertOpen} message={"Invited " + student.firstName + " to " + activeGroup + "!"} />
                    </>
                }
            </GlobalContext.Consumer>
        </div>
    );
}
