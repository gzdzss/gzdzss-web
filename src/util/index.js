import config from '@/config'


export const setStorageToken = (payload) => {
    //保存  accessToken
    if (payload && payload.access_token && payload.token_type) {
        const token = payload.token_type + " " + payload.access_token;
        localStorage.setItem(config.accessTokenKey, token)
    }
    //保存  refresh_token
    if (payload && payload.refresh_token) {
        localStorage.setItem(config.refreshTokenKey, payload.refresh_token)
    }
    //保存  过期时间
    if (payload && payload.expires_in) {
        const tokenExpires = (new Date().getTime() / 1000) + payload.expires_in;
        localStorage.setItem(config.accessTokenExpiresKey, tokenExpires)
    }
}


export const getStorageAccessToken = () => {
    return localStorage.getItem(config.accessTokenKey)
}

export const getStorageRefreshToken = () => {
    return localStorage.getItem(config.refreshTokenKey)
}

export const getAccessTokenExpires = () => {
    return localStorage.getItem(config.accessTokenExpiresKey)
}


//清空存储的token
export const clearStorageToken = () => {
    localStorage.removeItem(config.accessTokenKey)
    localStorage.removeItem(config.refreshTokenKey)
    localStorage.removeItem(config.accessTokenExpiresKey)
}


