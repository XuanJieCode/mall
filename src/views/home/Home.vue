<template>
  <div id="home">
    <nav-bar class="home_nav">
      <template v-slot:center>
        <div>懒小姐店铺</div>
      </template>
    </nav-bar>

		<scroll class="content" ref="scroll">
			<home-swiper :res="result"></home-swiper>
			<feature-view />
			<tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
			<goods-lists :goods="goodslists[currentType].list" contenteditable="" class="goodslists"/>
		</scroll>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import GoodsLists from "components/content/goods/GoodsLists";
import TabControl from "components/content/tabControl/TabControl"
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";
import { getHomeMultidata, getHomeGoods } from "network/homeRequest";
// import Scroll from '../../components/common/scroll/Scroll.vue';


export default {
  name: "Home",
  data() {
    return {
      result: Array,
			goodslists:{
				'pop':{page:0, list:[]},
				'new':{page:0, list:[]},
				'sell':{page:0, list:[]},
			},
			currentType:'pop'
    };
  },
  components: {
    NavBar,
    HomeSwiper,
		FeatureView,
		TabControl,
		GoodsLists,
		Scroll
  },
  created() {
    this.getHomeMultidata()

		this.getHomeGoods(this.currentType)
  },
  methods: {
		tabClick(index){
			switch (index){
				case 0:
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break
			}
		},

		// axios sync请求
		getHomeMultidata(){
			getHomeMultidata().then((res) => {
				this.result = res;
				// console.log(this.result);
			})
		},
		getHomeGoods(type){
			let page = this.goodslists[type].page;
			
			getHomeGoods(type,page).then(res => {
				this.goodslists[type].list.push(...res);
				this.goodslists[type].page += 1;
				// console.log(this.goodslists[type].list);
			})
		}
		
	},
};
</script>

<style scoped>
#home {
	height: 100vh;
	position: relative;
}
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
.goodslists {
	margin-bottom: 49px;
}
.content {
	overflow: hidden;
	/* height: 300px; */
	position: absolute;
	top: 44px;
	bottom: 49px;
	left:0;
	right: 0;

}
</style>