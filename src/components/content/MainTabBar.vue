<template>
	<tab-bar>
		<tab-bar-item path='/home'>
			<img slot="tabbar-icon-active" src="~assets/img/tabbar/home_active.svg">
			<img slot="tabbar-icon" src="~assets/img/tabbar/home.svg">
			<div slot="tabbar-text">Home</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TarBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
	name: 'mainTabBar',
  components: { 
		TabBar,
		TabBarItem
	}

}
</script>

<style>

</style>