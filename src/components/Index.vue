<template>
    <div>
        这个是首页<br>
        token:{{accessToken}}
        <br>
        <button type="button" @click="test">test</button> <br>
        <a v-if="!accessToken" href="/login">去登录</a>
        <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p> <br>

        <button v-if="accessToken" type="button" @click="orderList">查看订单列表</button> <br>
        <button v-if="accessToken" type="button" @click="logout">退出登录</button> <br>
    </div>
</template>

<script>
    import {list, test} from '@/api/orderApi'
    import {mapActions} from 'vuex'

    export default {
        name: 'Index',
        data: () => ({
            msg: ''
        }),
        computed: {
            httpError() {
                return this.$store.state.app.httpError;
            },
            accessToken() {
                return this.$store.state.user.accessToken
            }
        },
        methods: {
            ...mapActions([
                'handleLogout'
            ]),
            test(){
                test().then(res => {
                    alert(res.data)
                })
            },
            orderList() {
                list().then(res => {
                    alert(res.data)
                })
            },
            logout() {
                if (this.accessToken) {
                    this.handleLogout().then(() => {
                        this.$router.push({
                            name: 'Login'
                        })
                    })
                } else {
                    this.$router.push({
                        name: 'Login'
                    })
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
