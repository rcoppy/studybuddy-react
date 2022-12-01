import CreateGroupFab from '../widgets/CreateGroupFab';
import StudentProfileModel from '../lib/StudentProfileModel';
import * as React from 'react';
import { Button, Container, Divider, Typography } from '@mui/material';
import { GlobalContext } from '../lib/GlobalContext';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';

function GalleryLinks({shouldShow}) {
    if (!shouldShow) return <Typography variant="p" sx={{ mb: 2 }}><em>You're not currently looking for groups.</em></Typography>;

    return <>
        <Button variant="contained" sx={{ mb: 2 }} startIcon={<SearchIcon />} component={Link} to="/gallery/groups">
            Join groups
        </Button>
        <Button variant="contained" sx={{ mb: 2 }} startIcon={<SearchIcon />} component={Link} to="/gallery/students">
            Invite students
        </Button>
        <Button color="secondary" variant="contained" sx={{ mb: 2 }} startIcon={<AddIcon />} component={Link} to="/group/new">
            Start a group
        </Button>
        <Divider sx={{ mb: 2 }} />
    </>;
}

function Home() {
    return (
        <>
            <GlobalContext.Consumer>
                {({ myProfile }) => <>
                    {/* <CreateGroupFab /> */}
                    {/* <Typography variant="h4">You are currently <em>{myProfile.amLookingForGroups ? "looking" : "not looking"}</em> for groups.</Typography> */}

                    <Container maxWidth="md" sx={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <GalleryLinks shouldShow={myProfile.amLookingForGroups} />
                        <GroupsIcon />
                        <Typography variant="p" fontSize='0.8rem'><em>The study groups you join will appear here.</em></Typography>
                    </Container>
                </>}
            </GlobalContext.Consumer>
        </>
    );
}

export default Home; 