import {login} from '@/api/userApi'
import {setStorageToken} from '@/util'

export default {
    state: {},
    mutations: {
        setToken(state, payload) {
            setStorageToken(payload)
        }
    },
    actions: {
        handleLogin({commit}, {username, password}) {
            return new Promise((resolve, reject) => {
                login({username, password}).then(res => {
                    commit('setToken', res.data)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}