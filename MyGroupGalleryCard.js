import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, IconButton, Avatar, Chip, CardActionArea, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import GroupIcon from '@mui/icons-material/Group';
import GroupViewModal from '../modals/GroupViewModal';
import { useTheme } from '@emotion/react';

const CustomCard = styled(Card)(({diameter}) => ({
    textlign: 'right',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: diameter + ' !important',
    height: diameter + ' !important',
    borderRadius: "100%",
}));


const CustomChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.background.chip,
}));



function card(group, handleOpen) {
    return (
        <CardActionArea onClick={handleOpen} sx={{ width: 'inherit', height: 'inherit' }}>
            <CardContent mt={2} sx={{ width: 'inherit', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" sx={{ minWidth: '30%', maxWidth: '60%', mt: 3 }}>
                        <Typography variant="h5">
                            {group.title}
                        </Typography>
                        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                        </Typography>
                    </Stack>

                    <GroupIcon
                        sx={{ width: '25%' }}
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = createTheme(useTheme(), {
        palette: {
            mode: 'light',
            background: {
                paper: blue[200],
                chip: blue[100],
            },
        },
    });

    const diameter = useMediaQuery(theme.breakpoints.up('sm')) ? '10vw' : '60vw';

    return (
        <ThemeProvider theme={theme}>
            <CustomCard diameter={diameter}>{card(props.group, handleOpen)}</CustomCard>
            <GroupViewModal handleClose={handleClose} open={open} group={props.group} />
        </ThemeProvider>
    );
}
