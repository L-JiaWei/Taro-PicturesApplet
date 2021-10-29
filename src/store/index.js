import { createStore } from 'vuex'
import Taro from '@tarojs/taro'

const store = createStore({
    state() {
        return {
            pictures: [],
            myFollow: []
        }
    },
    mutations: {
        LOAD_PICTURES_MUTATION: (state, pictures) => {
            state.pictures.push(pictures)
        },

        ADD_TO_FOLLOW: (state, index) => {
            state.myFollow.push(state.pictures[index])
            Taro.showToast({
                title: '收藏成功',
                icon: 'success',
                duration: 500
            })
        },
        DEL2_TO_FOLLOW: (state, item) => {
            for (let i in state.myFollow) {
                if (state.myFollow[i].id == item.id) {
                    state.myFollow.splice(i, 1)
                }
            }
            Taro.showToast({
                title: '从收藏夹中移除',
                icon: 'none',
                duration: 1000
            })

        },
        updatefinishTasks(state, item) {
            state.myFollow = item
        }
    },
    actions: {
        LOAD_PICTURES_ACTION: async(context, { page = 1, limit = 6 }) => {
            const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
            const res = await Taro.request({ url })
                // console.log(res)  
            for (var i = 0; i < res.data.length; i++) {
                context.commit('LOAD_PICTURES_MUTATION', res.data[i]);
            }
            console.log(res.data)
            return res.data
        }
    }
})

export default store;