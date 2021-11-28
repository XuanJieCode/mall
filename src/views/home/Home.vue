<template>
  <div>
    <nav-bar class="home_nav">
      <template v-slot:center>
        <div>懒小姐花店</div>
      </template>
    </nav-bar>
    <home-swiper :res="result"></home-swiper>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import { getHomeMultidata } from "network/homeRequest";
// import SwiperItem from 'components/common/swiper/swiperItem';
export default {
  name: "Home",
  data() {
    return {
      result: Array,
    };
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created() {
    getHomeMultidata().then((res) => {
      this.result = res;
      // console.log(this.result);
    });
  },
  methods: {},
};
</script>

<style scope>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>