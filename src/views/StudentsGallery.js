import {
    useParams
} from "react-router-dom";
import CreateGroupFab from '../widgets/CreateGroupFab';
import GalleryStudentCard from "../widgets/GalleryStudentCard";
import GalleryGroupCard from "../widgets/GalleryStudentCard";
import StudentProfileModel from "../lib/StudentProfileModel";
import { Stack, Box, Typography } from "@mui/material";
import { GlobalContext } from "../lib/GlobalContext";




function StudentsGallery() {
    return (
        <>
            <GlobalContext.Consumer>
                {({ store, myProfile }) => <>
                    <Typography variant="h4">Students looking for groups</Typography>
                    <Typography variant="p" mb={10}><em>We only show you students looking for the same classes and with the same availability as you.</em></Typography>
                    <CreateGroupFab />

                    <Stack direction="column" sx={{
                        display: 'flex',
                        minWidth: '80vw',
                        minHeight: 'fit-content',
                        mx: '10vw',
                        mt: '10vw',
                        mb: `${(10 * (store.profiles.size - 1)).toString()}vw`,
                        flexDirection: 'column',
                        alignItems: 'left',
                    }}>
                        {Array.from(store.profiles.values())
                            .filter(p => p.uuid !== myProfile.uuid)
                            .map((s, index) => {
                                return (
                                    <Box sx={{ maxWidth: 'fit-content', flexShrink: 0, margin: index % 2 === 0 ? '-10vw' : '10vw', }}>
                                        <GalleryStudentCard key={index} student={s} />
                                    </Box>
                                );
                            })}
                    </Stack>
                </>}
            </GlobalContext.Consumer>

        </>
    );
}

export default StudentsGallery; 