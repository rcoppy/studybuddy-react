import {
    useParams
} from "react-router-dom";
import CreateGroupFab from '../widgets/CreateGroupFab';
import GalleryGroupCard from "../widgets/GalleryGroupCard";
import GroupDataModel from "../lib/GroupDataModel";
import { Stack, Box, Typography } from "@mui/material";
import { DefaultGroups } from '../lib/GroupDataModel';

function GroupsGallery() {

    const groups = DefaultGroups; 

    return (
        <>
            <Typography variant="h4">Groups gallery</Typography>
            <Typography variant="p" mb={10}><em>Here are all the study groups matching your classes and availability.</em></Typography>
            <CreateGroupFab />

            <Stack direction="column" sx={{
                display: 'flex',
                minWidth: '80vw',
                minHeight: 'fit-content',
                mx: '10vw',
                mt: '10vw',
                mb: `${(10 * (groups.length - 1)).toString()}vw`,
                flexDirection: 'column',
                alignItems: 'left',
            }}>
                {groups.map((g, index) => {
                    return (
                        <Box sx={{ maxWidth: 'fit-content', flexShrink: 0, margin: index % 2 === 0 ? '-10vw' : '10vw', }}>
                            <GalleryGroupCard key={index} group={g} />
                        </Box>
                    );
                })}
            </Stack>
        </>
    );
}

export default GroupsGallery; 