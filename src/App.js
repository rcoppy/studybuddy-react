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
import StudentProfileModel from './lib/StudentProfileModel';
import { GlobalContext } from './lib/GlobalContext';
import MediaQueryHelper from './utils/MediaQueryHelper';
import { createTheme, ThemeProvider } from '@mui/material';
import UiInfo from './lib/UiInfo';
import { DefaultGroups } from './lib/GroupDataModel';
import { DefaultInvites } from './lib/InviteModel';

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
      },
    };

    this.state.store.profiles.set(this.state.myProfile.uuid, this.state.myProfile); 
    DefaultGroups.forEach((g) => this.state.myGroups.set(g.uuid, g));
    DefaultInvites.forEach((i) => this.state.store.invites.set(i.uuid, i));
  }

  render() {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <GlobalContext.Provider value={this.state}>
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
          </GlobalContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
