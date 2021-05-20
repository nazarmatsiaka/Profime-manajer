import SelectColumnsModal from "./SelectColumnsModal";

export const getModal = (modalId) => {
    switch (modalId) {
        case 'select-columns':
            return {
                title: 'Select columns',
                BodyComponent: SelectColumnsModal,
            }
        default:
            return {
                title: '',
                BodyComponent: <span />,
            }
    }
}
