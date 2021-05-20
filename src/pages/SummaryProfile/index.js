import SummaryProfile from "./SummaryProfile";
import SummaryProfileContextProvider from "../../context/SummaryProfileContext";

const SummaryProfileWithContext = (props) => (
    <SummaryProfileContextProvider>
        <SummaryProfile {...props} />
    </SummaryProfileContextProvider>
);

export default SummaryProfileWithContext;
