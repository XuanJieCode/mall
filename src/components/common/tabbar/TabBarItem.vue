<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="tabbar_icon_active"></slot>
    </div>
    <div v-else>
      <slot name="tabbar_icon"></slot>
    </div>
    <div class="bar_txt" :class="{ active: isActive }">
      <slot name="tabbar_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
		path: String
	},
  data() {
    return {
      // isActive: true,
    }
  },
	computed: {
		isActive(){
			return this.$route.path.indexOf(this.path) != -1
		}
	},
	methods:{
		itemClick(){
			this.$router.replace(this.path).catch()
		}
	}
	
};
</script>

<style>
.tabbar-item {
  margin: 3px 0 2px;
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img {
  width: 14px;
  height: 24px;
  vertical-align: middle;
}
.bar_txt {
	font-size: 14px;
	font-family:'Times New Roman', Times, serif;
}
.active {
  color: brown;
}
</style>