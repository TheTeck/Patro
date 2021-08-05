import tokenService from './tokenService';

const BASE_URL = '/api/tasks';

export default {
    create
};

// export function getOneById(id) {
//   return fetch(BASE_URL + `/${id}`, {
//     headers: {
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     }
//   })
//   .then(res => res.json());
// }

// export function update(opus) {
//   return fetch(BASE_URL + `/${opus.id}`, {
//     method: 'PUT',
//     body: JSON.stringify(opus),
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     }
//   }).then(res => res.json())
// }

export function create(task) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
        
    }).then(res => res.json())
}

// export function getAll() {
//     return fetch(BASE_URL, {
//       headers: {
//         'Authorization': 'Bearer ' + tokenService.getToken()
//       }
//     })
//     .then(res => res.json());
//   }

// export function removeOpus(opusID) {
//   return fetch(`${BASE_URL}/${opusID}`, {
//     method: 'DELETE',
//     headers: {
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     }
//   }).then(res => res.json())
// }