import CurrencyFormatter from "../cellFormatters/CurrencyFormatter";
import PercentFormatter from "../cellFormatters/PercentFormatter";
import DateFormatter from "../cellFormatters/DateFormatter";
import StatusFormatter from "../cellFormatters/StatusFormatter";
import ProfileNameFormatter from "../cellFormatters/ProfilesFormatters/ProfileNameFormatter";

export const profileColumns = [
    {
        id: 'profileName',
        label: 'ProfileName',
        sort: true,
        formatter: ({value, data: {id}}) => <ProfileNameFormatter value={value} id={id} />
    },
    {
        id: 'profileStatus',
        label: 'Profile Status',
        sort: true,
        formatter: ({value}) => <StatusFormatter value={value} />
    },
    {
        id: 'age',
        label: 'Age',
        sort: true,
    },
    {
        id: 'creationDate',
        label: 'Creation Date',
        sort: true,
        formatter: ({value}) => <DateFormatter value={value} />
    },
    {
        id: 'percentUsage',
        label: 'Usage %',
        sort: true,
        formatter: ({value}) => <PercentFormatter value={value} />,
    },
    {
        id: 'balance',
        label: 'Balance',
        sort: true,
        formatter: ({value, data}) => <CurrencyFormatter value={value} currency={data.currency} />,
    },
];
