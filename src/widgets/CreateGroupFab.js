import * as React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function CreateGroupFab() {
    return (
        <Fab color="primary" aria-label="create group"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            component={Link}
            to="/group/new">
            <AddIcon />
        </Fab>
    );
}
