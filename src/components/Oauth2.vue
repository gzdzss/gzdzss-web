<template>
    <div>
        <span v-if="msg !== null">{{msg}}</span>
        <p style="color:red" v-if="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p>
    </div>
</template>


<script>
    import {getOauth2Random} from '@/util'
    import {getToken} from '@/api/userApi'

    export default {
        name: "Oauth2",
        data: () => ({
            msg: null
        }), computed: {
            httpError() {
                return this.$store.state.app.httpError;
            },
            accessToken() {
                return this.$store.state.user.accessToken
            }
        }, mounted() {
            //如果已经有token了 不重复登录 直接跳转到首页
            if (this.accessToken) {
                this.$router.push({
                    name: 'Index'
                })
            }
            let state = this.$route.query.state;
            let localState = getOauth2Random();
            if (state !== localState) {
                this.msg = '请重新认证';
                return;
            }
            let response_type = this.$route.query.response_type
            if (response_type === 'code') {
                let origin = window.location.origin;
                let code = this.$route.query.code;
                getToken({code, origin}).then((res) => {
                    this.$store.commit("setToken", res.data);
                    this.$router.push({
                        name: 'Index'
                    })
                })
            } else if (response_type === 'token') {
                let access_token = this.$route.query.access_token;
                let expires_in = this.$route.query.expires_in;
                let refresh_token = this.$route.query.refresh_token;
                let scope = this.$route.query.scope;
                let token_type = this.$route.query.token_type;
                const obj = {
                    access_token: access_token,
                    expires_in: expires_in,
                    refresh_token: refresh_token,
                    scope: scope,
                    token_type: token_type,
                }
                this.$store.commit("setToken", obj);
                this.$router.push({
                    name: 'Index'
                })
            } else {
                this.msg = '认证错误';
            }
        }
    }
</script>

<style scoped>

</style>