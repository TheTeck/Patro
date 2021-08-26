import tokenService from './tokenService';

const BASE_URL = '/api/invites';

function create(userBy, userFor) {
    console.log("in utilies")
    return fetch(`/api/users/${userBy}/invites`, {
        method: 'POST',
        body: JSON.stringify(userFor),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

const exportedFunctions = {
    create,
};

export default exportedFunctions;