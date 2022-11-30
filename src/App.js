import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './AppBar';
import Container from '@mui/material/Container';
import {
  HashRouter as Router,
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
import BlockList from './views/BlockList';
import * as React from 'react';
import StudentProfileModel, { DefaultStudents } from './lib/StudentProfileModel';
import { GlobalContext } from './lib/GlobalContext';
import MediaQueryHelper from './utils/MediaQueryHelper';
import { createTheme, ThemeProvider } from '@mui/material';
import UiInfo from './lib/UiInfo';
import { DefaultGroups } from './lib/GroupDataModel';
import { DefaultInvites } from './lib/InviteModel';
import { DefaultClasses } from './lib/ClassModel';
import { palette } from '@mui/system';
import { light } from '@mui/material/styles/createPalette';
import { blue, lightGreen } from '@mui/material/colors';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.updateMyProfile = (newProfile) => {
      this.setState(state => ({
        myProfile: newProfile,
      }));
    };

    this.updateUiInfo = (newUiInfo) => {
      this.setState(state => ({
        uiInfo: newUiInfo,
      }));
    };

    this.addToMyGroups = (groupsToAdd) => {
      const existingGroups = this.state.myGroups;
      groupsToAdd.forEach((g) => existingGroups.set(g.title, g));
      this.setState(state => ({
        myGroups: existingGroups,
      }));
    };

    this.removeFromMyGroups = (groupsToRemove) => {
      const existingGroups = this.state.myGroups;
      groupsToRemove.forEach((g) => existingGroups.delete(g.title));
      this.setState(state => ({
        myGroups: existingGroups,
      }));
    };

    this.store = {};

    this.store.addClasses = (classesToAdd) => {
      const existingClasses = this.state.store.classes;
      classesToAdd.forEach((g) => existingClasses.set(g.uuid, g));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.removeClasses = (classesToRemove) => {
      const existingClasses = this.state.store.classes;
      classesToRemove.forEach((g) => existingClasses.delete(g.uuid));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.addGroups = (groupsToAdd) => {
      const existingGroups = this.state.store.groups;
      groupsToAdd.forEach((g) => existingGroups.set(g.uuid, g));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.removeGroups = (groupsToRemove) => {
      const existingGroups = this.state.store.groups;
      groupsToRemove.forEach((g) => existingGroups.delete(g.uuid));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.addProfiles = (profilesToAdd) => {
      const existingProfiles = this.state.store.profiles;
      profilesToAdd.forEach((p) => existingProfiles.set(p.uuid, p));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.removeProfiles = (profilesToRemove) => {
      const existingProfiles = this.state.store.profiles;
      profilesToRemove.forEach((p) => existingProfiles.delete(p.uuid));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.addInvites = (invitesToAdd) => {
      const existingInvites = this.state.store.invites;
      invitesToAdd.forEach((i) => existingInvites.set(i.uuid, i));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.removeInvites = (invitesToRemove) => {
      const existingInvites = this.state.store.invites;
      invitesToRemove.forEach((i) => existingInvites.delete(i.uuid));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.addStudents = (studentsToAdd) => {
      const existingStudents = this.state.store.students;
      studentsToAdd.forEach((i) => existingStudents.set(i.uuid, i));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.removeStudents = (studentsToRemove) => {
      const existingStudents = this.state.store.students;
      studentsToRemove.forEach((i) => existingStudents.delete(i.uuid));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.sendMessages = (messagesToSend) => {
      const existingMessages = this.state.store.messages;
      messagesToSend.forEach((i) => existingMessages.set(i.uuid, i));
      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.store.deleteMessages = (messagesToDelete) => {
      const existingMessages = this.state.store.messages;
      messagesToDelete.forEach((i) => existingMessages.delete(i.uuid));

      this.setState(state => ({
        store: this.state.store,
      }));
    };

    this.state = {
      myProfile: new StudentProfileModel(),
      updateMyProfile: this.updateMyProfile,
      uiInfo: new UiInfo(),
      updateUiInfo: this.updateUiInfo,
      myGroups: new Map(),
      addToMyGroups: this.addToMyGroups,
      removeFromMyGroups: this.removeFromMyGroups,

      store: {
        profiles: new Map(),
        addProfiles: this.store.addProfiles,
        removeProfiles: this.store.removeProfiles,

        groups: new Map(),
        addGroups: this.store.addProfiles,
        removeGroups: this.store.removeProfiles,

        invites: new Map(),
        addInvites: this.store.addInvites,
        removeInvites: this.store.removeInvites,

        messages: new Map(),
        sendMessages: this.store.sendMessages,
        deleteMessages: this.store.deleteMessages,

        classes: new Map(),
        addClasses: this.store.addClasses,
        removeClasses: this.store.removeClasses,

        // students: new Map(),
        // addStudents: this.store.addStudents,
        // removeStudents: this.store.removeStudents,
      },
    };

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    // seed config
    this.state.store.profiles.set(this.state.myProfile.uuid, this.state.myProfile);
    DefaultInvites.forEach((i) => this.state.store.invites.set(i.uuid, i));
    DefaultStudents.forEach((i) => {
      // this.state.store.students.set(i.uuid, i);
      this.state.store.profiles.set(i.uuid, i);
    });

    DefaultClasses.forEach((c) => {
      this.state.store.classes.set(c.uuid, c);
      this.state.myProfile.classes.set(c.uuid, c);

      // assign classes to students randomly
      Array.from(this.state.store.profiles.values()).forEach((s) => {
        if (getRandomInt(10) > 5) {
          s.classes.set(c.uuid, c);
        }
      });

    });

    DefaultGroups.forEach((g) => {
      const studentIds = [];

      // TODO: make this filtering by uuid, not title string
      for (const s of this.state.store.profiles.values()) {
        const classCodes = Array.from(s.classes.values()).map(c => c.code);

        console.log(classCodes);

        if (classCodes.includes(g.subject) && getRandomInt(10) > 5) {
          studentIds.push(s.uuid);
        }
      }

      console.log(studentIds);

      const modifiedGroup = Object.assign(g, {
        students: studentIds,
        adminId: studentIds[getRandomInt(studentIds.length)]
      });
      this.state.store.groups.set(g.uuid, modifiedGroup);
    });

    console.log(this.state.store.groups);
  }

  render() {

    const theme = createTheme({ palette: { mode: 'light', primary: blue, secondary: lightGreen } });

    return (
      <>
        <CssBaseline />
        <div className="App">
          <GlobalContext.Provider value={this.state}>
            <ThemeProvider theme={theme}>
              <Router>
                <AppBar />
                <MediaQueryHelper uiInfo={this.state.uiInfo} updateUiInfo={this.state.updateUiInfo} />
                <Container maxWidth={this.state.uiInfo.containerWidth} sx={{ mt: 1, overflowX: 'hidden' }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/me" element={<MyProfile />} />
                    <Route path="/profile/:id" element={<StudentProfile />} />
                    <Route path="/gallery/students" element={<StudentsGallery />} />
                    <Route path="/gallery/groups" element={<GroupsGallery />} />
                    <Route path="/group/me" element={<MyGroups />} />
                    <Route path="/group/new" element={<CreateGroup />} />
                    <Route path="/group/:id" element={<GroupProfile />} />
                    <Route path="/invites" element={<Invites />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/messages/:id" element={<MessageThread />} />
                    <Route path="/availability" element={<MyAvailability />} />
                    <Route path="/welcome" element={<Onboarding />} />
                    <Route path="/blocklist" element={<BlockList />} />
                  </Routes>
                </Container>
              </Router>
            </ThemeProvider>
          </GlobalContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
