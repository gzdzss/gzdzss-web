<template>
    <div>
        这个是首页<br>
        <div v-if="getUser">
          Hello： {{nickName}}  <img :src="avatarUrl" width="40" height="40"/>
        </div>
        <br>
        <button type="button" @click="test">test</button>
        <button type="button" @click="adminTest">adminTest</button>
        <br>
        <button type="button" @click="orderTest">orderTest</button>
        <button type="button" @click="xxx">xxx</button>
        <br><br>
        <a v-if="!accessToken" href="/login">去登录</a>
        <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p> <br>

        <button v-if="accessToken" type="button" @click="orderList">查看订单列表</button>
        <br>
        <button v-if="accessToken" type="button" @click="logout">退出登录</button>
        <br>
    </div>
</template>

<script>
    import {list, orderTest, xxx} from '@/api/orderApi'
    import {adminTest, test} from '@/api/userApi'
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
            },
            getUser() {
                return this.$store.state.user.getUser
            },
            avatarUrl() {
                return this.$store.state.user.avatarUrl
            },
            nickName() {
                return this.$store.state.user.nickName
            }
        },
        mounted () {
            this.handleGetUser()
        },
        methods: {
            ...mapActions([
                'handleLogout',
                'handleGetUser',
            ]),
            test() {
                test().then(res => {
                    alert(JSON.stringify(res.data))
                })
            },
            xxx() {
                xxx().then(res => {
                    alert(JSON.stringify(res.data))
                })

            },
            orderList() {
                list().then(res => {
                    alert(res.data)
                })
            },
            adminTest() {
                adminTest().then(res => {
                    alert(res.data)
                })
            },
            orderTest() {
                orderTest().then(res => {
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
