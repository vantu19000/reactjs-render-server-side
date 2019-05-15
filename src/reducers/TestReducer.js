import { GET_CURRENT_USER } from '../actions/Types';

const initState = {
    admin: 3456789
};

export default TestReducer => (state = initState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER:
            return initState;
            // return {...state, admin: action.payload};
        default:
            return initState;
            // return {...state};

    }
}
