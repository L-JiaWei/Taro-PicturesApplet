<template>
    <view class="index">
        <view class="infiniteLi" v-for="(item,index) in myFollow" :key="item.id">
            <img class="resize" :src="`https://picsum.photos/id/${item.id}/200`" @tap="toDetails(item, index)">
            <view class="author">
            {{index+"-"+item.author}}
            <nut-icon class="del2" 
            name="del2" 
            :key="item.id"
            @tap="del2follow(item)"></nut-icon>
            </view>
        </view>
    </view>
    
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";
import Taro from '@tarojs/taro';

export default {
    setup() {
        const store = useStore();
        const myFollow = computed (() => store.state.myFollow);
        
        const del2follow = (item) => {
            store.commit("DEL2_TO_FOLLOW",item)
        }
        const toDetails = (info,index) => {
            Taro.navigateTo({
                url:`/details/detail?id=${info.id}&index=${index}`
            })
        }
        return{
            myFollow,
            del2follow,
            toDetails
        }
    },
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100vh;
}
.infiniteLi {
  margin-top: 10px;
  text-align: center;
}
.resize{
  border-radius: 8px;
}
.author{
    margin-top: 10px;
    font-size:19px;
    font-weight:bold;
    margin-bottom: 20px;
    }
.del2{
    left: 5px;
    top: 2px;
}
</style>