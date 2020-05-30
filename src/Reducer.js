const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOCATION_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'GET_LOCATION_SUCCESS':
            return {
                ...state,
                location: action.payload,
                error: false,
                loading: false
            };

        case 'GET_LOCATION_FAIL':
            return {
                ...state,
                error: true,
                loading: false,
                location: null
            };

        default:
            return state;
    }
};

export default Reducer;