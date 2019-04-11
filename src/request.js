import axios from 'axios'
import config from '@/config'
import {getAccessTokenExpires, getStorageAccessToken, setStorageToken} from "@/util";
import {refreshToken} from '@/api/userApi'


const service = axios.create({
    timeout: config.timeoutTimeOut
})

service.interceptors.request.use(function (config) {

    if (getStorageAccessToken()) {
        const accessTokenExpires = getAccessTokenExpires();
        //当前时间秒 + 5分钟
        const curTimeSecond = new Date().getTime() / 1000 + 60 * 5;
        //如果存在 可刷新的token,过期时间，   并且  当前时间 大于过期时间
        if (curTimeSecond > accessTokenExpires) {
            return new Promise((resolve, reject) => {
                refreshToken().then(res => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            }).then((res) => {
                setStorageToken(res.data)
                config.headers.common['Authorization'] = getStorageAccessToken();
                return config;
            }).catch(() => {
                return config;
            })
        }
        config.headers.common['Authorization'] = getStorageAccessToken()
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
service.interceptors.response.use(
    function (response) {
        return Promise.resolve(response)
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default service