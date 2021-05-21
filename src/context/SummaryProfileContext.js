import {createContext, useEffect, useState} from "react";
import {firestoreDB} from "../base";

export const SummaryProfileContext = createContext();

const SummaryProfileContextProvider = ({children, id}) => {
    const [profile, setProfile] = useState({});

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        firestoreDB.collection('profiles').doc(id).get().then(
            res => {
                const creationDate = res.get('creationDate')?.toDate();
                setProfile({id: res.id, ...res.data(), creationDate});
                setFetching(false);
            },
            err => console.log('err', err),
        )
    }, [id]);

    return (
        <SummaryProfileContext.Provider value={{profile, fetching}}>
            {children}
        </SummaryProfileContext.Provider>
    );
};

export default SummaryProfileContextProvider;
