import * as React from 'react'; 
import StudentProfileModel from './StudentProfileModel';
import UiInfo from './UiInfo';

export const GlobalContext = React.createContext({
    myProfile: new StudentProfileModel(),
    updateProfile: () => {},
    uiInfo: new UiInfo(), 
    updateUiInfo: () => {},
});