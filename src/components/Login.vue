<template>
    <div>
        <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p>
        <h1>gzDzss登录</h1>
        <form>
            <label>用户名<input type="text" autocomplete="username" v-model="loginForm.username"
                             placeholder="用户名"/></label><br>
            <label>密码<input type="password" autocomplete="current-password" v-model="loginForm.password"
                            placeholder="密码"/></label><br>
            <button type="button" @click="login">login</button><br>



        </form>


        <hr>
        <h1>第三方登录</h1>
        <button type="button" @click="authGithubLogin('token')">Github登录</button><br>
        <hr>
        <button type="button" @click="authLogin('code')">去Gzdzss认证中心登录(code模式)  （手动授权）</button><br>
        <button type="button" @click="authLogin('token')">去Gzdzss认证中心登录(token模式)（手动授权）</button><br>
        <hr>
        <button type="button" @click="authLogin2('token')">去Gzdzss认证中心登录(token模式)  （自动授权）</button><br>
        <button type="button" @click="authLogin2('code')">去Gzdzss认证中心登录(code模式)  （自动授权）</button><br>
        <hr>
        <button type="button" @click="authLogin3('token')">去Gzdzss认证中心登录(token模式)  （第二次开始自动授权，不注销的情况，可通过多个浏览器测试）</button><br>
        <button type="button" @click="authLogin3('code')">去Gzdzss认证中心登录(code模式)  （第二次开始自动授权，不注销的情况，可通过多个浏览器测试）</button><br>
        <hr>

        <br>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    import {createOauth2Random} from "@/util";

    export default {
        name: "Login",
        data: () => ({
            loginForm: {
                username: '',
                password: ''
            }
        }),
        computed: {
            httpError() {
                return this.$store.state.app.httpError;
            }
        },
        methods: {
            ...mapActions([
                'handleLogin'
            ]),
            login() {
                this.handleLogin(this.loginForm).then(() => {
                    this.$router.push({
                        name: 'Index'
                    })
                })
            },
            authLogin(type) {
                let origin = window.location.origin;
                let redirect_uri = origin + "/gzdzss/oauth2";
                let state = createOauth2Random();
                window.location.href = "http://localhost:8080/oauth2?client_id=aaaaa&&redirect_uri=" + redirect_uri + "&response_type=" + type + "&state=" + state;
            },
            authLogin2(type) {
                let origin = window.location.origin;
                let redirect_uri = origin + "/gzdzss/oauth2";
                let state = createOauth2Random();
                window.location.href = "http://localhost:8080/oauth2?client_id=aaaaa&scope=login&redirect_uri=" + redirect_uri + "&response_type=" + type + "&state=" + state;
            },
            authLogin3(type) {
                let origin = window.location.origin;
                let redirect_uri = origin + "/gzdzss/oauth2";
                let state = createOauth2Random();
                window.location.href = "http://localhost:8080/oauth2?client_id=aaaaa&scope=login userinfo&redirect_uri=" + redirect_uri + "&response_type=" + type + "&state=" + state;
            },
            authGithubLogin() {
                let origin = window.location.origin;
                let redirect_uri = origin + "/github/oauth2";
                let state = createOauth2Random();
                window.location.href = "https://github.com/login/oauth/authorize/?client_id=3454267794e0ec293968&redirect_uri=" + redirect_uri + "&response_type=code&state=" + state;
            }
        }
    }
</script>

<style scoped>

</style>