export default {

    //全局标题
    title: 'gzDzss',

    //api配置
    api : {
        //请求超时时间
        timeout: 6000,
        //重试次数
        maxRedirects : 0
    },

    oauth2: {
        gzdzss: {
            username: 'gzdzss',
            password: 'gzdzss',
            authUrl: 'https://auth.gzdzss.cn/oauth2'
        },
        github: {
            username: '9c526a5818a44c4c8be4',
            authUrl: 'https://github.com/login/oauth/authorize'
        }
    },


    //存储token的key
    accessTokenKey: 'gzdzssWebAccessToken',
    //存储 refreshToken的key
    refreshTokenKey: 'gzdzssWebRefreshToken',
    //token过期时间（秒）
    accessTokenExpiresKey: 'gzdzssWebAccessTokenExpires',
    //认证随机数
    oauth2RandomKey: 'gzdzssWebOauth2RandomKey'
}
