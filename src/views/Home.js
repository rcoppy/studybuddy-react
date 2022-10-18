import CreateGroupFab from '../widgets/CreateGroupFab';
import StudentProfileModel from '../lib/StudentProfileModel';
import * as React from 'react';
import { Typography } from '@mui/material';
import { GlobalContext } from '../lib/GlobalContext';


function Home() {
    return (
        <>
            <GlobalContext.Consumer>
                {({myProfile}) => <>
                    <Typography variant="h4">You are currently <em>{myProfile.amLookingForGroups ? "looking" : "not looking"}</em> for groups.</Typography>
                    <CreateGroupFab />
                </>}
            </GlobalContext.Consumer>
        </>
    );
}

export default Home; 