import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './AppBar';
import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MyProfile from './views/MyProfile';
import StudentProfile from './views/StudentProfile';
import StudentsGallery from './views/StudentsGallery';
import GroupsGallery from './views/GroupsGallery';
import Home from './views/Home';
import MyGroups from './views/MyGroups';
import CreateGroup from './views/CreateGroup';
import GroupProfile from './views/GroupProfile';
import Invites from './views/Invites';
import Messages from './views/Messages';
import MessageThread from './views/MessageThread';
import MyAvailability from './views/MyAvailability';
import Onboarding from './views/Onboarding';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Router>
          <AppBar />
          <Container maxWidth="xl">
            <Routes>
              <Route path="./" element={<Home />} />
              <Route path="./profile/me" element={<MyProfile />} />
              <Route path="./profile/:id" element={<StudentProfile />} />
              <Route path="./gallery/students" element={<StudentsGallery />} />
              <Route path="./gallery/groups" element={<GroupsGallery />} />
              <Route path="./group/me" element={<MyGroups />} />
              <Route path="./group/new" element={<CreateGroup />} />
              <Route path="./group/:id" element={<GroupProfile />} />
              <Route path="./invites" element={<Invites />} />
              <Route path="./messages" element={<Messages />} />
              <Route path="./messages/:id" element={<MessageThread />} />
              <Route path="./availability" element={<MyAvailability />} />
              <Route path="./welcome" element={<Onboarding />} />
            </Routes>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
