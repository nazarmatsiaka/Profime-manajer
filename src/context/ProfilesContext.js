import {createContext, useState} from "react";

export const ProfilesContext = createContext();

const ProfilesContextProvider = ({children}) => {
    const [profiles, setProfiles] = useState([
        {
            id: '1',
            profileName: 'Andrey',
            profileStatus: 'Deleted',
            creationDate: new Date(),
            percentUsage: 0.46,
            balance: 5000,
            age: 28,
            currency: 'USD',
        },
        {
            id: '2',
            profileName: 'Nazar',
            profileStatus: 'Active',
            creationDate: new Date('2001-12-17T03:24:00'),
            percentUsage: 0.05,
            balance: 200,
            age: 22,
            currency: 'EUR'
        },
        {
            id: '3',
            profileName: 'Person',
            profileStatus: 'Paused',
            creationDate: new Date('2003-12-17T03:24:00'),
            percentUsage: 0.7,
            balance: 76000,
            age: 37,
            currency: 'USD',
        },
    ]);

    return (
        <ProfilesContext.Provider value={{profiles, setProfiles}}>
            {children}
        </ProfilesContext.Provider>
    );
};

export default ProfilesContextProvider;
