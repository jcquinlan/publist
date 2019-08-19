import { get } from './requestHelper';

function searchUsers(userQuery) {
    return get(`/users/${userQuery}`)
}

export { searchUsers };
