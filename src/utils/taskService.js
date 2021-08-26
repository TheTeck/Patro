import tokenService from './tokenService';

const BASE_URL = '/api/tasks';

function create(task) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

function getOne (taskID) {
    return fetch (`api/tasks/${taskID}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

function getAllForUser (userID) {
    console.log("in the utitlies")
    return fetch (`api/users/${userID}/tasks`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

const exportedFunctions = {
    create,
    getAllForUser,
    getOne,
};

export default exportedFunctions;