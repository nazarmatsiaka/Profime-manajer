import {createContext, useEffect, useState} from "react";
import {firestoreDB} from "../base";

export const ProfilesContext = createContext();

const ProfilesContextProvider = ({children}) => {
    const [profiles, setProfiles] = useState([]);

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        firestoreDB.collection('profiles').get().then(
            (res) => {
                const result = [];
                res.forEach((i) => {
                    const creationDate = i.get('creationDate').toDate();
                    result.push({id: i.id, ...i.data(), creationDate});
                    setFetching(false);
                });
                setProfiles(result);
            },
            err => console.log(err),
        );
    }, []);

    return (
        <ProfilesContext.Provider value={{profiles, fetching}}>
            {children}
        </ProfilesContext.Provider>
    );
};

export default ProfilesContextProvider;
