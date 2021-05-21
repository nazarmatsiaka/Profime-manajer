import {createContext, useEffect, useState} from "react";
import {firestoreDB} from "../base";

export const ProfilesContext = createContext();

const ProfilesContextProvider = ({children}) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        firestoreDB.collection('profiles').get().then(
            (res) => {
                const result = [];
                res.forEach((i) => {
                    result.push({id: i.id, ...i.data()});
                });
                setProfiles(result);
            },
            err => console.log(err),
        );
    }, []);

    return (
        <ProfilesContext.Provider value={{profiles, setProfiles}}>
            {children}
        </ProfilesContext.Provider>
    );
};

export default ProfilesContextProvider;
