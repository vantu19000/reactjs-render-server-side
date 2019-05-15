import { GET_CURRENT_USER } from 'Types';

export const TestAction = () => (dispatch) => {

    dispatch({type: GET_CURRENT_USER, payload: '1231312312'});
    return 'TEST du lieu';

    /*
    return new Promise((resolve, reject) => {
        api.get('/xxxx')
            .then(response => {
                dispatch({type: GET_ALL_PROVINCES, payload: response.data});
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    })
    */

}