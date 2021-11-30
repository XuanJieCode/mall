<template>
  <div id="swiper">
    <ul class="swiperwrap">
      <li v-for="imgs in res" class="swiperItem" :key="imgs.goods_id">
        <a href="#"><img :src="imgs.goods_isimg" /></a>
      </li>
			<div class="swiper_point_wrap">
				<span v-for="imgs in res" :key="imgs.goods_id" class="swiper_point"></span>
			</div>
			
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  components: {},
  props: {
    res: {
      type: Array,
    },
  },
	data(){
		return {
			timer:null
		}
	},
  mounted() {
    this.move()
  },
  methods: {
		move(){
			let item = document.getElementsByClassName('swiperItem');
			let item_point = document.getElementsByClassName("swiper_point");
			let itemLength = 3;
			// console.log(itemLength);
			this.timer = setInterval(()=>{
				item[itemLength].style.opacity = 0;
				// item_point[itemLength].style.backgroundColor = "tomato"
				for (let p = 0; p < item_point.length; p++) {
					item_point[p].style.backgroundColor = "#fff"
				}
				item_point[itemLength].style.backgroundColor = "tomato"
				itemLength--;
				
				if(itemLength < 0){
					itemLength = 3;
					for (let i = 0; i <= itemLength; i++) {
						item[i].style.opacity = 1;
					}
				}
				
			}, 5000);
		},
    stopmove() {

		}
  },
};
</script>

<style scoped>
#swiper {
  overflow: hidden;
  
	/* margin-top: 44px; */
  width: 100%;
  height: 210px;
}
.swiperwrap {
	position: relative;
  width: 100%;
  height: 100%;
}
.swiperItem { 
	position: absolute;
	opacity: 1;
  width: 100%;
  height: 100%;
	transition: 3s;
}
img {
  width: 100%;
  height: 100%;
}
.swiper_point_wrap {
	display: flex;
	position: absolute;
	bottom: 3%;

	align-items: center;
	justify-content: center;
	
	width: 100%;
	height: 35px;
	
}
.swiper_point {
	margin: 0 5px;
	width: 8px;
	height: 8px;
	background-color: #fff;
	z-index: 3;
	border-radius: 50%;
}
</style>
