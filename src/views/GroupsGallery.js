import {
    useParams
} from "react-router-dom";
import CreateGroupFab from '../widgets/CreateGroupFab';
import GalleryGroupCard from "../widgets/GalleryGroupCard";
import GroupDataModel from "../lib/GroupDataModel";
import { Stack, Box, Typography } from "@mui/material";

const groups = [
    new GroupDataModel({ title: "Python funtimes", subject: "Intro python", students: [1, 2, 3, 4, 5] }),
    new GroupDataModel({ title: "Mathnerds", subject: "Calculus I", students: [1, 4, 5] }),
    new GroupDataModel({ title: "Physics buddies", subject: "Physics 1402", students: [1, 5] }),
    new GroupDataModel({ title: "Design savants", subject: "UI Design", students: [1] }),
    new GroupDataModel({ title: "Bookworms", subject: "Literature Humanities", students: [4, 5] }),
    new GroupDataModel({ title: "Theorists", subject: "CS Theory", students: [1, 2, 3, 4, 5] }),
]


function GroupsGallery() {
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