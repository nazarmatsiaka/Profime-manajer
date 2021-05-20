import Profiles from "./Profiles";
import ProfilesContextProvider from "../../context/ProfilesContext";

const ProfilesWithContext = (props) => {
    return (
        <ProfilesContextProvider>
            <Profiles {...props}/>
        </ProfilesContextProvider>
    );
}

export default ProfilesWithContext;
