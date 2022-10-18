import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, IconButton, Avatar, Chip, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import orange from '@mui/material/colors/orange';
import GroupIcon from '@mui/icons-material/Group';


const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: orange[200],
            chip: orange[100],
        },
    },
});

const CustomChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.background.chip,
}));

function card(group) {
    return (
        <CardActionArea component={Link} to="/group/43" >
            <CardContent mt={2} sx={{ height: '66vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" sx={{ minWidth: '30%', mt: 3 }}>
                        <Typography variant="h5">
                            {group.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {group.students.length} members
                        </Typography>
                    </Stack>

                    <GroupIcon
                        sx={{ width: '28vw', height: '28vw', ml: 1, mb: 1 }}
                    />


                </Stack>


                {/* <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }} >
          {group.students.map((c, index) => {
            return (
              <Box mr={1} mb={1}>
                <CustomChip key={index} label={c} variant="outlined" size="small" />
              </Box>
            );
          })}
        </Box> */}

            </CardContent>
            {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
        </CardActionArea>
    )
};

export default function GalleryGroupCard(props) {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ textAlign: 'right', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', width: '66vw', height: '66vw', borderRadius: "100%" }}>{card(props.group)}</Card>
        </ThemeProvider>
    );
}
