export const getTableSortingFromLocalStorage = (tableId) => {
    return JSON.parse(localStorage.getItem(`${tableId}-sorting`));
};

export const setTableSortingToLocalStorage = (tableId, data) => {
    console.log(data);
    localStorage.setItem(`${tableId}-sorting`, JSON.stringify(data));
};

export const getTableColumnsFromLocalStorage = (tableId) => {
    return JSON.parse(localStorage.getItem(`${tableId}-columns`));
};

export const setTableColumnsToLocalStorage = (tableId, data) => {
    console.log(data);
    localStorage.setItem(`${tableId}-columns`, JSON.stringify(data));
};

