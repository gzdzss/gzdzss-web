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

    //客户端账号
    oauth2client: {
        username: 'aaaaa',
        password: 'bbbbb'
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
