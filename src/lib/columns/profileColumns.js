import CurrencyFormatter from "../cellFormatters/CurrencyFormatter";
import PercentFormatter from "../cellFormatters/PercentFormatter";
import DateFormatter from "../cellFormatters/DateFormatter";
import StatusFormatter from "../cellFormatters/StatusFormatter";

export const profileColumns = [
    {
        id: 'profileName',
        label: 'ProfileName',
        sort: true,
    },
    {
        id: 'profileStatus',
        label: 'Profile Status',
        sort: true,
        cellWidth: 4,
        formatter: ({value}) => <StatusFormatter value={value} />
    },
    {
        id: 'creationDate',
        label: 'Creation Date',
        sort: true,
        cellWidth: 3,
        formatter: ({value}) => <DateFormatter value={value} />
    },
    {
        id: 'percentUsage',
        label: 'Usage %',
        sort: true,
        cellWidth: 3,
        formatter: ({value}) => <PercentFormatter value={value} />,
    },
    {
        id: 'balance',
        label: 'Balance',
        sort: true,
        cellWidth: 2,
        formatter: ({value, data}) => <CurrencyFormatter value={value} currency={data.currency} />,
    },
];
