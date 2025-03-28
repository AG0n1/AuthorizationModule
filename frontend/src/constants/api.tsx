const domainName = 'localhost'
const port = '44001'
const api_path = `http://${domainName}:${port}`

// User
const user_api_ref = `${api_path}/user`
export const API_USER_LOGIN = `${user_api_ref}/login`
export const API_USER_LOGOUT = `${user_api_ref}/logout`