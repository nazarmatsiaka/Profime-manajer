import {createContext, useState} from "react";

export const SummaryProfileContext = createContext();

const SummaryProfileContextProvider = ({children}) => {
    const [profile, setProfile] = useState({
        id: '2',
        profileName: 'Nazar',
        profileStatus: 'Active',
        creationDate: new Date('2001-12-17T03:24:00'),
        percentUsage: 0.05,
        balance: 200,
        age: 22,
        currency: 'EUR'
    });

    return (
        <SummaryProfileContext.Provider value={{profile, setProfile}}>
            {children}
        </SummaryProfileContext.Provider>
    );
};

export default SummaryProfileContextProvider;
