<template>
    <view v-if="info" class="index">
        <view class="pic"><img class="resize" :src="`https://picsum.photos/id/${id}/200`" /></view>
        <nut-cell-group title="图片详情:">
            <nut-cell title="作者" icon="my" :desc="`${picturesInfo.author}`"></nut-cell>
            <nut-cell title="像素比" icon="date" :desc="`${picturesInfo.width}:${picturesInfo.height}`"></nut-cell>
            <nut-cell title="博客地址" icon="link" :desc="`${picturesInfo.url}`"></nut-cell>
        </nut-cell-group>
    </view>
    <view v-else>
        暂无数据
    </view>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from "vuex";
import Taro from '@tarojs/taro';
export default {
    name: 'detail',
    setup() {
        const store = useStore();
        const res = ref([])
        const info = ref([])
        const id = ref(0)
        // const index = ref(0)
        const pictures = store.state.pictures;
        const picturesInfo = pictures[id.value]
        const url = `https://picsum.photos/id/${id.value}/200`
        const getConnect = async() => {
            id.value = Taro.getCurrentInstance().router.params.id
           try {
                res.value = await Taro.request({ url })
                // console.log(res.value)
           } catch (error) {
                console.log(error)
           }finally{
                info.value = res.value.data
           }
        }
        
        onMounted(()=>{
            getConnect()
        })

        return{
            info,
            id,
            picturesInfo
        }
    },
}
</script>

<style>
.pic{
    text-align:center;
}
.resize{
  border-radius: 8px;
}
</style>