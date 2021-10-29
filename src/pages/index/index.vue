<template>
  <view class="index">
    <view v-if="loading">
      <nut-icon type="loading"/>
    </view>
  <view v-else class="infiniteUl" id="scroll">
    <nut-infiniteloading
        containerId = 'scroll'
        pull-icon="JD"
        load-txt="loading"
        :is-open-refresh="false"
        :has-more="hasMore"
        @load-more="load"
    >
      <view v-for="(item,index) in pictures" :key="item.id" class="infiniteLi">
        <img class="resize" :src="`https://picsum.photos/id/${item.id}/200`" @tap="toDetails(item, index)">
        <view class="author">
          {{index+"-"+item.author}}
          <nut-icon class="star" 
          name="star-fill-n" 
          :key="item.id"
          @tap="addfollow(index)"></nut-icon>
        </view>
      </view>
    </nut-infiniteloading>
  </view>
  </view>
    
</template>

<script >
import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";
import Taro from '@tarojs/taro';
export default {
  name: 'Index',
  setup(){
    const store = useStore();
    const loading = ref(false);
    const hasMore = ref(true)
    const page = ref(0);
    const pictures = computed (() => store.state.pictures);
    // const collectPictures = computed (() => store.state.collectPictures)
    
     const load = done => {  
      setTimeout(() => {
        loadMore()
        done()
      }, 1000);
     }
    const loadMore = async () => {
      console.log("加载更多ing")
      
      page.value += 1;
      try {
        const res = await store.dispatch('LOAD_PICTURES_ACTION', {page: page.value})
        console.log("加载第"+page.value+"页")
        // console.log("loadMore", res)
      } catch (error) {
        console.log(error)
        hasMore.value(false);
      } finally {
        loading.value = false;
      }
    }

    onMounted(() => { //页面挂载的时候执行loadMore方法
      loading.value = true;
      loadMore();
      let mycollecteData = Taro.getStorageSync("collection") 
      if(mycollecteData){
        store.commit("updatefinishTasks", mycollecteData)
        }
        
      })
    Taro.onAppHide(()=>{
      if(store.state.myFollow.length >= 0){
        Taro.setStorage({
          key: "collection",
          data: store.state.myFollow
        })
        console.log(Taro.getStorageSync("collection"))
      }
    })

    const toDetails = (info,index) => {
      Taro.navigateTo({
        url:`/details/detail?id=${info.id}&index=${index}`
      })
    }

    const addfollow = (index) => {
      store.commit("ADD_TO_FOLLOW", index)
      console.log("收藏成功")
    }
    const delfollow = (id, index) => {
      store.commit("DEL_TO_FOLLOW",id, index)
    }

    return {
        loading,
        pictures,
        hasMore,
        loadMore,
        load,
        toDetails,
        addfollow,
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100vh;
}
.infiniteUl {
  height: 600px;
  width: 375px;
  overflow-y: auto;
  overflow-x: hidden;
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
.author{
    margin-top: 10px;
    font-size:19px;
    font-weight:bold;
    margin-bottom: 20px;
    }
.star{
  color: yellow;
  left: 10px;
  top: 2px;
}
.resize{
  border-radius: 8px;
}
</style>
