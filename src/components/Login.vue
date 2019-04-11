<template>
    <div>
        <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p>
        <form>
            <label>用户名<input type="text" autocomplete="username" v-model="loginForm.username" placeholder="用户名"/></label><br>
            <label>密码<input type="password" autocomplete="current-password" v-model="loginForm.password"
                            placeholder="密码"/></label><br>
            <button type="button" @click="login">login</button>
            <br>
        </form>
        <button type="button" @click="orderList">order-list</button>
        <button type="button" @click="ttt">ttt</button>
        <br>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {list} from '@/api/orderApi'

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
                this.handleLogin(this.loginForm).then(()=> {
                    alert("登录成功")
                })
            },
            loginByAuth() {
                window.location.href = 'http://localhost:7001/auth/oauth/authorize?client_id=aaaaa&redirect_uri=http://localhost:8080&response_type=code&scope=login userinfo'
            },
            orderList() {
                list().then(res => {
                    alert(res.data)
                }).catch(e => {
                    alert(e)
                })
            },
            ttt() {
                alert(new Date().getTime()/1000)
            }
        }
    }
</script>

<style scoped>

</style>