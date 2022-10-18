import * as React from 'react'; 
import StudentProfileModel from './StudentProfileModel';

export const GlobalContext = React.createContext({
    myProfile: new StudentProfileModel,
    updateProfile: () => {},
});