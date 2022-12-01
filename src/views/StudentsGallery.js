import {
    useParams
} from "react-router-dom";
import CreateGroupFab from '../widgets/CreateGroupFab';
import GalleryStudentCard from "../widgets/GalleryStudentCard";
import GalleryGroupCard from "../widgets/GalleryStudentCard";
import StudentProfileModel from "../lib/StudentProfileModel";
import { Stack, Box, Typography, ThemeProvider, useTheme, useMediaQuery } from "@mui/material";
import { GlobalContext } from "../lib/GlobalContext";




function StudentsGallery() {

    const theme = useTheme();
    const isDisplaySmall = useMediaQuery(theme.breakpoints.down('md')); 

    const xMargin = isDisplaySmall ? '5vmin' : '-2vmin';
    const maxWidth = isDisplaySmall ? '90%' : '77%';

    return (
        <>
            <GlobalContext.Consumer>
                {({ store, myProfile }) => <>
                    <Typography variant="h4">Students looking for groups</Typography>
                    <Typography variant="p" mb={10}><em>We only show you students looking for the same classes and with the same availability as you.</em></Typography>
                    <CreateGroupFab />

                    {/* <ThemeProvider theme={theme}> */}
                        <Stack direction="column" sx={{
                            display: 'flex',
                            minWidth: '80vmin',
                            minHeight: 'fit-content',
                            mx: '10vmin',
                            mt: '10vmin',
                            mb: `${(10 * (store.profiles.size - 1)).toString()}vmin`,
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}>
                            {Array.from(store.profiles.values())
                                .filter(p => p.uuid !== myProfile.uuid)
                                .map((s, index) => {
                                    const color = index % 2 === 0 ? 'primary' : 'secondary';
                                    const margin = index % 2 === 0 ? '-8vmin' : xMargin;

                                    return (
                                        <Box sx={{ maxWidth: maxWidth, flexShrink: 0, mx: margin }}>
                                            <GalleryStudentCard key={index} student={s} color={color} />
                                        </Box>
                                    );
                                })}
                        </Stack>
                    {/* </ThemeProvider> */}
                </>}
            </GlobalContext.Consumer>

        </>
    );
}

export default StudentsGallery; 