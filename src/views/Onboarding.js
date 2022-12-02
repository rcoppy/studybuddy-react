import WelcomeSplash from '../static/images/welcome-splash.png';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../lib/GlobalContext';

function Onboarding() {
    return (
        <GlobalContext.Consumer>
            {({ setLoggedIn }) =>
                <Stack direction="column" sx={{ height: '90vh', display: 'flex', direction: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h1" fontSize='3rem'>StudyBuddies</Typography>
                    <img style={{ width: '80%' }} src={WelcomeSplash} alt='peppy undergrads inclusively smile in a circle while galavanting through a problem set together, corporate cartoon digital art' />
                    <Typography sx={{ mb: 2 }} variant="h2" fontSize='2rem'>Cheating is good &reg;</Typography>
                    <Button color="primary" size='large' variant='contained' component={Link} to='/' onClick={() => setLoggedIn(true)}>Get studying</Button>
                </Stack>}
        </GlobalContext.Consumer>
    );
}

export default Onboarding; 