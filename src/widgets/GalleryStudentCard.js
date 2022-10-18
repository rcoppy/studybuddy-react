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
import blue from '@mui/material/colors/blue';
import StudentViewModal from '../modals/StudentViewModal';


const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: blue[200],
      chip: blue[100],
    },
  },
});

const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.chip,
}));

function card(student, handleOpen) {
  return (
    <CardActionArea onClick={handleOpen} >
      <CardContent mt={2} sx={{ height: '66vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack direction="column" sx={{ minWidth: '30%', mt: 3 }}>
            <Typography variant="h5">
              {student.firstName}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {student.program} {student.classYear}
            </Typography>
          </Stack>

          <Avatar
            alt="My profile photo"
            // src="/static/images/avatar/1.jpg"
            sx={{ width: '28vw', height: '28vw', ml: 1, mb: 1 }}
          />


        </Stack>


        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }} >
          {student.classes.map((c, index) => {
            return (
              <Box mr={1} mb={1}>
                <CustomChip key={index} label={c} variant="outlined" size="small" />
              </Box>
            );
          })}
        </Box>

      </CardContent>
      {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </CardActionArea>
  )
};

export default function GalleryStudentCard(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ bgcolor: 'palette.primary', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', width: '66vw', height: '66vw', borderRadius: "100%" }}>{card(props.student, handleOpen)}</Card>
      <StudentViewModal handleClose={handleClose} open={open} student={props.student}/>
    </ThemeProvider>
  );
}
