import tokenService from './tokenService';

const BASE_URL = '/api/connections/';

// function create(task) {
//     return fetch(BASE_URL, {
//         method: 'POST',
//         body: JSON.stringify(task),
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }
//     }).then(res => res.json());
// };

function getOne (connectionID) {
    return fetch (BASE_URL + connectionID, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

const exportedFunctions = {
    getOne,
};

export default exportedFunctions;