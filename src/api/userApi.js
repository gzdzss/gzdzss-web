import request from '@/request'
import config from '@/config'

const {oauth2client} = config

export const login = ({username, password}) => {
    const param = {
        'grant_type': 'password',
        'username': username,
        'password': password,
        'scope': 'login userinfo'
    }
    return request({
        url: "/api/auth/oauth/token",
        method: 'post',
        params: param,
        auth: oauth2client
    });
}


export const getToken = ({code, redirect_uri}) => {
    const param = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirect_uri
    }
    return request({
        url: "/api/auth/oauth/token",
        method: 'post',
        params: param,
        auth: oauth2client
    });
}


export const getTokenByGotHub = ({code}) => {
    const param = {
        'code': code
    }
    return request({
        url: "/api/auth/oauth2/github",
        method: 'get',
        params: param
    });
}



export const getUser = () => {
    return request({
        url: "/api/auth/user",
        method: 'get',
    });
}




export const test = () => {
    return request({
        url: "/api/auth/test",
        method: 'get'
    });
}

export const adminTest = () => {
    return request({
        url: "/api/auth/adminTest",
        method: 'get'
    });
}


export const logout = () => {
    return request({
        url: "/api/auth/logout",
        method: 'get'
    });
}


export const refreshToken = (refresh_token) => {
    const param = {
        'grant_type': 'refresh_token',
        'refresh_token': refresh_token,
    }
    return request({
        url: "/api/auth/oauth/token",
        method: 'post',
        params: param,
        auth: oauth2client
    });
}





