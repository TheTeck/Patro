import tokenService from './tokenService';

const BASE_URL = '/api/invites';

function create(userBy, userFor) {
    return fetch(`/api/users/${userBy}/invites`, {
        method: 'POST',
        body: JSON.stringify(userFor),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

function deleteInvite(userId, inviteId) {
    return fetch(`/api/users/${userId}/invites/${inviteId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
};

const exportedFunctions = {
    create,
    deleteInvite,
};

export default exportedFunctions;