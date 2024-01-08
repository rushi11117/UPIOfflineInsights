const getStatusClass = (status) => {
    switch (status) {
        case 'TRANSACTION_SUCCESS':
            return 'green';
        case 'TRANSACTION_FAILED':
            return 'red';
        case 'TRANSACTION_PENDING':
            return 'orange';
        default:
            return '';
    }
};

export { getStatusClass };