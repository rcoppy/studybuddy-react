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
            alt="student profile photo"
            src={student.avatarImagePath}
            sx={{ width: '28vmin', height: '28vmin', ml: 1, mb: 1 }}
          />


        </Stack>


        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }} >
          {Array.from(student.classes.values()).map((c, index) => {
            return (
              <Box mr={1} mb={1}>
                <CustomChip key={index} label={c.code} variant="outlined" size="small" />
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
      <Card elevation={3} sx={{ bgcolor: theme.palette.primary.light[50], textDecoration: 'none', display: 'flex', alignItems: 'center', overflow: 'hidden', width: '50vh', maxHeight: '45vh', borderRadius: 3, my: 2 }}>{card(props.student, handleOpen)}</Card>
      <StudentViewModal handleClose={handleClose} open={open} student={props.student}/>
    </ThemeProvider>
  );
}
