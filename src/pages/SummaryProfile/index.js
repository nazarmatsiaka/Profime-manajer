import SummaryProfile from "./SummaryProfile";
import SummaryProfileContextProvider from "../../context/SummaryProfileContext";

const SummaryProfileWithContext = (props) => (
    <SummaryProfileContextProvider id={props.match.params.id}>
        <SummaryProfile {...props} />
    </SummaryProfileContextProvider>
);

export default SummaryProfileWithContext;
