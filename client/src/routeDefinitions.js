
export default {
    homepage: '/',
    add: username => `/${username}/add`,
    list: username => `/${username}`,
    searchUsers: '/search',
    register: '/register/',
    login: '/login/',
    changePassword: '/password/change/',
    resetPasswordSupplyEmail: '/password/reset/',
    resetPasswordSetPassword: '/password/reset/:token/',
};