<template>
  <div class="tabbar-item" @click="itemClick">
		<div v-if="isActive">
			<slot name="tabbar-icon-active"></slot>
		</div>
		<div v-else>
			<slot name="tabbar-icon"></slot>
		</div>
		<div>
			<slot name="tabbar-text"></slot>
		</div>
  </div>
</template>

<script>
export default {
	name: 'TabBarItem',
	data(){
		return {
			isActive: true
		}
	}
}
</script>

<style>
.tabbar-item {
	margin-top: 5px;
	float: 1;
	text-align: center;
	height: 49px;
}
.tabbar-item img {
	width: 14px;
	height: 24px;
	vertical-align: middle;
}
.active {
	color: brown;
}
</style>