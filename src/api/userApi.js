import request from '@/request'
import config from '@/config'
import {clearStorageToken, getStorageRefreshToken} from "@/util";

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

export const refreshToken = () => {
    const refresh_token = getStorageRefreshToken();
    if (refresh_token) {
        //清空当前的Token
        clearStorageToken();
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
}





