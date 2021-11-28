<template>
	<div id="app">
		<router-view />
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
import mainTabBar from 'components/content/MainTabBar'
export default {
  components: {
		mainTabBar
	},
	name: 'app'
}
</script>

<style scope>
@import "assets/css/base.css";
@import "assets/css/normalize.css"
</style>
